import {
  CustomFields,
  OrderUpdateAction,
  ReturnInfo,
  ShippingInfo,
  StagedOrderUpdateAction,
} from '@commercetools/platform-sdk'
import type {
  ActionGroup,
  SyncActionConfig,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import {
  actionsMapBase,
  actionsMapDeliveries,
  actionsMapDeliveryItems,
  actionsMapParcels,
  actionsMapReturnsInfo,
} from './order-actions'
import { SyncAction } from './types/update-actions'
import actionsMapCustom from './utils/action-map-custom'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'
import findMatchingPairs from './utils/find-matching-pairs'

export const actionGroups = ['base', 'deliveries']

function createOrderMapActions(
  mapActionGroup: Function,
  syncActionConfig?: SyncActionConfig
): (diff: any, newObj: any, oldObj: any) => Array<UpdateAction> {
  return function doMapActions(
    diff: any,
    newObj: any,
    oldObj: any /* , options */
  ): Array<UpdateAction> {
    const allActions = []
    let deliveryHashMap

    if (diff.shippingInfo && diff.shippingInfo.deliveries) {
      deliveryHashMap = findMatchingPairs(
        diff.shippingInfo.deliveries,
        oldObj.shippingInfo.deliveries,
        newObj.shippingInfo.deliveries
      )
    }

    allActions.push(
      mapActionGroup(
        'base',
        (): Array<UpdateAction> =>
          actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )

    allActions.push(
      mapActionGroup(
        'deliveries',
        (): Array<UpdateAction> => actionsMapDeliveries(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup(
        'parcels',
        (): Array<UpdateAction> =>
          actionsMapParcels(diff, oldObj, newObj, deliveryHashMap)
      )
    )

    allActions.push(
      mapActionGroup(
        'items',
        (): Array<UpdateAction> =>
          actionsMapDeliveryItems(diff, oldObj, newObj, deliveryHashMap)
      )
    )

    allActions.push(
      mapActionGroup(
        'returnInfo',
        (): Array<UpdateAction> => actionsMapReturnsInfo(diff, oldObj, newObj)
      ).flat()
    )

    allActions.push(
      mapActionGroup('custom', () => actionsMapCustom(diff, newObj, oldObj))
    )

    return allActions.flat()
  }
}

export type OrderSync = {
  orderState: string
  paymentState: string
  shipmentState: string
  shippingInfo: ShippingInfo
  returnInfo: Array<ReturnInfo>
  custom: CustomFields
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<OrderSync, StagedOrderUpdateAction> => {
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
  const doMapActions = createOrderMapActions(mapActionGroup, syncActionConfig)
  const buildActions = createBuildActions<OrderSync, OrderUpdateAction>(
    diff,
    doMapActions
  )
  return { buildActions }
}
