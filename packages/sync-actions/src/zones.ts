import { Zone, ZoneUpdateAction } from '@commercetools/platform-sdk'
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
import * as zonesActions from './zones-actions'

export const actionGroups = ['base', 'locations']

const createZonesMapActions: MapAction = (mapActionGroup, syncActionConfig) => {
  return function doMapActions(diff, newObj, oldObj) {
    const allActions: Array<Array<UpdateAction>> = []
    allActions.push(
      mapActionGroup('base', () =>
        zonesActions.actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )
    allActions.push(
      mapActionGroup('locations', () =>
        zonesActions.actionsMapLocations(diff, oldObj, newObj)
      ).flat()
    )
    return allActions.flat()
  }
}

export const createSyncZones = (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<Zone, ZoneUpdateAction> => {
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
  const doMapActions = createZonesMapActions(mapActionGroup, syncActionConfig)
  const buildActions = createBuildActions<Zone, ZoneUpdateAction>(
    diff,
    doMapActions
  )
  return { buildActions }
}
