import { mlApiBuilder } from './helpers/api-helpers'
import { MissingDataTaskStatus, MissingImageTaskStatus } from '../src'
import { sleep } from './helpers/test-utils'

test('Get async result for missing attributes', async () => {
  const token = await mlApiBuilder
    .missingData()
    .attributes()
    .post({
      body: {
        showMissingAttributeNames: true,
      },
    })
    .execute()
  expect(token.statusCode).toBe(202)
  var dataStatus: MissingDataTaskStatus = null
  for (var i = 0; i < 10; i++) {
    const resp = await mlApiBuilder
      .missingData()
      .attributes()
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

test('Get async result for missing images', async () => {
  const token = await mlApiBuilder
    .missingData()
    .images()
    .post({
      body: {
        autoThreshold: true,
      },
    })
    .execute()
  expect(token.statusCode).toBe(202)
  var dataStatus: MissingImageTaskStatus = null
  for (var i = 0; i < 10; i++) {
    const resp = await mlApiBuilder
      .missingData()
      .images()
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
