import {
  ClientRequest,
  TokenInfo,
  HttpErrorType,
  executeRequestOptions,
} from '../../types/types'
import { Buffer } from 'buffer/'

// http middleware - will be incharge of all external api calls
export async function executeRequest(
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
