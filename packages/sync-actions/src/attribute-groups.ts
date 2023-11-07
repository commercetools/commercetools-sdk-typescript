import type {
  SyncAction,
  ActionGroup,
  UpdateAction,
  SyncActionConfig,
} from '@commercetools/sdk-client-v2'
import * as attributeGroupsActions from './attribute-groups-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import * as diffpatcher from './utils/diffpatcher'

function createAttributeGroupsMapActions(
  mapActionGroup: (
    type: string,
    fn: () => Array<UpdateAction>
  ) => Array<UpdateAction>,
  syncActionConfig?: SyncActionConfig
): (diff: any, newObj: any, oldObj: any) => Array<UpdateAction> {
  return function doMapActions(
    diff: any,
    newObj: any,
    oldObj: any
  ): Array<UpdateAction> {
    const allActions = []
    allActions.push(
      mapActionGroup(
        'base',
        (): Array<UpdateAction> =>
          attributeGroupsActions.actionsMapBase(
            diff,
            oldObj,
            newObj,
            syncActionConfig
          )
      )
    )
    allActions.push(
      mapActionGroup(
        'attributes',
        (): Array<UpdateAction> =>
          attributeGroupsActions.actionsMapAttributes(diff, oldObj, newObj)
      ).flat()
    )
    return allActions.flat()
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createAttributeGroupsMapActions(
    mapActionGroup,
    syncActionConfig
  )
  const buildActions = createBuildActions(diffpatcher.diff, doMapActions)
  return { buildActions }
}
