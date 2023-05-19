import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { ReviewDraft } from '../../../src'
import { createReview, deleteReview } from './review-fixture'

describe('testing review API calls', () => {
  it('should create and delete a review by ID', async () => {
    const reviewDraft: ReviewDraft = {
      key: randomUUID(),
      title: 'review-title-1',
    }

    const responseCreatedReview = await apiRoot
      .reviews()
      .post({ body: reviewDraft })
      .execute()

    expect(responseCreatedReview.statusCode).toEqual(201)
    expect(responseCreatedReview.body).not.toBe(null)

    const responseReviewDeleted = await apiRoot
      .reviews()
      .withId({ ID: responseCreatedReview.body.id })
      .delete({
        queryArgs: { version: responseCreatedReview.body.version },
      })
      .execute()

    expect(responseReviewDeleted.statusCode).toEqual(200)
  })

  it('should get a review by ID', async () => {
    const review = await createReview()

    const getReview = await apiRoot
      .reviews()
      .withId({ ID: review.body.id })
      .get()
      .execute()

    expect(getReview).not.toBe(null)
    expect(getReview.body.id).toEqual(review.body.id)

    await deleteReview(getReview)
  })

  it('should get a review by key', async () => {
    const review = await createReview()

    const getReview = await apiRoot
      .reviews()
      .withKey({ key: review.body.key })
      .get()
      .execute()

    expect(getReview).not.toBe(null)
    expect(getReview.body.id).toEqual(review.body.id)

    await deleteReview(getReview)
  })

  it('should query a review', async () => {
    const review = await createReview()
    const queryReview = await apiRoot
      .reviews()
      .get({
        queryArgs: {
          where: 'id=' + '"' + review.body.id + '"',
        },
      })
      .execute()
    expect(queryReview).not.toBe(null)
    expect(queryReview.body.results.at(0).id).toEqual(review.body.id)

    await deleteReview(review)
  })

  it('should update a review by Id', async () => {
    const review = await createReview()

    const updateReview = await apiRoot
      .reviews()
      .withId({ ID: review.body.id })
      .post({
        body: {
          version: review.body.version,
          actions: [
            {
              action: 'setKey',
              key: randomUUID(),
            },
          ],
        },
      })
      .execute()

    expect(updateReview.body.version).not.toBe(review.body.version)
    expect(updateReview.statusCode).toEqual(200)

    await deleteReview(updateReview)
  })

  it('should update a review by key', async () => {
    const review = await createReview()

    const updateReview = await apiRoot
      .reviews()
      .withKey({ key: review.body.key })
      .post({
        body: {
          version: review.body.version,
          actions: [
            {
              action: 'setKey',
              key: randomUUID(),
            },
          ],
        },
      })
      .execute()

    expect(updateReview.body.version).not.toBe(review.body.version)
    expect(updateReview.statusCode).toEqual(200)

    await deleteReview(updateReview)
  })
})
