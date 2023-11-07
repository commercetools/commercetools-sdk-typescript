import { AttributeGroupUpdateAction } from '@commercetools/platform-sdk'
import type {
  ActionGroup,
  SyncActionConfig,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import {
  actionsMapAttributes,
  actionsMapBase,
} from './attribute-groups-actions'
import { SyncAction } from './types/update-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

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
          actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )
    allActions.push(
      mapActionGroup(
        'attributes',
        (): Array<UpdateAction> => actionsMapAttributes(diff, oldObj, newObj)
      ).flat()
    )
    return allActions.flat()
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<AttributeGroupUpdateAction> => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createAttributeGroupsMapActions(
    mapActionGroup,
    syncActionConfig
  )
  const buildActions = createBuildActions(diff, doMapActions)
  return { buildActions }
}
