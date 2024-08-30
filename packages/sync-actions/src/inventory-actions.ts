import {
  buildBaseAttributesActions,
  buildReferenceActions,
} from './utils/common-actions'
import { ActionMap, ActionMapBase } from './utils/create-map-action-group'
import { UpdateAction } from './types/update-actions'

export const baseActionsList: Array<UpdateAction> = [
  { action: 'changeQuantity', key: 'quantityOnStock', actionKey: 'quantity' },
  { action: 'setRestockableInDays', key: 'restockableInDays' },
  { action: 'setExpectedDelivery', key: 'expectedDelivery' },
]

export const referenceActionsList = [
  { action: 'setSupplyChannel', key: 'supplyChannel' },
]

/**
 * SYNC FUNCTIONS
 */

export const actionsMapBase: ActionMapBase = (diff, oldObj, newObj, config) => {
  return buildBaseAttributesActions({
    actions: baseActionsList,
    diff,
    oldObj,
    newObj,
    shouldOmitEmptyString: config?.shouldOmitEmptyString,
  })
}

export const actionsMapReferences: ActionMap = (diff, oldObj, newObj) => {
  return buildReferenceActions({
    actions: referenceActionsList,
    diff,
    oldObj,
    newObj,
  })
}
