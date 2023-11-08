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
import createMapActionGroup from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

type SyncActionConfig = { withHints?: boolean } & BaseSyncActionConfig

const actionGroups = ['base']

function createProductTypeMapActions(
  mapActionGroup: (
    type: string,
    fn: () => Array<UpdateAction>
  ) => Array<UpdateAction>,
  syncActionConfig?: SyncActionConfig
): (diff: any, next: any, previous: any, options: any) => Array<UpdateAction> {
  return function doMapActions(
    diff: any,
    next: any,
    previous: any,
    options: any
  ): Array<UpdateAction> {
    return [
      // we support only base fields for the product type,
      // for attributes, applying hints would be recommended
      mapActionGroup(
        'base',
        (): Array<UpdateAction> =>
          productTypeActions.actionsMapBase(
            diff,
            previous,
            next,
            syncActionConfig
          )
      ),
      productTypeActions.actionsMapForHints(
        options.nestedValuesChanges,
        previous,
        next
      ),
    ].flat()
  }
}

export type ProductTypeConfig = {
  nestedValuesChanges: NestedValues
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
  const onBeforeApplyingDiff = null
  const buildActions = createBuildActions<ProductType, ProductTypeUpdateAction>(
    diff,
    doMapActions,
    onBeforeApplyingDiff,
    { withHints: true }
  )

  return { buildActions }
}

export { actionGroups }
