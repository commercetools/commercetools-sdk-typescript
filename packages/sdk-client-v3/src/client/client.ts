import qs from 'querystring'
import {
  Next,
  Dispatch,
  ClientResult,
  ClientRequest,
  ClientOptions,
  MiddlewareResponse,
  Middleware,
  ProcessFn,
  ProcessOptions,
} from '../types/types'
import { validateClient, validate } from '../../src/utils'

function compose({
  middlewares,
}: {
  middlewares: Array<Middleware>
}): Middleware {
  if (middlewares.length === 1) return middlewares[0]

  const _middlewares = middlewares.slice()
  return _middlewares.reduce(
    (ac: Dispatch, cv: Dispatch) =>
      (...args: Array<Next>): Next =>
        ac(cv.apply(null, args))
  )
}

// process batch requests
let _options: ClientOptions
export function process(
  request: ClientRequest,
  fn: ProcessFn,
  processOpt?: ProcessOptions
): Promise<Array<ClientRequest>> {
  validate('process', request, { allowedMethods: ['GET'] })

  if (typeof fn !== 'function')
    throw new Error(
      'The "process" function accepts a "Function" as a second argument that returns a Promise. See https://commercetools.github.io/nodejs/sdk/api/sdkClient.html#processrequest-processfn-options'
    )

  // Set default process options
  const opt: ProcessOptions = {
    total: Number.POSITIVE_INFINITY,
    accumulate: true,
    ...processOpt,
  }

  return new Promise((resolve: Function, reject: Function) => {
    let _path: string,
      _queryString = ''
    if (request && request.uri) {
      const [path, queryString] = request.uri.split('?')
      _path = path
      _queryString = queryString
    }

    const requestQuery = { ...qs.parse(_queryString) }
    const query = {
      // defaults
      limit: 20,
      // merge given query params
      ...requestQuery,
    }

    let itemsToGet = opt.total
    let hasFirstPageBeenProcessed = false
    const processPage = async (lastId?: string, acc: Array<unknown> = []) => {
      // Use the lesser value between limit and itemsToGet in query
      const limit = query.limit < itemsToGet ? query.limit : itemsToGet
      const originalQueryString = qs.stringify({ ...query, limit })

      const enhancedQuery = {
        sort: 'id asc',
        withTotal: false,
        ...(lastId ? { where: `id > "${lastId}"` } : {}),
      }
      const enhancedQueryString = qs.stringify(enhancedQuery)
      const enhancedRequest = {
        ...request,
        uri: `${_path}?${enhancedQueryString}&${originalQueryString}`,
      }

      try {
        const payload: ClientResult = await createClient(_options).execute(
          enhancedRequest
        )

        const { results, count: resultsLength } = payload?.body || {}

        if (!resultsLength && hasFirstPageBeenProcessed) {
          return resolve(acc || [])
        }

        const result = await Promise.resolve(fn(payload))
        // const result = await fn(payload)
        let accumulated: Array<Omit<ClientResult, 'body'>>
        hasFirstPageBeenProcessed = true

        if (opt.accumulate) accumulated = acc.concat(result || [])

        itemsToGet -= resultsLength
        // If there are no more items to get, it means the total number
        // of items in the original request have been fetched so we
        // resolve the promise.
        // Also, if we get less results in a page then the limit set it
        // means that there are no more pages and that we can finally
        // resolve the promise.
        if (resultsLength < query.limit || !itemsToGet) {
          return resolve(accumulated || [])
        }

        const last = results[resultsLength - 1]
        const newLastId = last && last.id

        processPage(newLastId, accumulated)
      } catch (error) {
        reject(error)
        // return {
        //   error
        // }
      }
    }

    // Start iterating through pages
    processPage()
  })
}

export default function createClient(middlewares: ClientOptions) {
  _options = middlewares
  validateClient(middlewares)

  const resolver = {
    async resolve(rs): Promise<ClientResult> {
      const { reject, resolve, response, retryCount, ...rest } = rs

      const res = {
        body: null,
        error: null,
        reject,
        resolve,
        ...(retryCount ? { retryCount } : {}),
        request: rest,
        ...response,
      } as MiddlewareResponse

      if (res.error) {
        res.reject(res)
        return res
      }

      res.resolve(res)
      return res
    },
  }

  const dispatch = compose(middlewares)(resolver.resolve as any)
  return {
    process,
    execute(request: ClientRequest): Promise<ClientResult> {
      validate('exec', request)
      return new Promise((resolve, reject) => {
        return dispatch({
          reject,
          resolve,
          ...request,
        })
      })
    },
  }
}
