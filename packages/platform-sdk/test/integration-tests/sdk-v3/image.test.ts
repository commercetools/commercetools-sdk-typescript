import { ClientBuilder } from '@commercetools/ts-client'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'

describe('Image Upload Tests', () => {
  const projectKey = process.env.CTP_PROJECT_KEY
  const authMiddlewareOptions = {
    projectKey,
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    credentials: {
      clientId: process.env.CTP_CLIENT_ID || '',
      clientSecret: process.env.CTP_CLIENT_SECRET || '',
    },
    oauthUri: process.env.adminAuthUrl || '',
    scopes: [`manage_project:${projectKey}`],
    httpClient: fetch,
  }

  const httpMiddlewareOptions = {
    host: 'https://api.europe-west1.gcp.commercetools.com',
    httpClient: fetch,
  }

  const getImage = async (url: string) => {
    const response = await fetch(url)
    return Buffer.from(await response.arrayBuffer())
  }

  const client = new ClientBuilder()
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build()

  const api = createApiBuilderFromCtpClient(client)
  test('upload a product image', async () => {
    const getProductID = async () => {
      return api.withProjectKey({ projectKey }).products().get().execute()
    }

    const ID = (await getProductID()).body.results[0].id
    const uploadResponse = await api
      .withProjectKey({ projectKey })
      .products()
      .withId({ ID })
      .images()
      .post({
        headers: {
          'Content-Type': 'image/jpeg',
        },
        body: await getImage(
          'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/085498_1_medium.jpg'
        ),
        queryArgs: {
          filename: 'DKNY.jpeg',
        },
      })
      .execute()

    expect(uploadResponse.body.id).toEqual(ID)
    expect(uploadResponse.statusCode).toEqual(200)
  })
})
