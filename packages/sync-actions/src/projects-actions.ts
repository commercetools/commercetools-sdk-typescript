import { buildBaseAttributesActions } from './utils/common-actions'
import { ActionMap, ActionMapBase } from './utils/create-map-action-group'
import { UpdateAction } from './types/update-actions'

export const baseActionsList: Array<UpdateAction> = [
  { action: 'changeName', key: 'name' },
  { action: 'changeCurrencies', key: 'currencies' },
  { action: 'changeCountries', key: 'countries' },
  { action: 'changeLanguages', key: 'languages' },
  {
    action: 'changeMessagesConfiguration',
    actionKey: 'messagesConfiguration',
    key: 'messages',
  },
  { action: 'setShippingRateInputType', key: 'shippingRateInputType' },
]

export const myBusinessUnitActionsList: Array<UpdateAction> = [
  {
    action: 'changeMyBusinessUnitStatusOnCreation',
    key: 'myBusinessUnitStatusOnCreation',
    actionKey: 'status',
  },
  {
    action: 'setMyBusinessUnitAssociateRoleOnCreation',
    key: 'myBusinessUnitAssociateRoleOnCreation',
    actionKey: 'associateRole',
  },
]

export const customerSearchActionsList: Array<UpdateAction> = [
  {
    action: 'changeCustomerSearchStatus',
    key: 'status',
  },
]

export const actionsMapBase: ActionMapBase = (
  diff,
  oldObj,
  newObj,
  config = {}
) => {
  return buildBaseAttributesActions({
    actions: baseActionsList,
    diff,
    oldObj,
    newObj,
    shouldOmitEmptyString: config.shouldOmitEmptyString,
  })
}

export const actionsMapBusinessUnit: ActionMap = (diff, oldObj, newObj) => {
  const { businessUnits } = diff
  if (!businessUnits) {
    return []
  }
  return buildBaseAttributesActions({
    actions: myBusinessUnitActionsList,
    diff: businessUnits,
    oldObj: oldObj.businessUnits,
    newObj: newObj.businessUnits,
  })
}

export const actionsMapCustomer: ActionMap = (diff, oldObj, newObj) => {
  const { searchIndexing } = diff
  if (!searchIndexing) {
    return []
  }
  const { customers } = searchIndexing
  if (!customers) {
    return []
  }
  return buildBaseAttributesActions({
    actions: customerSearchActionsList,
    diff: customers,
    oldObj: oldObj.searchIndexing.customers,
    newObj: newObj.searchIndexing.customers,
  })
}
