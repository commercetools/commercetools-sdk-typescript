import {
  CustomerGroup,
  CustomerGroupUpdateAction,
} from '@commercetools/platform-sdk'
import { ActionGroup, SyncActionConfig } from '@commercetools/sdk-client-v2'
import { actionsMapBase } from './customer-group-actions'
import { SyncAction } from './types/update-actions'
import actionsMapCustom from './utils/action-map-custom'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

export const actionGroups = ['base', 'custom']

function createCustomerGroupMapActions(mapActionGroup, syncActionConfig) {
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

    return allActions.flat()
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<CustomerGroup, CustomerGroupUpdateAction> => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createCustomerGroupMapActions(
    mapActionGroup,
    syncActionConfig
  )
  const buildActions = createBuildActions<
    CustomerGroup,
    CustomerGroupUpdateAction
  >(diff, doMapActions)
  return { buildActions }
}
