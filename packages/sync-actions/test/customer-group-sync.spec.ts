import customerGroupSyncFn, { actionGroups } from '../src/customer-group'
import { baseActionsList } from '../src/customer-group-actions'
import { DeepPartial } from '../src/types/update-actions'
import {
  CustomerGroup,
  CustomerGroupDraft,
} from '@commercetools/platform-sdk/src'

describe('Customer Groups Exports', () => {
  test('action group list', () => {
    expect(actionGroups).toEqual(['base', 'custom'])
  })

  describe('action list', () => {
    test('should contain `changeName` action', () => {
      expect(baseActionsList).toEqual(
        expect.arrayContaining([{ action: 'changeName', key: 'name' }])
      )
    })

    test('should contain `setKey` action', () => {
      expect(baseActionsList).toEqual(
        expect.arrayContaining([
          {
            action: 'setKey',
            key: 'key',
          },
        ])
      )
    })
  })
})

describe('Customer Groups Actions', () => {
  let customerGroupSync = customerGroupSyncFn()
  beforeEach(() => {
    customerGroupSync = customerGroupSyncFn()
  })

  test('should build the `changeName` action', () => {
    const before: DeepPartial<CustomerGroup> = {
      name: 'en-name-before',
    }

    const now: DeepPartial<CustomerGroup> = {
      name: 'en-name-now',
    }

    const expected = [
      {
        action: 'changeName',
        name: 'en-name-now',
      },
    ]
    const actual = customerGroupSync.buildActions(now, before)
    expect(actual).toEqual(expected)
  })

  test('should build the `setKey` action', () => {
    const before = {
      key: 'foo-key',
    }

    const now = {
      key: 'bar-key',
    }

    const expected = [
      {
        action: 'setKey',
        key: 'bar-key',
      },
    ]
    const actual = customerGroupSync.buildActions(now, before)
    expect(actual).toEqual(expected)
  })

  describe('custom fields', () => {
    test('should build `setCustomType` action', () => {
      const before: DeepPartial<CustomerGroupDraft> = {
        custom: {
          type: {
            typeId: 'type',
            id: 'customType1',
          },
          fields: {
            customField1: true,
          },
        },
      }
      const now: DeepPartial<CustomerGroupDraft> = {
        custom: {
          type: {
            typeId: 'type',
            id: 'customType2',
          },
          fields: {
            customField1: true,
          },
        },
      }
      const actual = customerGroupSync.buildActions(now, before)
      const expected = [{ action: 'setCustomType', ...now.custom }]
      expect(actual).toEqual(expected)
    })
  })

  test('should build `setCustomField` action', () => {
    const before: DeepPartial<CustomerGroupDraft> = {
      custom: {
        type: {
          typeId: 'type',
          id: 'customType1',
        },
        fields: {
          customField1: false,
        },
      },
    }
    const now: DeepPartial<CustomerGroupDraft> = {
      custom: {
        type: {
          typeId: 'type',
          id: 'customType1',
        },
        fields: {
          customField1: true,
        },
      },
    }
    const actual = customerGroupSync.buildActions(now, before)
    const expected = [
      {
        action: 'setCustomField',
        name: 'customField1',
        value: true,
      },
    ]
    expect(actual).toEqual(expected)
  })
})
