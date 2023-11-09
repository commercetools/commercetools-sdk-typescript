import {
  ProductDiscount,
  ProductDiscountUpdateAction,
} from '@commercetools/platform-sdk'
import {
  ActionGroup,
  SyncActionConfig,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import { actionsMapBase } from './product-discounts-actions'
import { SyncAction } from './types/update-actions'
import combineValidityActions from './utils/combine-validity-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup, {
  MapActionGroup,
  MapActionResult,
} from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

export const actionGroups = ['base']

function createProductDiscountsMapActions(
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
