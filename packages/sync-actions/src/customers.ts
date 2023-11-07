import { CustomerUpdateAction } from '@commercetools/platform-sdk'
import type {
  ActionGroup,
  SyncActionConfig,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import * as customerActions from './customer-actions'
import { SyncAction } from './types/update-actions'
import actionsMapCustom from './utils/action-map-custom'
import copyEmptyArrayProps from './utils/copy-empty-array-props'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

export const actionGroups = [
  'base',
  'references',
  'addresses',
  'custom',
  'authenticationModes',
]

function createCustomerMapActions(
  mapActionGroup: Function,
  syncActionConfig?: SyncActionConfig
): (diff: any, newObj: any, oldObj: any) => Array<UpdateAction> {
  return function doMapActions(
    diff: any,
    newObj: any,
    oldObj: any /* , options */
  ): Array<UpdateAction> {
    const allActions = []

    allActions.push(
      mapActionGroup(
        'base',
        (): Array<UpdateAction> =>
          customerActions.actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )

    allActions.push(
      mapActionGroup(
        'references',
        (): Array<UpdateAction> =>
          customerActions.actionsMapReferences(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup(
        'addresses',
        (): Array<UpdateAction> =>
          customerActions.actionsMapAddresses(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup(
        'base',
        (): Array<UpdateAction> =>
          customerActions.actionsMapSetDefaultBase(
            diff,
            oldObj,
            newObj,
            syncActionConfig
          )
      )
    )

    allActions.push(
      mapActionGroup(
        'billingAddressIds',
        (): Array<UpdateAction> =>
          customerActions.actionsMapBillingAddresses(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup(
        'shippingAddressIds',
        (): Array<UpdateAction> =>
          customerActions.actionsMapShippingAddresses(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup(
        'custom',
        (): Array<UpdateAction> => actionsMapCustom(diff, newObj, oldObj)
      )
    )

    allActions.push(
      mapActionGroup(
        'authenticationModes',
        (): Array<UpdateAction> =>
          customerActions.actionsMapAuthenticationModes(diff, oldObj, newObj)
      )
    )

    return allActions.flat()
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<CustomerUpdateAction> => {
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
  const buildActions = createBuildActions(
    diff,
    doMapActions,
    copyEmptyArrayProps
  )
  return { buildActions }
}
