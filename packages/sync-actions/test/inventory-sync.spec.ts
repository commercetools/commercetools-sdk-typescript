import inventorySyncFn, { actionGroups } from '../src/inventories'
import { baseActionsList, referenceActionsList } from '../src/inventory-actions'
import { SyncAction } from '../src/types/update-actions'
import { InventoryEntryUpdateAction } from '@commercetools/platform-sdk/src'

describe('Exports', () => {
  test('action group list', () => {
    expect(actionGroups).toEqual(['base', 'references'])
  })

  test('correctly define base actions list', () => {
    expect(baseActionsList).toEqual([
      {
        action: 'changeQuantity',
        key: 'quantityOnStock',
        actionKey: 'quantity',
      },
      { action: 'setRestockableInDays', key: 'restockableInDays' },
      { action: 'setExpectedDelivery', key: 'expectedDelivery' },
    ])
  })

  test('correctly define reference actions list', () => {
    expect(referenceActionsList).toEqual([
      { action: 'setSupplyChannel', key: 'supplyChannel' },
    ])
  })
})

describe('Actions', () => {
  let inventorySync: SyncAction<InventoryEntryUpdateAction>
  beforeEach(() => {
    inventorySync = inventorySyncFn()
  })

  test('should build `changeQuantity` action', () => {
    const before = {
      quantityOnStock: 1,
    }
    const now = {
      quantityOnStock: 2,
    }

    const actual = inventorySync.buildActions(now, before)
    const expected = [{ action: 'changeQuantity', quantity: 2 }]
    expect(actual).toEqual(expected)
  })

  describe('custom fields', () => {
    test('should build `setCustomType` action', () => {
      const before = {
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
      const now = {
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
      const actual = inventorySync.buildActions(now, before)
      const expected = [{ action: 'setCustomType', ...now.custom }]
      expect(actual).toEqual(expected)
    })
  })

  test('should build `setCustomField` action', () => {
    const before = {
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
    const now = {
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
    const actual = inventorySync.buildActions(now, before)
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
