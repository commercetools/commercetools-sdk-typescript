import { HttpUserAgentOptions } from '../types/types'

/*
  This is the easiest way, for this use case, to detect if we're running in
  Node.js or in a browser environment. In other cases, this won't be even a
  problem as Rollup will provide the correct polyfill in the bundle.
  The main advantage by doing it this way is that it allows to easily test
  the code running in both environments, by overriding `global.window` in
  the specific test.
*/
const isBrowser = (): boolean =>
  typeof window !== 'undefined' &&
  window.document &&
  window.document.nodeType === 9

function getSystemInfo(): string {
  if (isBrowser()) return window.navigator.userAgent

  const nodeVersion: string = process?.version?.slice(1) || 'unknow' // unknow environment like  React Native etc
  const platformInfo = `(${process?.platform || ''}; ${process?.arch || ''})`

  return `node.js/${nodeVersion} ${platformInfo.trim()}`
}

export default function createUserAgent(options: HttpUserAgentOptions) {
  let libraryInfo: string | null = null
  let contactInfo: string | null = null

  if (!options) {
    throw new Error('Missing required option `name`')
  }

  // Main info
  const baseInfo = options.version
    ? `${options.name}/${options.version}`
    : options.name

  // Library info
  if (options.libraryName && !options.libraryVersion) {
    libraryInfo = options.libraryName
  } else if (options.libraryName && options.libraryVersion) {
    libraryInfo = `${options.libraryName}/${options.libraryVersion}`
  }

  // Contact info
  if (options.contactUrl && !options.contactEmail) {
    contactInfo = `(+${options.contactUrl})`
  } else if (!options.contactUrl && options.contactEmail) {
    contactInfo = `(+${options.contactEmail})`
  } else if (options.contactUrl && options.contactEmail) {
    contactInfo = `(+${options.contactUrl}; +${options.contactEmail})`
  }

  // System info
  const systemInfo = getSystemInfo()

  // customName
  const customAgent = options.customAgent || ''
  return [baseInfo, systemInfo, libraryInfo, contactInfo, customAgent]
    .filter(Boolean)
    .join(' ')
}
