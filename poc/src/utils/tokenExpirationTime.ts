export default function calculateExpirationTime(expiresIn: number): number {
  return (
    Date.now() +
    // Add a gap of 5 minutes before expiration time.
    expiresIn * 1000 -
    5 * 60 * 1000
  )
}
