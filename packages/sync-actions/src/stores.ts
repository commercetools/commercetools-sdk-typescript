import { Store, StoreUpdateAction } from '@commercetools/platform-sdk'
import type { ActionGroup, UpdateAction } from '@commercetools/sdk-client-v2'
import { actionsMapBase } from './stores-actions'
import { SyncAction } from './types/update-actions'
import actionsMapCustom from './utils/action-map-custom'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import { Delta, diff } from './utils/diffpatcher'

export const actionGroups = ['base']

function createStoresMapActions(
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
    diff,
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

export default (
  actionGroupList?: Array<ActionGroup>
): SyncAction<Store, StoreUpdateAction> => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createStoresMapActions(mapActionGroup)
  const onBeforeApplyingDiff: any = null
  const buildActions = createBuildActions<Store, StoreUpdateAction>(
    diff,
    doMapActions,
    onBeforeApplyingDiff
  )

  return { buildActions }
}
