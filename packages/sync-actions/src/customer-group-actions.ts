import { buildBaseAttributesActions } from './utils/common-actions'
import { ActionMapBase } from './utils/create-map-action-group'
import { UpdateAction } from '@commercetools/sdk-client-v2'

export const baseActionsList: Array<UpdateAction> = [
  { action: 'changeName', key: 'name' },
  { action: 'setKey', key: 'key' },
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
