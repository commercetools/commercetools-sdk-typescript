import { Type, TypeUpdateAction } from '@commercetools/platform-sdk/src'
import { actionsMapBase, actionsMapFieldDefinitions } from './types-actions'
import {
  ActionGroup,
  SyncActionConfig,
  SyncAction,
  UpdateAction,
} from './types/update-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup, {
  MapAction,
} from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'
import findMatchingPairs from './utils/find-matching-pairs'

const actionGroups = ['base', 'fieldDefinitions']

const createTypeMapActions: MapAction = (mapActionGroup, syncActionConfig) => {
  return function doMapActions(diff, newObj, oldObj) {
    const allActions: Array<Array<UpdateAction>> = []
    allActions.push(
      mapActionGroup('base', () =>
        actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      ),
      mapActionGroup('fieldDefinitions', () =>
        actionsMapFieldDefinitions(
          diff.fieldDefinitions,
          oldObj.fieldDefinitions,
          newObj.fieldDefinitions,
          findMatchingPairs(
            diff.fieldDefinitions,
            oldObj.fieldDefinitions,
            newObj.fieldDefinitions,
            'name'
          )
        )
      )
    )
    return allActions.flat()
  }
}

export const createSyncTypes = (
  actionGroupList?: Array<any>,
  syncActionConfig?: SyncActionConfig
): SyncAction<Type, TypeUpdateAction> => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createTypeMapActions(mapActionGroup, syncActionConfig)
  const buildActions = createBuildActions<Type, TypeUpdateAction>(
    diff,
    doMapActions
  )
  return { buildActions }
}

export { actionGroups }
