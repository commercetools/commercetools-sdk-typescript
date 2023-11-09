import { buildBaseAttributesActions } from './utils/common-actions'
import createBuildArrayActions, {
  ADD_ACTIONS,
  REMOVE_ACTIONS,
} from './utils/create-build-array-actions'
import { ActionMapBase } from './utils/create-map-action-group'
import { UpdateAction } from '@commercetools/sdk-client-v2'

export const baseActionsList: Array<UpdateAction> = [
  { action: 'changeKey', key: 'key' },
  { action: 'setName', key: 'name' },
  { action: 'setDescription', key: 'description' },
  { action: 'changeType', key: 'type' },
  { action: 'changeInitial', key: 'initial' },
  { action: 'setTransitions', key: 'transitions' },
]

export const actionsMapBase: ActionMapBase = (diff, oldObj, newObj, config) => {
  return buildBaseAttributesActions({
    actions: baseActionsList,
    diff,
    oldObj,
    newObj,
    shouldOmitEmptyString: config?.shouldOmitEmptyString,
  })
}

export function actionsMapRoles(diff: any, oldObj: any, newObj: any) {
  const buildArrayActions = createBuildArrayActions('roles', {
    [ADD_ACTIONS]: (newRole) => ({
      action: 'addRoles',
      roles: newRole,
    }),
    [REMOVE_ACTIONS]: (oldRole) => ({
      action: 'removeRoles',
      roles: oldRole,
    }),
  })

  return buildArrayActions(diff, oldObj, newObj)
}
