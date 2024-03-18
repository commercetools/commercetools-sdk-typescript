import {
  Client,
  ClientOptions,
  ClientRequest,
  ClientResponse,
  ClientResult,
  MiddlewareRequest,
  MiddlewareResponse,
  ProcessFn,
  ProcessOptions,
  SuccessResult,
} from '../types/sdk.d'
import { parseURLString } from '../utils'
import validate from './validate'

let _options: ClientOptions
export const PAGE_LIMIT = 20

function compose(...funcs: Array<Function>): Function {
  funcs = funcs.filter((func: Function): boolean => typeof func === 'function')

  if (funcs.length === 1) return funcs[0]

  return funcs.reduce(
    (a: Function, b: Function): Function =>
      (...args: Array<Function>): Array<Function> =>
        a(b(...args))
  )
}

export function process<T = any>(
  request: ClientRequest,
  fn: ProcessFn,
  processOpt: ProcessOptions
): Promise<
  Array<{
    statusCode: 200
    body: {
      limit: number
      offset: number
      count: number
      results: T[]
    }
  }>
> {
  validate('process', request, { allowedMethods: ['GET'] })

  if (typeof fn !== 'function')
    throw new Error(
      'The "process" function accepts a "Function" as a second argument that returns a Promise. See https://commercetools.github.io/nodejs/sdk/api/sdkClient.html#processrequest-processfn-options'
    )

  // Set default process options
  const opt: ProcessOptions = {
    limit: PAGE_LIMIT, // defaults
    total: Number.POSITIVE_INFINITY,
    accumulate: true,
    ...processOpt,
  }

  return new Promise((resolve: Function, reject: Function) => {
    let _path: string,
      _queryString: string = ''

    if (request && request.uri) {
      const [path, queryString] = request.uri.split('?')
      _path = path
      _queryString = queryString
    }
    // const requestQuery = { ...qs.parse(_queryString) }
    // const requestQuery = { ...Object.fromEntries(new URLSearchParams(_queryString)) }
    const requestQuery = { ...parseURLString<object>(_queryString) }
    const query = {
      // defaults
      limit: opt.limit,
      // merge given query params
      ...requestQuery,
    }

    let hasFirstPageBeenProcessed = false
    let itemsToGet = opt.total
    const processPage = async (lastId?: string, acc: Array<any> = []) => {
      // Use the lesser value between limit and itemsToGet in query
      const limit = query.limit < itemsToGet ? query.limit : itemsToGet
      // const originalQueryString = qs.stringify({ ...query, limit }, qsOptions)
      const originalQueryString = new URLSearchParams({
        ...query,
        limit,
      } as unknown as Record<string, string>).toString()

      const enhancedQuery = {
        sort: 'id asc',
        withTotal: false,
        ...(lastId ? { where: `id > "${lastId}"` } : {}),
      }
      // const enhancedQueryString = qs.stringify(enhancedQuery, qsOptions)
      const enhancedQueryString = new URLSearchParams(
        enhancedQuery as unknown as Record<string, string>
      ).toString()
      const enhancedRequest = {
        ...request,
        uri: `${_path}?${enhancedQueryString}&${originalQueryString}`,
      }

      try {
        const payload: SuccessResult = await createClient(_options).execute(
          enhancedRequest
        )

        const { results, count: resultsLength } = payload.body

        if (!resultsLength && hasFirstPageBeenProcessed) {
          return resolve(acc || [])
        }

        const result: any = await Promise.resolve(fn(payload))
        let accumulated = []
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
      }
    }

    // Start iterating through pages
    processPage()
  })
}

export default function createClient(options: ClientOptions): Client {
  _options = options
  if (!options) throw new Error('Missing required options')

  if (options.middlewares && !Array.isArray(options.middlewares))
    throw new Error('Middlewares should be an array')

  if (
    !options.middlewares ||
    !Array.isArray(options.middlewares) ||
    !options.middlewares.length
  )
    throw new Error('You need to provide at least one middleware')

  return {
    /**
     * Given a request object,
     */
    process,
    execute(request: ClientRequest): Promise<ClientResult> {
      validate('exec', request)

      return new Promise((resolve: Function, reject: Function) => {
        const resolver = (rq: MiddlewareRequest, rs: MiddlewareResponse) => {
          // Note: pick the promise `resolve` and `reject` function from
          // the response object. This is not necessary the same function
          // given from the `new Promise` constructor, as middlewares could
          // override those functions for custom behaviours.
          if (rs.error) rs.reject(rs.error)
          else {
            const resObj: ClientResponse = {
              body: rs.body || {},
              statusCode: rs.statusCode,
            }
            if (rs.headers) resObj.headers = rs.headers
            if (rs.request) resObj.request = rs.request
            rs.resolve(resObj)
          }
        }

        const dispatch = compose(...options.middlewares)(resolver)
        dispatch(
          request,
          // Initial response shape
          {
            resolve,
            reject,
            body: undefined,
            error: undefined,
          }
        )
      })
    },
  }
}
