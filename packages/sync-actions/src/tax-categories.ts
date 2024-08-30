import {
  TaxCategory,
  TaxCategoryUpdateAction,
} from '@commercetools/platform-sdk'
import { actionsMapBase, actionsMapRates } from './tax-categories-actions'
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

export const actionGroups = ['base', 'rates']

const createTaxCategoriesMapActions: MapAction = (
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
      mapActionGroup('rates', () => actionsMapRates(diff, oldObj, newObj))
    )
    return allActions.flat()
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<TaxCategory, TaxCategoryUpdateAction> => {
  // config contains information about which action groups
  // are allowed or ignored

  // createMapActionGroup returns function 'mapActionGroup' that takes params:
  // - action group name
  // - callback function that should return a list of actions that correspond
  //    to the for the action group

  // this resulting function mapActionGroup will call the callback function
  // for allowed action groups and return the return value of the callback
  // It will return an empty array for ignored action groups
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createTaxCategoriesMapActions(
    mapActionGroup,
    syncActionConfig
  )
  const buildActions = createBuildActions<TaxCategory, TaxCategoryUpdateAction>(
    diff,
    doMapActions
  )
  return { buildActions }
}
