export function requireEnvVar(varName: string): string {
  const value = process.env[varName]
  if (value === null || value === undefined) {
    throw new Error(`environment variable ${varName} not defined`)
  }
  return value
}
