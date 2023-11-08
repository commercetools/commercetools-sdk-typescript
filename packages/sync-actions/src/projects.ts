import { Project, ProjectUpdateAction } from '@commercetools/platform-sdk'
import { ActionGroup, SyncActionConfig } from '@commercetools/sdk-client-v2'
import { actionsMapBase } from './projects-actions'
import { SyncAction } from './types/update-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'
import { MessagesConfigurationDraft } from '@commercetools/platform-sdk'

export const actionGroups = ['base']

function createChannelsMapActions(mapActionGroup, syncActionConfig) {
  return function doMapActions(diff, newObj, oldObj) {
    const allActions = []

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
