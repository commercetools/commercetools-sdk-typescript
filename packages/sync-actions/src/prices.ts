import { actionsMapBase } from './prices-actions'
import actionsMapCustom from './utils/action-map-custom'
import combineValidityActions from './utils/combine-validity-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup, {
  MapAction,
} from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'
import {
  ActionGroup,
  SyncAction,
  SyncActionConfig,
} from './types/update-actions'
import {
  StandalonePrice,
  StandalonePriceUpdateAction,
} from '@commercetools/platform-sdk'

const actionGroups = ['base', 'custom']

const createPriceMapActions: MapAction = (mapActionGroup, syncActionConfig) => {
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

export const createSyncStandalonePrices = (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<StandalonePrice, StandalonePriceUpdateAction> => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createPriceMapActions(mapActionGroup, syncActionConfig)

  const buildActions = createBuildActions<
    StandalonePrice,
    StandalonePriceUpdateAction
  >(diff, doMapActions)

  return { buildActions }
}

export { actionGroups }
