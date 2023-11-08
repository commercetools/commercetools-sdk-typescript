import {
  DiscountCode,
  DiscountCodeUpdateAction,
} from '@commercetools/platform-sdk'
import { ActionGroup, SyncActionConfig } from '@commercetools/sdk-client-v2'
import { actionsMapBase } from './discount-codes-actions'
import { SyncAction } from './types/update-actions'
import actionsMapCustom from './utils/action-map-custom'
import combineValidityActions from './utils/combine-validity-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

export const actionGroups = ['base', 'custom']

function createDiscountCodesMapActions(mapActionGroup, syncActionConfig) {
  return function doMapActions(diff, newObj, oldObj) {
    const allActions = []
    allActions.push(
      mapActionGroup('base', () =>
        actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )
    allActions.push(
      mapActionGroup('custom', () => actionsMapCustom(diff, newObj, oldObj))
    )
    return combineValidityActions(allActions.flat())
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<DiscountCode, DiscountCodeUpdateAction> => {
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
  const doMapActions = createDiscountCodesMapActions(
    mapActionGroup,
    syncActionConfig
  )
  const buildActions = createBuildActions<
    DiscountCode,
    DiscountCodeUpdateAction
  >(diff, doMapActions)
  return { buildActions }
}
