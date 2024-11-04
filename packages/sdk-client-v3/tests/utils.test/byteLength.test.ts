var Buffer = require('buffer/').Buffer
import { byteLength } from '../../src/utils'

describe('byteLength test', () => {
  test('should properly decode a normal character string.', () => {
    const str = 'this is a regular/normal characters string'
    expect(byteLength(str)).toEqual(str.length.toString())
  })

  test('should properly decode a special character string.', () => {
    const str = 'äëöü'
    expect(byteLength(str)).toEqual('8')
    expect(str.length.toString()).toEqual('4')

    expect(byteLength(str)).not.toEqual(str.length.toString())
    expect(Number(byteLength(str)) - str.length).not.toEqual(0)
    expect(byteLength(str)).toEqual('8')
  })

  test('should show the difference between `String.length` and `Buffer.byteLength`', () => {
    const str = 'äëöü'
    expect(byteLength(str)).toEqual('8')
    expect(str.length.toString()).toEqual('4')
  })

  test('should show there is no difference between `new TextEncoder().encode`', () => {
    const str = 'äëöü'
    expect(byteLength(str)).toEqual('8')
    expect(new TextEncoder().encode(str).length.toString()).toEqual('8')

    const str2 = JSON.stringify({ n: 'äëöü' })
    expect(byteLength(str2)).toEqual('16')
    expect(new TextEncoder().encode(str2).length.toString()).toEqual('16')
  })

  test('should return an accurate result of byte length of a string', () => {
    const str = 'the string length is 23'
    expect(byteLength(str)).toEqual('23')
  })

  test('should return an accurate result of byte length of a Buffer', () => {
    const buffer = Buffer.from('the string length is 23')
    expect(byteLength(buffer)).toEqual('23')
  })

  test('should return an accurate result of byte length of an object', () => {
    const object = { 'byte-length': 18 }
    expect(byteLength(object)).toEqual('18')
  })

  test('should return `0` is body is null', () => {
    expect(byteLength(null)).toEqual('0')
  })

  test('should return `0` is body is undefined', () => {
    expect(byteLength(undefined)).toEqual(`0`)
  })
  test('should return `0` is body is not provided', () => {
    // @ts-ignore
    expect(byteLength()).toEqual('0')
  })
})
