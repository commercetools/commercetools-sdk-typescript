import fetch from 'node-fetch'
import { Buffer } from 'buffer/'
import {
  Next,
  Middleware,
  MiddlewareRequest,
  AuthMiddlewareOptions,
  IBuiltRequestParams,
  TokenInfo,
  ClientRequest,
  HttpErrorType,
  MiddlewareResponse,
  executeRequestOptions,
} from '../types/types'
import { getHeaders } from '../utils'

export function buildRequestForClientCredentialsFlow(
  options: AuthMiddlewareOptions
): IBuiltRequestParams {
  // Validate options
  if (!options) throw new Error('Missing required options')
  if (!options.host) throw new Error('Missing required option (host)')
  if (!options.projectKey)
    throw new Error('Missing required option (projectKey)')
  if (!options.credentials)
    throw new Error('Missing required option (credentials)')

  const { clientId, clientSecret } = options.credentials
  if (!(clientId && clientSecret))
    throw new Error('Missing required credentials (clientId, clientSecret)')

  const scope = options.scopes ? options.scopes.join(' ') : undefined
  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
    'base64'
  )
  // This is mostly useful for internal testing purposes to be able to check
  // other oauth endpoints.
  const oauthUri = options.oauthUri || '/oauth/token'
  const url = options.host.replace(/\/$/, '') + oauthUri
  const body = `grant_type=client_credentials${scope ? `&scope=${scope}` : ''}`

  return {
    url,
    body,
    basicAuth,
  }
}

export default function createAuthMiddlewareForClientCredentialsFlow(
  options: AuthMiddlewareOptions
): Middleware {
  return (next: Next) => {
    return async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      // if here is a token in the header, then move on to the next middleware
      if (
        request.headers &&
        (request.headers.Authorization || request.headers.authorization)
      ) {
        // move on
        return next(request)
      }

      // implement every other conditions here - tokenCache, pendingTasks, requestState etc

      // prepare request options
      const requestOptions = {
        request,
        httpClient: options.httpClient || fetch,
        ...buildRequestForClientCredentialsFlow(options),
      }

      // make request to coco
      const requestWithAuth = await executeRequest(requestOptions)
      if (requestWithAuth) {
        // make the request and inject the token into the header
        return next(requestWithAuth)
      }
    }
  }
}

// http middleware - will be incharge of all external api calls
async function executeRequest(
  options: executeRequestOptions
): Promise<ClientRequest | HttpErrorType> {
  let _data: TokenInfo, parsed: any, text: string
  const { url, body, basicAuth, request, httpClient } = options

  if (!httpClient && typeof httpClient === 'undefined')
    throw new Error(
      // '`fetch` is not available. Please pass in `fetch` as an option or have it globally available.'
      'an `httpClient` is not available, please pass in a `fetch` or `axios` instance as an option or have them globally available.'
    )

  try {
    const response = await httpClient(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Conent-Length': Buffer.byteLength(body).toString(),
      },
      body,
    })

    if (response.ok) {
      _data = await response.json()
      const {
        access_token: token,
        expires_in: expiresIn,
        expires_at: expiresAt,
        refresh_token: refreshToken,
      }: TokenInfo = _data

      // calculate token expiration time
      // const expirationTime = calculateExpirationTime(expiresIn)

      // cache new generated token, refreshToken and expiration time
      // tokenCache.set({ token, expirationTime, refreshToken })

      // update the request object and move on
      return {
        ...request,
        headers: { ...request.headers, Authorization: `Bearer ${token}` },
        // response: {
        //   headers: getHeaders(response.headers),
        //   statusCode: response.statusCode || response.status,
        // }
      }
    }

    try {
      text = await response.text()
      parsed = JSON.parse(text)
    } catch (e) {
      parsed = text
    }

    const error: any = new Error(parsed ? parsed.message || parsed : text)
    if (parsed) error.body = parsed

    // reject whatever went wrong
    // request.reject(error)

    /**
     * or instead of rejecting the error,
     * we can also return the error response
     * to be handled by the next (retry) middleware
     */
    return {
      ...request,
      headers: { ...request.headers },
      response: {
        error,
        statusCode: response.statusCode || response.status,
      },
    }
  } catch (error) {
    // for now - log error to stdout
    console.log(error)
  }
}
