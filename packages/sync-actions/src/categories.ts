import { Category, CategoryUpdateAction } from '@commercetools/platform-sdk'
import type {
  ActionGroup,
  SyncActionConfig,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import actionsMapAssets from './assets-actions'
import {
  actionsMapBase,
  actionsMapMeta,
  actionsMapReferences,
} from './category-actions'
import { SyncAction } from './types/update-actions'
import actionsMapCustom from './utils/action-map-custom'
import copyEmptyArrayProps from './utils/copy-empty-array-props'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'

export const actionGroups = ['base', 'references', 'meta', 'custom', 'assets']

function createCategoryMapActions(
  mapActionGroup: Function,
  syncActionConfig?: SyncActionConfig
): (diff: any, newObj: any, oldObj: any) => Array<UpdateAction> {
  return function doMapActions(
    diff: any,
    newObj: any,
    oldObj: any /* , options */
  ): Array<UpdateAction> {
    const allActions = []

    allActions.push(
      mapActionGroup(
        'base',
        (): Array<UpdateAction> =>
          actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )

    allActions.push(
      mapActionGroup(
        'references',
        (): Array<UpdateAction> => actionsMapReferences(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup(
        'meta',
        (): Array<UpdateAction> => actionsMapMeta(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup(
        'custom',
        (): Array<UpdateAction> => actionsMapCustom(diff, newObj, oldObj)
      )
    )

    allActions.push(
      mapActionGroup(
        'assets',
        (): Array<UpdateAction> => actionsMapAssets(diff, oldObj, newObj)
      )
    )

    return allActions.flat()
  }
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<Category, CategoryUpdateAction> => {
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
  const doMapActions = createCategoryMapActions(
    mapActionGroup,
    syncActionConfig
  )
  const buildActions = createBuildActions<Category, CategoryUpdateAction>(
    diff,
    doMapActions,
    copyEmptyArrayProps
  )
  return { buildActions }
}
