import { State, StateUpdateAction } from '@commercetools/platform-sdk'
import type {
  ActionGroup,
  SyncActionConfig,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import { actionsMapBase, actionsMapRoles } from './state-actions'
import { SyncAction } from './types/update-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup, {
  MapActionGroup,
  MapActionResult,
} from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

export const actionGroups = ['base']

// This function groups `addRoles` and `removeRoles` actions to one array
function groupRoleActions([actions]: Array<
  Array<UpdateAction>
>): Array<UpdateAction> {
  const addActionRoles: Array<UpdateAction> = []
  const removeActionRoles: Array<UpdateAction> = []
  actions.forEach((action: UpdateAction) => {
    if (action.action === 'removeRoles') removeActionRoles.push(action.roles)
    if (action.action === 'addRoles') addActionRoles.push(action.roles)
  })
  return [
    { action: 'removeRoles', roles: removeActionRoles },
    { action: 'addRoles', roles: addActionRoles },
  ].filter((action: UpdateAction): number => action.roles.length)
}

function createStatesMapActions(
  mapActionGroup: MapActionGroup,
  syncActionConfig?: SyncActionConfig
): MapActionResult {
  return function doMapActions(diff, newObj, oldObj) {
    const baseActions: Array<Array<UpdateAction>> = []
    const roleActions: Array<Array<UpdateAction>> = []
    baseActions.push(
      mapActionGroup('base', () =>
        actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )
    roleActions.push(
      mapActionGroup('roles', () => actionsMapRoles(diff, oldObj, newObj))
    )
    return [...baseActions, ...groupRoleActions(roleActions)].flat()
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<State, StateUpdateAction> => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createStatesMapActions(mapActionGroup, syncActionConfig)
  const buildActions = createBuildActions<State, StateUpdateAction>(
    diff,
    doMapActions
  )
  return { buildActions }
}
