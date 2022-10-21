import crytpo from 'crypto'

export default function generateID() {
  return crytpo
    .randomBytes(32)
    .toString('base64')
    .replace(/[\/\-=+]/gi, '')
}
