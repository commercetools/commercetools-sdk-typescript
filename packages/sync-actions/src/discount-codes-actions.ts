import { buildBaseAttributesActions } from './utils/common-actions'
import { ActionMapBase } from './utils/create-map-action-group'
import { UpdateAction } from '@commercetools/sdk-client-v2'

export const baseActionsList: Array<UpdateAction> = [
  { action: 'changeIsActive', key: 'isActive' },
  { action: 'setName', key: 'name' },
  { action: 'setDescription', key: 'description' },
  { action: 'setKey', key: 'key' },
  { action: 'setCartPredicate', key: 'cartPredicate' },
  { action: 'setMaxApplications', key: 'maxApplications' },
  {
    action: 'setMaxApplicationsPerCustomer',
    key: 'maxApplicationsPerCustomer',
  },
  { action: 'changeCartDiscounts', key: 'cartDiscounts' },
  { action: 'setValidFrom', key: 'validFrom' },
  { action: 'setValidUntil', key: 'validUntil' },
  { action: 'changeGroups', key: 'groups' },
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
