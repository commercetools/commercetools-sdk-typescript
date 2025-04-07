import { apiRoot } from '../test-utils'

export const deleteState = async (responseCreatedState) =>
  apiRoot
    .states()
    .withId({ ID: responseCreatedState.body.id })
    .delete({
      queryArgs: { version: responseCreatedState.body.version },
    })
    .execute()
