import crytpo from 'crypto'

// TODO: Polyfill crypto for browsers
export default function generateID() {
  return crytpo
    .randomBytes(32)
    .toString('base64')
    .replace(/[\/\-=+]/gi, '')
}
