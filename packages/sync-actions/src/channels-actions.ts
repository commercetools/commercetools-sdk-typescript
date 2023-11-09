import { buildBaseAttributesActions } from './utils/common-actions'
import { UpdateAction } from '@commercetools/sdk-client-v2'
import { ActionMapBase } from './utils/create-map-action-group'

export const baseActionsList: Array<UpdateAction> = [
  { action: 'changeKey', key: 'key' },
  { action: 'changeName', key: 'name' },
  { action: 'changeDescription', key: 'description' },
  { action: 'setAddress', key: 'address' },
  { action: 'setGeoLocation', key: 'geoLocation' },
  { action: 'setRoles', key: 'roles' },
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
