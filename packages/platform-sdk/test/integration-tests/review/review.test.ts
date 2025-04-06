import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { ReviewDraft } from '../../../src'
import { createReview, deleteReview } from './review-fixture'

describe('testing review API calls', () => {
  let review
  it('should create a review', async () => {
    const reviewDraft: ReviewDraft = {
      key: randomUUID(),
      title: 'review-title-1',
    }

    review = await apiRoot.reviews().post({ body: reviewDraft }).execute()

    expect(review.statusCode).toEqual(201)
    expect(review.body).toBeDefined()
  })

  it('should get a review by ID', async () => {
    const getReview = await apiRoot
      .reviews()
      .withId({ ID: review.body.id })
      .get()
      .execute()

    expect(getReview).toBeDefined()
    expect(getReview.body.id).toEqual(review.body.id)
  })

  it('should get a review by key', async () => {
    const getReview = await apiRoot
      .reviews()
      .withKey({ key: review.body.key })
      .get()
      .execute()

    expect(getReview).toBeDefined()
    expect(getReview.body.id).toEqual(review.body.id)
  })

  it('should query a review', async () => {
    const queryReview = await apiRoot
      .reviews()
      .get({
        queryArgs: {
          where: 'id=' + '"' + review.body.id + '"',
        },
      })
      .execute()
    expect(queryReview).toBeDefined()
    expect(queryReview.body.results[0].id).toEqual(review.body.id)
  })

  it('should update a review by Id', async () => {
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

    expect(updateReview.body.version).not.toEqual(review.body.version)
    expect(updateReview.statusCode).toEqual(200)
    review = updateReview
  })

  it('should update a review by key', async () => {
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

    expect(updateReview.body.version).not.toEqual(review.body.version)
    expect(updateReview.statusCode).toEqual(200)
    review = updateReview
  })

  afterAll(async () => {
    await deleteReview(review)
  })
})
