import { requireEnvVar } from '../../helpers/test-utils'

const projectKey = requireEnvVar('CTP_PROJECT_KEY')
const clientId = requireEnvVar('CTP_CLIENT_ID')
const clientSecret = requireEnvVar('CTP_CLIENT_SECRET')
const authURL = requireEnvVar('CTP_AUTH_URL')
const apiURL = requireEnvVar('CTP_API_URL')

describe('oauth token and project details', () => {
  it('should request a token and read the project', async () => {
    const tokenRes = await fetch(`${authURL}/oauth/token`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        scope: `manage_project:${projectKey}`,
      }),
    })
    expect(tokenRes.status).toBe(200)
    const { access_token } = await tokenRes.json()
    expect(access_token).toBeDefined()

    const projectRes = await fetch(`${apiURL}/${projectKey}`, {
      headers: { Authorization: `Bearer ${access_token}` },
    })
    expect(projectRes.status).toBe(200)
    const project = await projectRes.json()
    expect(project.key).toEqual(projectKey)
  })
})
