import { buildBaseAttributesActions } from './utils/common-actions'
import { ActionMapBase } from './utils/create-map-action-group'
import { UpdateAction } from '@commercetools/sdk-client-v2'

export const baseActionsList: Array<UpdateAction> = [
  { action: 'changeQuoteState', key: 'quoteState' },
  { action: 'requestQuoteRenegotiation', key: 'buyerComment' },
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
