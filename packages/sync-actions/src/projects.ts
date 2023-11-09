import {
  MessagesConfigurationDraft,
  Project,
  ProjectUpdateAction,
} from '@commercetools/platform-sdk'
import {
  ActionGroup,
  SyncActionConfig,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import { actionsMapBase } from './projects-actions'
import { SyncAction } from './types/update-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup, {
  MapActionGroup,
  MapActionResult,
} from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

export const actionGroups = ['base']

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

    return allActions.flat()
  }
}

export type ProjectSync = {
  messagesConfiguration: MessagesConfigurationDraft
} & Project

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<ProjectSync, ProjectUpdateAction> => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createChannelsMapActions(
    mapActionGroup,
    syncActionConfig
  )
  const buildActions = createBuildActions<ProjectSync, ProjectUpdateAction>(
    diff,
    doMapActions
  )
  return { buildActions }
}
