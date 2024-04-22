import { apiRootV3 } from '../test-utils'

describe('testing error cases', () => {
  it('should throw error when a product type is not found', async () => {
    try {
      await apiRootV3
        .productTypes()
        .withId({ ID: 'non-existing-id' })
        .get()
        .execute()

      throw new Error('Should have thrown an error')
    } catch (e) {
      expect(e.statusCode).toEqual(404)
    }
  })
})
