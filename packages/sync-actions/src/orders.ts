import {
  CustomFields,
  Order,
  OrderUpdateAction,
  ReturnInfo,
  ShippingInfo,
  StagedOrderUpdateAction,
} from '@commercetools/platform-sdk'
import {
  actionsMapBase,
  actionsMapDeliveries,
  actionsMapDeliveryItems,
  actionsMapParcels,
  actionsMapReturnsInfo,
} from './order-actions'
import {
  ActionGroup,
  SyncActionConfig,
  SyncAction,
  UpdateAction,
} from './types/update-actions'
import actionsMapCustom from './utils/action-map-custom'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup, {
  MapAction,
} from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'
import findMatchingPairs from './utils/find-matching-pairs'

export const actionGroups = ['base', 'deliveries']

const createOrderMapActions: MapAction = (mapActionGroup, syncActionConfig) => {
  return function doMapActions(diff, newObj, oldObj) {
    const allActions: Array<Array<UpdateAction>> = []
    let deliveryHashMap: any

    if (diff.shippingInfo && diff.shippingInfo.deliveries) {
      deliveryHashMap = findMatchingPairs(
        diff.shippingInfo.deliveries,
        oldObj.shippingInfo.deliveries,
        newObj.shippingInfo.deliveries
      )
    }

    allActions.push(
      mapActionGroup('base', () =>
        actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )

    allActions.push(
      mapActionGroup('deliveries', () =>
        actionsMapDeliveries(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup('parcels', () =>
        actionsMapParcels(diff, oldObj, newObj, deliveryHashMap)
      )
    )

    allActions.push(
      mapActionGroup('items', () =>
        actionsMapDeliveryItems(diff, oldObj, newObj, deliveryHashMap)
      )
    )

    allActions.push(
      mapActionGroup('returnInfo', () =>
        actionsMapReturnsInfo(diff, oldObj, newObj)
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

export const createSyncOrders = (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<Order, StagedOrderUpdateAction> => {
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
  const buildActions = createBuildActions<Order, OrderUpdateAction>(
    diff,
    doMapActions
  )
  return { buildActions }
}
