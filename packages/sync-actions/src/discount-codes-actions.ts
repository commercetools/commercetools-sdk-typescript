import { buildBaseAttributesActions } from './utils/common-actions'

export const baseActionsList = [
  { action: 'changeIsActive', key: 'isActive' },
  { action: 'setName', key: 'name' },
  { action: 'setDescription', key: 'description' },
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

export function actionsMapBase(
  diff,
  oldObj,
  newObj,
  config: { shouldOmitEmptyString?: boolean } = {}
) {
  return buildBaseAttributesActions({
    actions: baseActionsList,
    diff,
    oldObj,
    newObj,
    shouldOmitEmptyString: config.shouldOmitEmptyString,
  })
}