import {
  InventoryEntry,
  InventoryEntryUpdateAction,
} from '@commercetools/platform-sdk'
import type {
  ActionGroup,
  SyncActionConfig,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import { actionsMapBase, actionsMapReferences } from './inventory-actions'
import { SyncAction } from './types/update-actions'
import actionsMapCustom from './utils/action-map-custom'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup, {
  MapActionGroup,
  MapActionResult,
} from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

export const actionGroups = ['base', 'references']

function createInventoryMapActions(
  mapActionGroup: MapActionGroup,
  syncActionConfig?: SyncActionConfig
): MapActionResult {
  return function doMapActions(diff, newObj, oldObj) {
    const allActions: Array<Array<UpdateAction>> = []
    allActions.push(
      mapActionGroup('base', () =>
        actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )

    allActions.push(
      mapActionGroup('references', () =>
        actionsMapReferences(diff, oldObj, newObj)
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
): SyncAction<InventoryEntry, InventoryEntryUpdateAction> => {
  // actionGroupList contains information about which action groups
  // are allowed or ignored

  // createMapActionGroup returns function 'mapActionGroup' that takes params:
  // - action group name
  // - callback function that should return a list of actions that correspond
  //    to the for the action group

  // this resulting function mapActionGroup will call the callback function
  // for allowed action groups and return the return value of the callback
  // It will return an empty array for ignored action groups
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createInventoryMapActions(
    mapActionGroup,
    syncActionConfig
  )
  const buildActions = createBuildActions<
    InventoryEntry,
    InventoryEntryUpdateAction
  >(diff, doMapActions)
  return { buildActions }
}
