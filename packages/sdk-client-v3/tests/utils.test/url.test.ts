import { parseURLString, stringifyURLString } from '../../src/utils'

describe('stringifyer', () => {
  test('remove undefined and null values in array', async () => {
    expect(
      stringifyURLString({ foo: [null as any, 'bar', undefined, 'baz'] })
    ).toEqual('foo=bar&foo=baz')
  })

  test('parser', () => {
    expect(parseURLString('foo=bar&foo=baz')).toEqual({ foo: ['bar', 'baz'] })
  })
})
