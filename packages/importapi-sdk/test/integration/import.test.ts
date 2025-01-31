import { ClientBuilder } from '@commercetools/ts-client'
import { createApiBuilderFromCtpClient } from '@commercetools/importapi-sdk'

describe('Import API', () => {
  const containerKey = 'import-container-key'
  const projectKey = process.env.CTP_PROJECT_KEY as string
  const authMiddlewareOptions = {
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey,
    credentials: {
      clientId: process.env.CTP_CLIENT_ID as string,
      clientSecret: process.env.CTP_CLIENT_SECRET as string,
    },
    scopes: [`manage_project:${projectKey}`],
    httpClient: fetch,
  }

  const httpMiddlewareOptions = {
    host: 'https://import.europe-west1.gcp.commercetools.com',
    httpClient: fetch,
  }

  const client = new ClientBuilder()
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build()

  const api = createApiBuilderFromCtpClient(client)

  test('create an import container', async () => {
    const container = await api
      .withProjectKeyValue({ projectKey })
      .importContainers()
      .post({
        body: {
          key: containerKey,
        },
      })
      .execute()

    expect(container['error']).toEqual(null)
    expect(container.statusCode).toEqual(201)
    expect(container.body.key).toEqual(containerKey)
  })

  test('create orders', async () => {
    const ordersImport = await api
      .withProjectKeyValue({ projectKey })
      .orders()
      .importContainers()
      .withImportContainerKeyValue({ importContainerKey: containerKey })
      .post({
        body: {
          type: 'order',
          resources: [
            {
              orderNumber: 'order-number-38b8ced1-c77c-4acb-bcb5-fb8b6e737a15',
              totalPrice: {
                type: 'centPrecision',
                currencyCode: 'EUR',
                fractionDigits: 2,
                centAmount: 0,
              },
              custom: {
                type: {
                  typeId: 'type',
                  key: 'order-custom-field',
                },
                fields: {
                  customerCode: {
                    type: 'String',
                    value: 'Some String with ß',
                  },
                },
              },
            },
          ],
        },
      })
      .execute()

    expect(ordersImport['error']).toEqual(null)
    expect(ordersImport.statusCode).toEqual(201)
    expect(ordersImport.body.operationStatus[0].state).toEqual('processing')
  })

  test('delete an import container', async () => {
    await api
      .withProjectKeyValue({ projectKey })
      .importContainers()
      .withImportContainerKeyValue({
        importContainerKey: containerKey,
      })
      .delete()
      .execute()

    // get container
    await api
      .withProjectKeyValue({ projectKey })
      .importContainers()
      .withImportContainerKeyValue({ importContainerKey: containerKey })
      .get()
      .execute()
      .catch((err) => {
        expect(err.name).toBe('NotFound')
        expect(err.statusCode).toEqual(404)
        expect(err.body.errors[0].code).toBe('ResourceNotFound')
        expect(err.body.errors[0].message).toBe(
          'Import container import-container-key does not exist'
        )
      })
  })
})
