export function requireEnvVar(varName: string): string {
  const value = process.env[varName]
  if (value === null || value === undefined) {
    throw new Error(`environment variable ${varName} not defined`)
  }
  return value
}

export const scopes = [
  'view_audit_log:demo-1',
  'manage_api_clients:demo-1',
  'view_api_clients:demo-1',
]
