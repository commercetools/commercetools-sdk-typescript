import type {
  SyncAction,
  UpdateAction,
  ActionGroup,
} from '@commercetools/sdk-client-v2'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import actionsMapCustom from './utils/action-map-custom'
import * as productSelectionsActions from './product-selections-actions'
import { diff } from './utils/diffpatcher'

export const actionGroups = ['base']

function createProductSelectionsMapActions(
  mapActionGroup: (
    type: string,
    fn: () => Array<UpdateAction>
  ) => Array<UpdateAction>
): (diff: any, next: any, previous: any, options: any) => Array<UpdateAction> {
  return function doMapActions(
    diff: any,
    next: any,
    previous: any
  ): Array<UpdateAction> {
    const allActions = []
    allActions.push(
      mapActionGroup(
        'base',
        (): Array<UpdateAction> =>
          productSelectionsActions.actionsMapBase(diff, previous, next)
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

export default (actionGroupList?: Array<ActionGroup>): SyncAction => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createProductSelectionsMapActions(mapActionGroup)
  const onBeforeApplyingDiff = null
  const buildActions = createBuildActions(
    diff,
    doMapActions,
    onBeforeApplyingDiff
  )

  return { buildActions }
}
