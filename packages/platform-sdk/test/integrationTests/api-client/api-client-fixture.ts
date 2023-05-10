import { apiRoot } from '../test-utils'
import { randomUUID } from 'crypto'

const projectKey = process.env.CTP_PROJECT_KEY
const apiClientDraft = {
  name: 'test-api-client' + randomUUID(),
  scope: 'manage_project:' + projectKey,
}
export function createApiClient() {
  return apiRoot
    .apiClients()
    .post({
      body: apiClientDraft,
    })
    .execute()
}

export function deleteApiClient(id) {
  return apiRoot.apiClients().withId(id).delete().execute()
}
