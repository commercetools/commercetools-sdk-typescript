import {
  AttributeGroup,
  AttributeGroupUpdateAction,
} from '@commercetools/platform-sdk'

import {
  actionsMapAttributes,
  actionsMapBase,
} from './attribute-groups-actions'
import {
  ActionGroup,
  SyncAction,
  SyncActionConfig,
  UpdateAction,
} from './types/update-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup, {
  MapAction,
} from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

const createAttributeGroupsMapActions: MapAction = (
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
    allActions.push(
      mapActionGroup('attributes', () =>
        actionsMapAttributes(diff, oldObj, newObj)
      ).flat()
    )
    return allActions.flat()
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<AttributeGroup, AttributeGroupUpdateAction> => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createAttributeGroupsMapActions(
    mapActionGroup,
    syncActionConfig
  )
  const buildActions = createBuildActions<
    AttributeGroup,
    AttributeGroupUpdateAction
  >(diff, doMapActions)
  return { buildActions }
}
