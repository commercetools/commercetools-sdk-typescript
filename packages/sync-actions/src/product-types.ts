import {
  ProductType,
  ProductTypeUpdateAction,
} from '@commercetools/platform-sdk'
import * as productTypeActions from './product-types-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup, {
  MapAction,
} from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'
import {
  ActionGroup,
  SyncActionConfig as BaseSyncActionConfig,
} from './types/update-actions'

type SyncActionConfig = { withHints?: boolean } & BaseSyncActionConfig

const actionGroups = ['base']

const createProductTypeMapActions: MapAction = (
  mapActionGroup,
  syncActionConfig
) => {
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

export const createSyncProductTypes = (
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
