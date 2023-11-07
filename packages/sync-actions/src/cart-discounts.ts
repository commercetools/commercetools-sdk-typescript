import { CartDiscountUpdateAction } from '@commercetools/platform-sdk'
import { ActionGroup, SyncActionConfig } from '@commercetools/sdk-client-v2'
import { actionsMapBase } from './cart-discounts-actions'
import { SyncAction } from './types/update-actions'
import actionsMapCustom from './utils/action-map-custom'
import combineValidityActions from './utils/combine-validity-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

export const actionGroups = ['base', 'custom']

function createCartDiscountsMapActions(mapActionGroup, syncActionConfig) {
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
): SyncAction<CartDiscountUpdateAction> => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createCartDiscountsMapActions(
    mapActionGroup,
    syncActionConfig
  )
  const buildActions = createBuildActions(diff, doMapActions)
  return { buildActions }
}
