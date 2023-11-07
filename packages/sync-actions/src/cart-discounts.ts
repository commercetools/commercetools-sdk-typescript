import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import actionsMapCustom from './utils/action-map-custom'
import { actionsMapBase } from './cart-discounts-actions'
import combineValidityActions from './utils/combine-validity-actions'
import { diff } from './utils/diffpatcher'
import { SyncActionConfig } from '@commercetools/sdk-client-v2'

export const actionGroups = ['base', 'custom']

function createCartDiscountsMapActions(mapActionGroup, syncActionConfig) {
  return function doMapActions(diff, newObj, oldObj) {
    const allActions = []

    allActions.push(
      mapActionGroup('base', () =>
        actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )

    allActions.push(
      mapActionGroup('custom', () => actionsMapCustom(diff, newObj, oldObj))
    )

    return combineValidityActions(allActions.flat())
  }
}

export default (actionGroupList?, syncActionConfig?: SyncActionConfig) => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createCartDiscountsMapActions(
    mapActionGroup,
    syncActionConfig
  )
  const buildActions = createBuildActions(diff, doMapActions)
  return { buildActions }
}
