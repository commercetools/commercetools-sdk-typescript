import { baseActionsList } from '../src/product-selections-actions'
import {
  actionGroups,
  createSyncProductSelections,
} from '../src/product-selections'
import { DeepPartial } from '../src/types/update-actions'
import { ProductSelectionDraft } from '@commercetools/platform-sdk/src'

describe('Exports', () => {
  test('action group list', () => {
    expect(actionGroups).toEqual(['base'])
  })

  test('correctly define base actions list', () => {
    expect(baseActionsList).toEqual([
      { action: 'changeName', key: 'name' },
      { action: 'setKey', key: 'key' },
    ])
  })
})

describe('Actions', () => {
  let productSelectionsSync = createSyncProductSelections()
  beforeEach(() => {
    productSelectionsSync = createSyncProductSelections()
  })

  test('should build `changeName` action', () => {
    const before = {
      name: { en: 'Algeria' },
    }
    const now = {
      name: { en: 'Algeria', de: 'Algerian' },
    }

    const actual = productSelectionsSync.buildActions(now, before)
    const expected = [{ action: 'changeName', name: now.name }]
    expect(actual).toEqual(expected)
  })

  test('should build `setKey` action', () => {
    const before = {
      key: '',
    }
    const now = {
      key: 'new-key',
    }

    const actual = productSelectionsSync.buildActions(now, before)
    const expected = [{ action: 'setKey', key: now.key }]
    expect(actual).toEqual(expected)
  })

  describe('custom fields', () => {
    test('should build `setCustomType` action', () => {
      const before: DeepPartial<ProductSelectionDraft> = {
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
      const now: DeepPartial<ProductSelectionDraft> = {
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
      const actual = productSelectionsSync.buildActions(now, before)
      const expected = [{ action: 'setCustomType', ...now.custom }]
      expect(actual).toEqual(expected)
    })
  })

  test('should build `setCustomField` action', () => {
    const before: DeepPartial<ProductSelectionDraft> = {
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
    const now: DeepPartial<ProductSelectionDraft> = {
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
    const actual = productSelectionsSync.buildActions(now, before)
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
