import {
  CustomFields,
  StagedQuote,
  StagedQuoteUpdateAction,
} from '@commercetools/platform-sdk'
import { actionsMapBase } from './staged-quotes-actions'
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

const createStagedQuotesMapActions: MapAction = (
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

export type StagedQuoteSync = {
  stagedQuoteState: string
  custom: CustomFields
} & StagedQuote

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<StagedQuoteSync, StagedQuoteUpdateAction> => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createStagedQuotesMapActions(
    mapActionGroup,
    syncActionConfig
  )

  const buildActions = createBuildActions<
    StagedQuoteSync,
    StagedQuoteUpdateAction
  >(diff, doMapActions)

  return { buildActions }
}

export { actionGroups }
