export function requireEnvVar(varName: string): string {
  const value = process.env[varName]
  if (value === null || value === undefined) {
    throw new Error(`environment variable ${varName} not defined`)
  }
  return value
}

export async function sleep(millis: number) {
  return new Promise<void>((resolve, error) => {
    setTimeout(() => resolve(), millis)
  })
}

export const scopes = projectKey => [
  `manage_project:${projectKey}`,
  //  view_audit_log:${projectKey}
  //  manage_api_clients:${projectKey}
  //  view_api_clients:${projectKey}`
]
