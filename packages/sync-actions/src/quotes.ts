import { Quote, QuoteUpdateAction } from '@commercetools/platform-sdk'
import { actionsMapBase } from './quotes-actions'
import {
  ActionGroup,
  SyncActionConfig,
  SyncAction,
  UpdateAction,
} from './types/update-actions'
import actionsMapCustom from './utils/action-map-custom'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup, {
  MapAction,
} from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

const actionGroups = ['base', 'custom']

const createQuotesMapActions: MapAction = (
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
      mapActionGroup('custom', () => actionsMapCustom(diff, newObj, oldObj))
    )

    return allActions.flat()
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<Quote, QuoteUpdateAction> => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createQuotesMapActions(mapActionGroup, syncActionConfig)

  const buildActions = createBuildActions<Quote, QuoteUpdateAction>(
    diff,
    doMapActions
  )

  return { buildActions }
}

export { actionGroups }
