import { parseURLString, stringifyURLString } from '../../src/utils'

describe('stringifyer', () => {
  test('remove undefined and null values in array', async () => {
    expect(
      stringifyURLString({ foo: [null, 'bar', undefined, 'baz'] })
    ).toEqual('foo=bar&foo=baz')
  })

  test('handle single element array query parameters', async () => {
    expect(stringifyURLString({ foo: ['bar'] })).toEqual('foo=bar')
  })

  test('handle array query parameters', async () => {
    expect(stringifyURLString({ foo: ['bar', 'baz'] })).toEqual(
      'foo=bar&foo=baz'
    )
  })

  test('handle number query parameters', async () => {
    expect(stringifyURLString({ foo: 123 })).toEqual('foo=123')
  })

  test('handle boolean query parameters', async () => {
    expect(stringifyURLString({ foo: true, bar: false })).toEqual(
      'foo=true&bar=false'
    )
  })

  test('handle invalid characters', async () => {
    expect(stringifyURLString({ foo: '<>abc /' })).toEqual('foo=%3C%3Eabc+%2F')
  })

  test('handle empty arrays', async () => {
    expect(stringifyURLString({ foo: [] })).toEqual('')
  })

  test('handle empty arrays after defined property', async () => {
    expect(stringifyURLString({ bar: 'baz', foo: [] })).toEqual('bar=baz')
  })

  test('remove undefined and null', async () => {
    expect(
      stringifyURLString({
        nullValue: null,
        undefinedValue: undefined,
        value: 'bar',
      })
    ).toEqual('value=bar')
  })

  test('handle undefined variable map', async () => {
    expect(stringifyURLString(undefined)).toEqual('')
  })
})

describe('parser', () => {
  test('parser', () => {
    expect(parseURLString('foo=bar&foo=baz')).toEqual({ foo: ['bar', 'baz'] })
  })

  test('handle single element array query parameters', async () => {
    expect(parseURLString('foo=bar')).toEqual({ foo: 'bar' })
  })

  test('handle array query parameters', async () => {
    expect(parseURLString('foo=bar&foo=baz')).toEqual({ foo: ['bar', 'baz'] })
  })

  test('handle number query parameters', async () => {
    expect(parseURLString('foo=123')).toEqual({ foo: '123' })
  })

  test('handle boolean query parameters', async () => {
    expect(parseURLString('foo=true&bar=false')).toEqual({
      foo: 'true',
      bar: 'false',
    })
  })

  test('handle invalid characters', async () => {
    expect(parseURLString('foo=%3C%3Eabc+%2F')).toEqual({ foo: '<>abc /' })
  })

  test('handle empty arrays after defined property', async () => {
    expect(parseURLString('bar=baz')).toEqual({ bar: 'baz' })
  })

  test('remove undefined and null values in array', async () => {
    expect(parseURLString('foo=bar&foo=baz')).toEqual({ foo: ['bar', 'baz'] })
  })

  test('handle empty string', async () => {
    expect(parseURLString('')).toEqual({})
  })

  test('handle undefined value', () => {
    expect(parseURLString(undefined)).toEqual({})
  })
})
