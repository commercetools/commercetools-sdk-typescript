import { ctpApiBuilder } from '../../helpers/ctp-api-helper'
import { requireEnvVar, waitForIndexing } from '../../helpers/test-utils'

describe('::misc', () => {
  const _var = (env: string) => `environment variable ${env} not defined`
  test('should throw error if `env` is falsy', () => {
    const env1 = 'UNKNOWN_ENV',
      env2 = 'UNDEFINED_ENV'
    expect(() => requireEnvVar(env1)).toThrow(_var(env1))
    expect(() => requireEnvVar(env2)).toThrow(_var(env2))
  })

  test('check can get project info', async () => {
    const res = await ctpApiBuilder.get().execute()
    expect(res.statusCode).toEqual(200)
  })

  test('should throw if function did not resolve to a truthy value', async () => {
    const getResource = async () => Promise.resolve(false)
    expect(
      async () => await waitForIndexing(getResource, 0, 0)
    ).rejects.toThrow('Resource did not indexed within timeout')
  })
})
