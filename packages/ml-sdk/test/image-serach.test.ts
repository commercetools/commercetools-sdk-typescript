import { mlApiBuilder } from './helpers/api-helpers'
import * as fs from 'fs'

test('test the image search', async () => {
  const image = fs.readFileSync('test/resources/example_flower.jpg')
  const res = await mlApiBuilder
    .imageSearch()
    .post({
      queryArgs: {
        limit: 20,
      },
      body: image,
      headers: {
        'Content-Type': 'image/jpeg',
      },
    })
    .execute()

  expect(res.statusCode).toEqual(200)
})
