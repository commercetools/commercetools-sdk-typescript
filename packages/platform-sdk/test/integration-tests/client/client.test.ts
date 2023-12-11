import { requireEnvVar } from '../../helpers/test-utils'
import { ClientBuilder } from '@commercetools/sdk-client-v2/src'

export const projectKey = requireEnvVar('CTP_PROJECT_KEY')
const clientId = requireEnvVar('CTP_CLIENT_ID')
const clientSecret = requireEnvVar('CTP_CLIENT_SECRET')
const authURL = requireEnvVar('CTP_AUTH_URL')

describe('testing api root client', () => {
  it.skip('should create api root client with anonymous session', async () => {
    const ctpClient = new ClientBuilder()
      .withAnonymousSessionFlow({
        host: authURL,
        projectKey,
        credentials: {
          clientId: clientId,
          clientSecret: clientSecret,
        },
      })
      .build()

    const response = await ctpClient.execute({
      method: 'POST',
      uri: `https://auth.europe-west1.gcp.commercetools.com/oauth/${projectKey}/anonymous/token`,
    })
    expect(response.statusCode).toBe(200)
  })
})
