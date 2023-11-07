import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import { actionsMapBase } from './product-discounts-actions'
import combineValidityActions from './utils/combine-validity-actions'
import * as diffpatcher from './utils/diffpatcher'
import { SyncActionConfig } from '@commercetools/sdk-client-v2'

export const actionGroups = ['base']

function createProductDiscountsMapActions(mapActionGroup, syncActionConfig) {
  return function doMapActions(diff, newObj, oldObj) {
    const allActions = []

    allActions.push(
      mapActionGroup('base', () =>
        actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )
    return combineValidityActions(allActions.flat())
  }
}

export default (actionGroupList?, syncActionConfig?: SyncActionConfig) => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createProductDiscountsMapActions(
    mapActionGroup,
    syncActionConfig
  )
  const buildActions = createBuildActions(diffpatcher.diff, doMapActions)
  return { buildActions }
}
