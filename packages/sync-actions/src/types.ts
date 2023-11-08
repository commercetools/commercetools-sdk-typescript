import { Type, TypeUpdateAction } from '@commercetools/platform-sdk/src'
import { SyncActionConfig } from '@commercetools/sdk-client-v2'
import { actionsMapBase, actionsMapFieldDefinitions } from './types-actions'
import { SyncAction } from './types/update-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'
import findMatchingPairs from './utils/find-matching-pairs'

const actionGroups = ['base', 'fieldDefinitions']

function createTypeMapActions(
  mapActionGroup,
  syncActionConfig: { shouldOmitEmptyString?: boolean }
) {
  return function doMapActions(diff, next, previous) {
    const allActions = []
    allActions.push(
      mapActionGroup('base', () =>
        actionsMapBase(diff, previous, next, syncActionConfig)
      ),
      mapActionGroup('fieldDefinitions', () =>
        actionsMapFieldDefinitions(
          diff.fieldDefinitions,
          previous.fieldDefinitions,
          next.fieldDefinitions,
          findMatchingPairs(
            diff.fieldDefinitions,
            previous.fieldDefinitions,
            next.fieldDefinitions,
            'name'
          )
        )
      )
    )
    return allActions.flat()
  }
}

export default (
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
