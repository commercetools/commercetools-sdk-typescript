import { buildBaseAttributesActions } from './utils/common-actions'
import { ActionMapBase } from './utils/create-map-action-group'
import { UpdateAction } from './types/update-actions'

export const baseActionsList: Array<UpdateAction> = [
  { action: 'changeStagedQuoteState', key: 'stagedQuoteState' },
  { action: 'setSellerComment', key: 'sellerComment' },
  { action: 'setValidTo', key: 'validTo' },
  { action: 'transitionState', key: 'state' },
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
