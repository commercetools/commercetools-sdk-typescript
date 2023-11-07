import { ZoneUpdateAction } from '@commercetools/platform-sdk'
import type {
  ActionGroup,
  SyncActionConfig,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import { SyncAction } from './types/update-actions'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'
import * as zonesActions from './zones-actions'

export const actionGroups = ['base', 'locations']

function createZonesMapActions(
  mapActionGroup: (
    type: string,
    fn: () => Array<UpdateAction>
  ) => Array<UpdateAction>,
  syncActionConfig?: SyncActionConfig
): (diff: any, next: any, previous: any) => Array<UpdateAction> {
  return function doMapActions(
    diff: any,
    newObj: any,
    oldObj: any
  ): Array<UpdateAction> {
    const allActions = []
    allActions.push(
      mapActionGroup(
        'base',
        (): Array<UpdateAction> =>
          zonesActions.actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )
    allActions.push(
      mapActionGroup(
        'locations',
        (): Array<UpdateAction> =>
          zonesActions.actionsMapLocations(diff, oldObj, newObj)
      ).flat()
    )
    return allActions.flat()
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<ZoneUpdateAction> => {
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
  const buildActions = createBuildActions(diff, doMapActions)
  return { buildActions }
}
