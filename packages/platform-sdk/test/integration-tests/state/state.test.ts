import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { StateDraft } from '../../../src'
import { createState, deleteState } from './state-fixture'

describe('testing state API calls', () => {
  let state
  it('should create a state', async () => {
    const stateDraft: StateDraft = {
      key: randomUUID(),
      type: 'LineItemState',
      roles: ['Return'],
    }

    state = await apiRoot.states().post({ body: stateDraft }).execute()

    expect(state.body).toBeDefined()
    expect(state.statusCode).toEqual(201)
  })

  it('should get a state by ID', async () => {
    const getState = await apiRoot
      .states()
      .withId({ ID: state.body.id })
      .get()
      .execute()

    expect(getState).toBeDefined()
    expect(getState.body.id).toEqual(state.body.id)
  })

  it('should query a state', async () => {
    const queryState = await apiRoot
      .states()
      .get({
        queryArgs: {
          where: 'id=' + '"' + state.body.id + '"',
        },
      })
      .execute()

    expect(queryState).toBeDefined()
    expect(queryState.body.results[0].id).toEqual(state.body.id)
  })

  it('should update a state by Id', async () => {
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

    expect(updateState.statusCode).toEqual(200)
    expect(updateState.body.key).toEqual(newKey)
    expect(updateState.body.version).not.toEqual(state.body.version)
    state = updateState
  })

  afterAll(async () => {
    await deleteState(state)
  })
})
