import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { ReviewDraft } from '../../../src'

const reviewDraft: ReviewDraft = {
  key: randomUUID(),
  title: 'review-title-1',
}

export const createReview = async () =>
  apiRoot.reviews().post({ body: reviewDraft }).execute()

export const deleteReview = async (responseCreatedReview) =>
  apiRoot
    .reviews()
    .withId({ ID: responseCreatedReview.body.id })
    .delete({
      queryArgs: { version: responseCreatedReview.body.version },
    })
    .execute()
