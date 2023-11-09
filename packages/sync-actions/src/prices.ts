import type {
  ActionGroup,
  SyncAction,
  SyncActionConfig,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import { actionsMapBase } from './prices-actions'
import actionsMapCustom from './utils/action-map-custom'
import combineValidityActions from './utils/combine-validity-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup, {
  MapActionGroup,
  MapActionResult,
} from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

const actionGroups = ['base', 'custom']

function createPriceMapActions(
  mapActionGroup: MapActionGroup,
  syncActionConfig?: SyncActionConfig
): MapActionResult {
  return function doMapActions(diff, newObj, oldObj) {
    const baseActions = mapActionGroup('base', () =>
      actionsMapBase(diff, oldObj, newObj, syncActionConfig)
    )

    const customActions = mapActionGroup('custom', () =>
      actionsMapCustom(diff, newObj, oldObj)
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
