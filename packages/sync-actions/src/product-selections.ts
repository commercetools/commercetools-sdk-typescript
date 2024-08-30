import {
  ProductSelection,
  ProductSelectionUpdateAction,
} from '@commercetools/platform-sdk'
import { actionsMapBase } from './product-selections-actions'
import { ActionGroup, SyncAction, UpdateAction } from './types/update-actions'
import actionsMapCustom from './utils/action-map-custom'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import { Delta, diff } from './utils/diffpatcher'

export const actionGroups = ['base']

function createProductSelectionsMapActions(
  mapActionGroup: (
    type: string,
    fn: () => Array<UpdateAction>
  ) => Array<UpdateAction>
): (
  diff: Delta,
  next: any,
  previous: any,
  options: any
) => Array<UpdateAction> {
  return function doMapActions(
    diff: Delta,
    next: any,
    previous: any
  ): Array<UpdateAction> {
    const allActions = []
    allActions.push(
      mapActionGroup(
        'base',
        (): Array<UpdateAction> => actionsMapBase(diff, previous, next)
      )
    )
    allActions.push(
      mapActionGroup(
        'custom',
        (): Array<UpdateAction> => actionsMapCustom(diff, next, previous)
      )
    )

    return allActions.flat()
  }
}

export const createSyncProductSelections = (
  actionGroupList?: Array<ActionGroup>
): SyncAction<ProductSelection, ProductSelectionUpdateAction> => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createProductSelectionsMapActions(mapActionGroup)
  const onBeforeApplyingDiff: any = null
  const buildActions = createBuildActions<
    ProductSelection,
    ProductSelectionUpdateAction
  >(diff, doMapActions, onBeforeApplyingDiff)

  return { buildActions }
}
