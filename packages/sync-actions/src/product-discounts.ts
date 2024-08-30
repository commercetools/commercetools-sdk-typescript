import {
  ProductDiscount,
  ProductDiscountUpdateAction,
} from '@commercetools/platform-sdk'
import { actionsMapBase } from './product-discounts-actions'
import {
  ActionGroup,
  SyncActionConfig,
  SyncAction,
  UpdateAction,
} from './types/update-actions'
import combineValidityActions from './utils/combine-validity-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup, {
  MapAction,
} from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

export const actionGroups = ['base']

const createProductDiscountsMapActions: MapAction = (
  mapActionGroup,
  syncActionConfig
) => {
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
