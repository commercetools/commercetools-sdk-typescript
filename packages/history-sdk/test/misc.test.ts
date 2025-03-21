import { ctpApiBuilder } from './helpers/api-helpers'
import { requireEnvVar } from './helpers/test-utils'

describe('::misc', () => {
  const _var = (env: string) => `environment variable ${env} not defined`
  test('should throw error if `env` is falsy', () => {
    const env1 = 'UNKNOWN_ENV',
      env2 = 'UNDEFINED_ENV'
    expect(() => requireEnvVar(env1)).toThrow(_var(env1))
    expect(() => requireEnvVar(env2)).toThrow(_var(env2))
  })

  test.skip('check can get project info', async () => {
    const res = await ctpApiBuilder
      .get({ queryArgs: { limit: 1, offset: 0 } })
      .execute()
    expect(res.statusCode).toEqual(200)
  })
})
