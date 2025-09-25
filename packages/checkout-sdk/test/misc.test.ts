import { requireEnvVar } from './helpers/test-utils'

describe('::misc', () => {
  const _var = (env: string) => `environment variable ${env} not defined`
  test('should throw error if `env` is falsy', () => {
    const env1 = 'UNKNOWN_ENV',
      env2 = 'UNDEFINED_ENV'
    expect(() => requireEnvVar(env1)).toThrow(_var(env1))
    expect(() => requireEnvVar(env2)).toThrow(_var(env2))
  })
})
