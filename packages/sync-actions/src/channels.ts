import { Channel, ChannelUpdateAction } from '@commercetools/platform-sdk'
import {
  ActionGroup,
  SyncActionConfig,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import { actionsMapBase } from './channels-actions'
import { SyncAction } from './types/update-actions'
import actionsMapCustom from './utils/action-map-custom'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup, {
  MapActionGroup,
  MapActionResult,
} from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

export const actionGroups = ['base', 'custom']

function createChannelsMapActions(
  mapActionGroup: MapActionGroup,
  syncActionConfig?: SyncActionConfig
): MapActionResult {
  return function doMapActions(diff, newObj, oldObj) {
    const allActions: Array<Array<UpdateAction>> = []

    allActions.push(
      mapActionGroup('base', () =>
        actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )

    allActions.push(
      mapActionGroup('custom', () => actionsMapCustom(diff, newObj, oldObj))
    )

    return allActions.flat()
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<Channel, ChannelUpdateAction> => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createChannelsMapActions(
    mapActionGroup,
    syncActionConfig
  )
  const buildActions = createBuildActions<Channel, ChannelUpdateAction>(
    diff,
    doMapActions
  )
  return { buildActions }
}
