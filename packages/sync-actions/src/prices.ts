import type {
  SyncAction,
  SyncActionConfig,
  ActionGroup,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import actionsMapCustom from './utils/action-map-custom'
import * as pricesActions from './prices-actions'
import { diff } from './utils/diffpatcher'
import combineValidityActions from './utils/combine-validity-actions'

const actionGroups = ['base', 'custom']

function createPriceMapActions(
  mapActionGroup: Function,
  syncActionConfig?: SyncActionConfig
): (diff: any, newObj: any, oldObj: any, options: any) => Array<UpdateAction> {
  return function doMapActions(
    diff: any,
    newObj: any,
    oldObj: any
  ): Array<UpdateAction> {
    const baseActions = mapActionGroup(
      'base',
      (): Array<UpdateAction> =>
        pricesActions.actionsMapBase(diff, oldObj, newObj, syncActionConfig)
    )

    const customActions = mapActionGroup(
      'custom',
      (): Array<UpdateAction> => actionsMapCustom(diff, newObj, oldObj)
    )

    return combineValidityActions([...baseActions, ...customActions])
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createPriceMapActions(mapActionGroup, syncActionConfig)

  const buildActions = createBuildActions(diff, doMapActions)

  return { buildActions }
}

export { actionGroups }
