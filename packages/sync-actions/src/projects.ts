import createBuildActions from './utils/create-build-actions'
import createMapActionGroup, {
  MapActionGroup,
  MapActionResult,
} from './utils/create-map-action-group'
import {
  MessagesConfigurationDraft,
  Project,
  ProjectUpdateAction,
} from '@commercetools/platform-sdk'
import {
  actionsMapBase,
  actionsMapBusinessUnit,
  actionsMapCustomer,
} from './projects-actions'
import { diff } from './utils/diffpatcher'
import { ActionGroup, SyncActionConfig } from '@commercetools/sdk-client-v2'
import { SyncAction } from './types/update-actions'

export const actionGroups = ['base', 'myBusinessUnit', 'customerSearch']

function createChannelsMapActions(
  mapActionGroup: MapActionGroup,
  syncActionConfig?: SyncActionConfig
): MapActionResult {
  return function doMapActions(diff, newObj, oldObj) {
    const allActions = []

    allActions.push(
      mapActionGroup('base', () =>
        actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )

    allActions.push(
      mapActionGroup('myBusinessUnit', () =>
        actionsMapBusinessUnit(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup('customerSearch', () =>
        actionsMapCustomer(diff, oldObj, newObj)
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
