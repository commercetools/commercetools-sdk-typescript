import { buildBaseAttributesActions } from './utils/common-actions'
import { ActionMap, ActionMapBase } from './utils/create-map-action-group'

export const baseActionsList = [
  { action: 'changeName', key: 'name' },
  { action: 'changeCurrencies', key: 'currencies' },
  { action: 'changeCountries', key: 'countries' },
  { action: 'changeLanguages', key: 'languages' },
  { action: 'changeMessagesConfiguration', key: 'messagesConfiguration' },
  { action: 'setShippingRateInputType', key: 'shippingRateInputType' },
]

export const myBusinessUnitActionsList = [
  {
    action: 'changeMyBusinessUnitStatusOnCreation',
    key: 'status',
  },
  {
    action: 'setMyBusinessUnitAssociateRoleOnCreation',
    key: 'associateRole',
  },
]

export const customerSearchActionsList = [
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

export const actionsMapBusinessUnit: ActionMap = (diff, oldObj, newObj) =>
  buildBaseAttributesActions({
    actions: myBusinessUnitActionsList,
    diff,
    oldObj,
    newObj,
  })

export const actionsMapCustomer: ActionMap = (diff, oldObj, newObj) =>
  buildBaseAttributesActions({
    actions: customerSearchActionsList,
    diff,
    oldObj,
    newObj,
  })
