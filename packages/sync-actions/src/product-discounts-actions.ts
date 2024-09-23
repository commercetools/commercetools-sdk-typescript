import { buildBaseAttributesActions } from './utils/common-actions'
import { ActionMapBase } from './utils/create-map-action-group'
import { UpdateAction } from './types/update-actions'

export const baseActionsList: Array<UpdateAction> = [
  { action: 'changeIsActive', key: 'isActive' },
  { action: 'changeName', key: 'name' },
  { action: 'changePredicate', key: 'predicate' },
  { action: 'changeSortOrder', key: 'sortOrder' },
  { action: 'changeValue', key: 'value' },
  { action: 'setDescription', key: 'description' },
  { action: 'setValidFrom', key: 'validFrom' },
  { action: 'setValidUntil', key: 'validUntil' },
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
