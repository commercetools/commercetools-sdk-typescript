import { StateUpdateAction } from '@commercetools/platform-sdk'
import type {
  ActionGroup,
  SyncActionConfig,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import { actionsMapBase, actionsMapRoles } from './state-actions'
import { SyncAction } from './types/update-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

type RoleUpdate = {
  action: string
  roles: string
}

export const actionGroups = ['base']

// This function groups `addRoles` and `removeRoles` actions to one array
function groupRoleActions([actions]: Array<UpdateAction>): Array<UpdateAction> {
  const addActionRoles = []
  const removeActionRoles = []
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
  mapActionGroup: Function,
  syncActionConfig?: SyncActionConfig
): (diff: any, newObj: any, oldObj: any) => Array<UpdateAction> {
  return function doMapActions(
    diff: any,
    newObj: any,
    oldObj: any
  ): Array<UpdateAction> {
    const baseActions = []
    const roleActions = []
    baseActions.push(
      mapActionGroup(
        'base',
        (): Array<UpdateAction> =>
          actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )
    roleActions.push(
      mapActionGroup(
        'roles',
        (): Array<UpdateAction> => actionsMapRoles(diff, oldObj, newObj)
      )
    )
    return [...baseActions, ...groupRoleActions(roleActions)].flat()
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<StateUpdateAction> => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createStatesMapActions(mapActionGroup, syncActionConfig)
  const buildActions = createBuildActions(diff, doMapActions)
  return { buildActions }
}
