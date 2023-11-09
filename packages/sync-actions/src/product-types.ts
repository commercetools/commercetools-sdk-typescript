import {
  ProductType,
  ProductTypeUpdateAction,
} from '@commercetools/platform-sdk'
import type {
  ActionGroup,
  SyncActionConfig as BaseSyncActionConfig,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import * as productTypeActions from './product-types-actions'
import { NestedValues } from './product-types-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup, {
  MapActionGroup,
  MapActionResult,
} from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

type SyncActionConfig = { withHints?: boolean } & BaseSyncActionConfig

const actionGroups = ['base']

function createProductTypeMapActions(
  mapActionGroup: MapActionGroup,
  syncActionConfig?: SyncActionConfig
): MapActionResult {
  return function doMapActions(diff, newObj, oldObj, options) {
    return [
      // we support only base fields for the product type,
      // for attributes, applying hints would be recommended
      mapActionGroup('base', () =>
        productTypeActions.actionsMapBase(
          diff,
          oldObj,
          newObj,
          syncActionConfig
        )
      ),
      productTypeActions.actionsMapForHints(
        options.nestedValuesChanges,
        oldObj,
        newObj
      ),
    ].flat()
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
) => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createProductTypeMapActions(
    mapActionGroup,
    syncActionConfig
  )
  const onBeforeApplyingDiff: any = null
  const buildActions = createBuildActions<ProductType, ProductTypeUpdateAction>(
    diff,
    doMapActions,
    onBeforeApplyingDiff,
    { withHints: true }
  )

  return { buildActions }
}

export { actionGroups }
