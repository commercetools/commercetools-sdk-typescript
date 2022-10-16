import {
  Next,
  Dispatch,
  ClientResult,
  ClientRequest,
  ClientOptions,
  MiddlewareResponse,
  Middleware,
} from '../types/types'

function compose({
  middlewares,
}: {
  middlewares: Array<Middleware>
}): Middleware {
  const _middlewares = middlewares.slice()
  return _middlewares.reduce(
    (ac: Dispatch, cv: Dispatch) =>
      (...args: Array<Next>): Next =>
        ac(cv.apply(null, args))
  )
}

export default function createClient(middlewares: ClientOptions) {
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
    execute(request: ClientRequest): Promise<ClientResult> {
      return new Promise((resolve, reject) => {
        dispatch({
          reject,
          resolve,
          ...request,
        })
      })
    },
  }
}
