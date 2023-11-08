import {
  ProductDiscount,
  ProductDiscountUpdateAction,
} from '@commercetools/platform-sdk'
import { ActionGroup, SyncActionConfig } from '@commercetools/sdk-client-v2'
import { actionsMapBase } from './product-discounts-actions'
import { SyncAction } from './types/update-actions'
import combineValidityActions from './utils/combine-validity-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

export const actionGroups = ['base']

function createProductDiscountsMapActions(mapActionGroup, syncActionConfig) {
  return function doMapActions(diff, newObj, oldObj) {
    const allActions = []

    allActions.push(
      mapActionGroup('base', () =>
        actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )
    return combineValidityActions(allActions.flat())
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<ProductDiscount, ProductDiscountUpdateAction> => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createProductDiscountsMapActions(
    mapActionGroup,
    syncActionConfig
  )
  const buildActions = createBuildActions<
    ProductDiscount,
    ProductDiscountUpdateAction
  >(diff, doMapActions)
  return { buildActions }
}
