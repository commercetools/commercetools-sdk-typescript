import { apiRoot } from '../test-utils'

export const deleteReview = async (responseCreatedReview) =>
  apiRoot
    .reviews()
    .withId({ ID: responseCreatedReview.body.id })
    .delete({
      queryArgs: { version: responseCreatedReview.body.version },
    })
    .execute()
