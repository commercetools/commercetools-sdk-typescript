import { Customer, CustomerUpdateAction } from '@commercetools/platform-sdk'
import type {
  ActionGroup,
  SyncActionConfig,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import {
  actionsMapAddresses,
  actionsMapAuthenticationModes,
  actionsMapBase,
  actionsMapBillingAddresses,
  actionsMapReferences,
  actionsMapSetDefaultBase,
  actionsMapShippingAddresses,
} from './customer-actions'
import { SyncAction } from './types/update-actions'
import actionsMapCustom from './utils/action-map-custom'
import copyEmptyArrayProps from './utils/copy-empty-array-props'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup, {
  MapActionGroup,
  MapActionResult,
} from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

export const actionGroups = [
  'base',
  'references',
  'addresses',
  'custom',
  'authenticationModes',
]

function createCustomerMapActions(
  mapActionGroup: MapActionGroup,
  syncActionConfig?: SyncActionConfig
): MapActionResult {
  return function doMapActions(diff, newObj, oldObj) {
    const allActions: Array<Array<UpdateAction>> = []

    allActions.push(
      mapActionGroup('base', () =>
        actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )

    allActions.push(
      mapActionGroup('references', () =>
        actionsMapReferences(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup('addresses', () =>
        actionsMapAddresses(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup('base', () =>
        actionsMapSetDefaultBase(diff, oldObj, newObj, syncActionConfig)
      )
    )

    allActions.push(
      mapActionGroup('billingAddressIds', () =>
        actionsMapBillingAddresses(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup('shippingAddressIds', () =>
        actionsMapShippingAddresses(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup('custom', () => actionsMapCustom(diff, newObj, oldObj))
    )

    allActions.push(
      mapActionGroup('authenticationModes', () =>
        actionsMapAuthenticationModes(diff, oldObj, newObj)
      )
    )

    return allActions.flat()
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<Customer, CustomerUpdateAction> => {
  // actionGroupList contains information about which action groups
  // are allowed or ignored

  // createMapActionGroup returns function 'mapActionGroup' that takes params:
  // - action group name
  // - callback function that should return a list of actions that correspond
  //    to the for the action group

  // this resulting function mapActionGroup will call the callback function
  // for allowed action groups and return the return value of the callback
  // It will return an empty array for ignored action groups
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createCustomerMapActions(
    mapActionGroup,
    syncActionConfig
  )
  const buildActions = createBuildActions<Customer, CustomerUpdateAction>(
    diff,
    doMapActions,
    copyEmptyArrayProps
  )
  return { buildActions }
}
