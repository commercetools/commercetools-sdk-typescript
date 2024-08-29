import { buildBaseAttributesActions } from './utils/common-actions'
import createBuildArrayActions, {
  ADD_ACTIONS,
  CHANGE_ACTIONS,
  REMOVE_ACTIONS,
} from './utils/create-build-array-actions'
import { ActionMap, ActionMapBase } from './utils/create-map-action-group'
import { UpdateAction } from '@commercetools/sdk-client-v2'

export const baseActionsList: Array<UpdateAction> = [
  { action: 'changeName', key: 'name' },
  { action: 'setKey', key: 'key' },
  { action: 'setDescription', key: 'description' },
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

export const actionsMapRates: ActionMap = (diff, oldObj, newObj) => {
  const handler = createBuildArrayActions('rates', {
    [ADD_ACTIONS]: (newObject) => ({
      action: 'addTaxRate',
      taxRate: newObject,
    }),
    [REMOVE_ACTIONS]: (objectToRemove) => ({
      action: 'removeTaxRate',
      taxRateId: objectToRemove.id,
    }),
    [CHANGE_ACTIONS]: (oldObject, updatedObject) => ({
      action: 'replaceTaxRate',
      taxRateId:
        oldObject.id === updatedObject.id ? oldObject.id : updatedObject.id,
      taxRate: updatedObject,
    }),
  })

  return handler(diff, oldObj, newObj)
}
