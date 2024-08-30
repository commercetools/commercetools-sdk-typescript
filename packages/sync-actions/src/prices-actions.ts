import { buildBaseAttributesActions } from './utils/common-actions'
import { ActionMapBase } from './utils/create-map-action-group'
import { UpdateAction } from './types/update-actions'

export const baseActionsList: Array<UpdateAction> = [
  { action: 'changeValue', key: 'value' },
  { action: 'setDiscountedPrice', key: 'discounted' },
  // TODO: Later add more accurate actions `addPriceTier`, `removePriceTier`
  { action: 'setPriceTiers', key: 'tiers' },
  { action: 'setKey', key: 'key' },
  { action: 'setValidFrom', key: 'validFrom' },
  { action: 'setValidUntil', key: 'validUntil' },
  { action: 'changeActive', key: 'active' },
]

export const actionsMapBase: ActionMapBase = (diff, oldObj, newObj, config) => {
  return buildBaseAttributesActions({
    actions: baseActionsList,
    diff,
    oldObj,
    newObj,
    shouldOmitEmptyString: config?.shouldOmitEmptyString,
  })
}
