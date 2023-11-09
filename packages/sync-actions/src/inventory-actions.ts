import {
  buildBaseAttributesActions,
  buildReferenceActions,
} from './utils/common-actions'
import { ActionMapBase } from './utils/create-map-action-group'
import { UpdateAction } from '@commercetools/sdk-client-v2'

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

export function actionsMapReferences(diff: any, oldObj: any, newObj: any) {
  return buildReferenceActions({
    actions: referenceActionsList,
    diff,
    oldObj,
    newObj,
  })
}
