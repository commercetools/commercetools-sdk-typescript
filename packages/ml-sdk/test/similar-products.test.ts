import { SimilarProductsTaskStatus } from '../src'
import { mlApiBuilder } from './helpers/api-helpers'
import { sleep } from './helpers/test-utils'

test('Get async result for similar products', async () => {
  const token = await mlApiBuilder
    .similarities()
    .products()
    .post({
      body: {},
    })
    .execute()

  expect(token.statusCode).toBe(202)
  var dataStatus: SimilarProductsTaskStatus = null
  for (var i = 0; i < 10; i++) {
    const resp = await mlApiBuilder
      .similarities()
      .products()
      .status()
      .withTaskId({
        taskId: token.body.taskId,
      })
      .get()
      .execute()

    if (resp.statusCode === 200 && resp.body.state === 'SUCCESS') {
      dataStatus = resp.body
      break
    }
    await sleep(500)
  }
  expect(dataStatus).toBeDefined()
  expect(dataStatus.state).toBe('SUCCESS')
}, 10000)
