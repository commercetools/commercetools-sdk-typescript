import { ClientBuilder, Credentials } from '@commercetools/sdk-client-v2'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'

const userClientBuilder = new ClientBuilder()
const anonymousClientBuilder = new ClientBuilder()
interface Options {
  projectKey: string
  oauthUri?: string
  baseUri?: string
  credentials?: Credentials
}

class Client {
  private projectKey: string
  private oauthUri: string
  private baseUri: string
  private credentials: Credentials

  constructor({ projectKey, oauthUri, baseUri, credentials }: Options) {
    this.projectKey = projectKey
    this.oauthUri = oauthUri
    this.baseUri = baseUri
    this.credentials = credentials
  }

  getDefaultClient() {
    return anonymousClientBuilder
      .defaultClient(
        this.baseUri,
        this.credentials,
        this.oauthUri,
        this.projectKey
      )
      .build()
  }

  getClientFromOption(options) {
    const { projectKey, authMiddleware, httpMiddlewareOptions, credentials } =
      options
    if (credentials) {
      return userClientBuilder
        .withProjectKey(projectKey)
        .withMiddleware(authMiddleware)
        .withHttpMiddleware(httpMiddlewareOptions)
        .withLoggerMiddleware()
        .build()
    }

    return anonymousClientBuilder
      .withProjectKey(projectKey)
      .withMiddleware(authMiddleware)
      .withHttpMiddleware(httpMiddlewareOptions)
      .withLoggerMiddleware()
      .build()
  }

  getProjectKey() {
    return this.projectKey
  }

  getApiRoot(client) {
    return createApiBuilderFromCtpClient(client)
  }
}

export default Client
