import { userAgent } from '../../src/utils'

const userAgentBrowser =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36'

describe('for browser', () => {
  const originalWindow = global.window
  global.window = {
    // @ts-ignore
    document: {
      nodeType: 9,
    },
    // @ts-ignore
    navigator: {
      userAgent: userAgentBrowser,
    },
  }
  const userAgentObect = userAgent({
    name: 'commercetools-sdk-javascript',
    version: '1.0.0',
    libraryName: 'my-awesome-library',
    libraryVersion: '1.0.0',
    contactUrl: 'https://commercetools.com',
    contactEmail: 'helpdesk@commercetools.com',
  })
  // Reset original `global.window`
  global.window = originalWindow

  test('has sdk info', () => {
    expect(userAgentObect).toMatch('commercetools-sdk-javascript')
  })

  test('has browser info', () => {
    // because we use jsdom
    expect(userAgentObect).toMatch(userAgentBrowser)
  })

  test('has library info', () => {
    expect(userAgentObect).toMatch('my-awesome-library/1.0.0')
  })

  test('has library url', () => {
    expect(userAgentObect).toMatch('https://commercetools.com')
  })

  test('has contact info', () => {
    expect(userAgentObect).toMatch('helpdesk@commercetools.com')
  })
})

describe('for node', () => {
  const userAgentObject = userAgent({
    name: 'commercetools-sdk-javascript',
    version: '1.0.0',
    libraryName: 'my-awesome-library',
    libraryVersion: '1.0.0',
    contactUrl: 'https://commercetools.com',
    contactEmail: 'helpdesk@commercetools.com',
  })

  test('has sdk info', () => {
    expect(userAgentObject).toMatch('commercetools-sdk-javascript')
  })

  test('has node info', () => {
    expect(userAgentObject).toMatch(`node.js/`)
  })

  test('has library info', () => {
    expect(userAgentObject).toMatch('my-awesome-library/1.0.0')
  })

  test('has library info', () => {
    const _userAgentObject = userAgent({
      version: '1.0.0',
      name: 'commercetools-sdk-javascript',
      libraryName: 'my-awesome-library',
    })
    expect(_userAgentObject).toMatch('my-awesome-library')
  })

  test('has library url', () => {
    expect(userAgentObject).toMatch('https://commercetools.com')
  })

  test('has contact info', () => {
    expect(userAgentObject).toMatch('helpdesk@commercetools.com')
  })
})

describe('validation', () => {
  test('should throws if options is undefined', () => {
    expect(() => userAgent(null)).toThrow('Missing required option `name`')
  })

  test('should throws if options is empty', () => {
    expect(() => userAgent(null)).toThrow('Missing required option `name`')
  })

  test('should not throw if options is missing name', () => {
    expect(() => userAgent({})).not.toThrow()
  })
})

describe('optional information', () => {
  const { version } = require('../../package.json')
  const platformInfo = `(${process.platform}; ${process.arch})`

  test('create user agent with the correct SDK', () => {
    const userAgentObect = userAgent({
      name: `commercetools-sdk-javascript-v2/${version}`,
    })
    expect(userAgentObect).toBe(
      `commercetools-sdk-javascript-v2/${version} node.js/${process.version.slice(
        1
      )} ${platformInfo}`
    )
  })

  test('create user agent with library name and version', () => {
    const userAgentObect = userAgent({
      name: `commercetools-sdk-javascript-v2/${version}`,
      libraryName: 'my-awesome-library',
      libraryVersion: '1.0.0',
    })
    expect(userAgentObect).toBe(
      `commercetools-sdk-javascript-v2/${version} node.js/${process.version.slice(
        1
      )} ${platformInfo} my-awesome-library/1.0.0`
    )
  })

  test('create user agent with contact url', () => {
    const userAgentObect = userAgent({
      name: `commercetools-sdk-javascript-v2/${version}`,
      contactUrl: 'https://commercetools.com',
    })
    expect(userAgentObect).toBe(
      `commercetools-sdk-javascript-v2/${version} node.js/${process.version.slice(
        1
      )} ${platformInfo} (+https://commercetools.com)`
    )
  })

  test('create user agent with contact email', () => {
    const userAgentObect = userAgent({
      name: `commercetools-sdk-javascript-v2/${version}`,
      contactEmail: 'helpdesk@commercetools.com',
    })
    expect(userAgentObect).toBe(
      `commercetools-sdk-javascript-v2/${version} node.js/${process.version.slice(
        1
      )} ${platformInfo} (+helpdesk@commercetools.com)`
    )
  })

  test('create user agent with full contact info', () => {
    const userAgentObect = userAgent({
      name: `commercetools-sdk-javascript-v2/${version}`,
      contactUrl: 'https://commercetools.com',
      contactEmail: 'helpdesk@commercetools.com',
    })
    expect(userAgentObect).toBe(
      `commercetools-sdk-javascript-v2/${version} node.js/${process.version.slice(
        1
      )} ${platformInfo} (+https://commercetools.com; +helpdesk@commercetools.com)`
    )
  })
})
