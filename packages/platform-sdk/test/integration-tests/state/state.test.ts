import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { StateDraft } from '../../../src'
import { createState, deleteState } from './state-fixture'

describe('testing state API calls', () => {
  it('should create and delete a state by ID', async () => {
    const stateDraft: StateDraft = {
      key: randomUUID(),
      type: 'LineItemState',
      roles: ['Return'],
    }

    const responseCreatedState = await apiRoot
      .states()
      .post({ body: stateDraft })
      .execute()

    expect(responseCreatedState.statusCode).toEqual(201)
    expect(responseCreatedState.body).not.toBe(null)

    const responseStateDeleted = await apiRoot
      .states()
      .withId({ ID: responseCreatedState.body.id })
      .delete({
        queryArgs: { version: responseCreatedState.body.version },
      })
      .execute()

    expect(responseStateDeleted.statusCode).toEqual(200)
  })

  it('should get a state by ID', async () => {
    const state = await createState()

    const getState = await apiRoot
      .states()
      .withId({ ID: state.body.id })
      .get()
      .execute()

    expect(getState).not.toBe(null)
    expect(getState.body.id).toEqual(state.body.id)

    await deleteState(getState)
  })

  it('should query a state', async () => {
    const state = await createState()
    const queryState = await apiRoot
      .states()
      .get({
        queryArgs: {
          where: 'id=' + '"' + state.body.id + '"',
        },
      })
      .execute()
    expect(queryState).not.toBe(null)
    expect(queryState.body.results[0].id).toEqual(state.body.id)

    await deleteState(state)
  })

  it('should update a state by Id', async () => {
    const state = await createState()

    const newKey = 'test-key-state' + randomUUID()
    const updateState = await apiRoot
      .states()
      .withId({ ID: state.body.id })
      .post({
        body: {
          version: state.body.version,
          actions: [
            {
              action: 'changeKey',
              key: newKey,
            },
          ],
        },
      })
      .execute()

    expect(updateState.body.version).not.toBe(state.body.version)
    expect(updateState.statusCode).toEqual(200)
    expect(updateState.body.key).toEqual(newKey)

    await deleteState(updateState)
  })
})
