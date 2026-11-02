import {
  buildRequestForAnonymousSessionFlow,
  buildRequestForClientCredentialsFlow,
  buildRequestForPasswordFlow,
} from '../../src/middleware/auth-middleware/auth-request-builder'

const base = {
  host: 'http://localhost:8080',
  projectKey: 'test',
  credentials: {
    clientId: '123',
    clientSecret: 'secret',
    user: { username: 'foo', password: 'bar' },
  },
}

describe('auth request injection', () => {
  test('anonymousId cannot inject form parameters', () => {
    const { body } = buildRequestForAnonymousSessionFlow({
      ...base,
      credentials: {
        ...base.credentials,
        anonymousId: 'x&scope=manage_project:foo',
      },
    } as any)
    expect(body).toContain('&anonymous_id=x%26scope%3Dmanage_project%3Afoo')
    expect(new URLSearchParams(body).getAll('scope')).toEqual([])
  })

  test('projectKey cannot alter the oauth path', () => {
    const { url } = buildRequestForAnonymousSessionFlow({
      ...base,
      projectKey: '../other',
    } as any)
    expect(url).toBe('http://localhost:8080/oauth/..%2Fother/anonymous/token')
  })

  test('projectKey cannot alter the password flow path', () => {
    const { url } = buildRequestForPasswordFlow({
      ...base,
      projectKey: 'a/b',
    } as any)
    expect(url).toBe('http://localhost:8080/oauth/a%2Fb/customers/token')
  })

  test.each([
    ['client credentials', buildRequestForClientCredentialsFlow],
    ['password', buildRequestForPasswordFlow],
  ])('scopes cannot inject parameters (%s)', (_, build) => {
    const { body } = build({
      ...base,
      scopes: ['manage_project:foo', 'x&grant_type=password'],
    } as any)
    const params = new URLSearchParams(body)
    expect(params.getAll('grant_type')).toHaveLength(1)
    expect(params.get('scope')).toBe('manage_project:foo x&grant_type=password')
  })
})
