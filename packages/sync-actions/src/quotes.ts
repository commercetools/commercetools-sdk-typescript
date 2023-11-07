import type {
  SyncAction,
  SyncActionConfig,
  ActionGroup,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import actionsMapCustom from './utils/action-map-custom'
import * as QuotesActions from './quotes-actions'
import * as diffpatcher from './utils/diffpatcher'

const actionGroups = ['base', 'custom']

function createQuotesMapActions(
  mapActionGroup: Function,
  syncActionConfig?: SyncActionConfig
): (diff: any, newObj: any, oldObj: any, options: any) => Array<UpdateAction> {
  return function doMapActions(
    diff: any,
    newObj: any,
    oldObj: any
  ): Array<UpdateAction> {
    const allActions = []

    allActions.push(
      mapActionGroup(
        'base',
        (): Array<UpdateAction> =>
          QuotesActions.actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )

    allActions.push(
      mapActionGroup(
        'custom',
        (): Array<UpdateAction> => actionsMapCustom(diff, newObj, oldObj)
      )
    )

    return allActions.flat()
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createQuotesMapActions(mapActionGroup, syncActionConfig)

  const buildActions = createBuildActions(diffpatcher.diff, doMapActions)

  return { buildActions }
}

export { actionGroups }
