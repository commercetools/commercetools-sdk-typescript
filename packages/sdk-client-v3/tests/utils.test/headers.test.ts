import { getHeaders } from '../../src/utils'

describe('header parser', () => {
  test('should return `null` if header is not provided', () => {
    expect(getHeaders(null)).toEqual(null)
  })

  test('should parse raw header', () => {
    const headers = {
      raw: jest.fn(() => ({
        'Content-Type': 'application/json',
      })),
    }

    expect(getHeaders(headers)).toEqual({ 'Content-Type': 'application/json' })
  })

  test('should parse header with header parser function', () => {
    const headers = {
      'content-type': 'application/json',
    }

    expect(getHeaders(headers)).toEqual({ 'content-type': 'application/json' })
  })

  test('should parse headers without header parser functions', () => {
    const headers = {
      forEach: jest.fn((consumer) =>
        consumer('application/json', 'Content-Type')
      ),
    }

    expect(getHeaders(headers)).toEqual({ 'Content-Type': 'application/json' })
    expect(headers.forEach).toHaveBeenCalled()
    expect(headers.forEach).toHaveBeenCalledTimes(1)
  })
})
