import createBuildActions from './utils/create-build-actions'
import createMapActionGroup, {
  MapAction,
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
import {
  ActionGroup,
  SyncAction,
  SyncActionConfig,
  UpdateAction,
} from './types/update-actions'

export const actionGroups = ['base', 'myBusinessUnit', 'customerSearch']

const createChannelsMapActions: MapAction = (
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

export const createSyncProjects = (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<Project, ProjectUpdateAction> => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createChannelsMapActions(
    mapActionGroup,
    syncActionConfig
  )
  const buildActions = createBuildActions<Project, ProjectUpdateAction>(
    diff,
    doMapActions
  )
  return { buildActions }
}
