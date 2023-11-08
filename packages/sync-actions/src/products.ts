import { ProductData, ProductUpdateAction } from '@commercetools/platform-sdk'
import type {
  ActionGroup,
  SyncActionConfig,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import {
  actionsMapAddVariants,
  actionsMapAssets,
  actionsMapAttributes,
  actionsMapBase,
  actionsMapCategories,
  actionsMapCategoryOrderHints,
  actionsMapImages,
  actionsMapMasterVariant,
  actionsMapMeta,
  actionsMapPrices,
  actionsMapPricesCustom,
  actionsMapReferences,
  actionsMapRemoveVariants,
} from './product-actions'
import { SyncAction } from './types/update-actions'
import copyEmptyArrayProps from './utils/copy-empty-array-props'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'
import findMatchingPairs from './utils/find-matching-pairs'
import exp from 'constants'

const actionGroups = [
  'base',
  'meta',
  'references',
  'prices',
  'pricesCustom',
  'attributes',
  'images',
  'variants',
  'categories',
  'categoryOrderHints',
]

function createProductMapActions(
  mapActionGroup: Function,
  syncActionConfig?: SyncActionConfig
): (diff: any, newObj: any, oldObj: any, options: any) => Array<UpdateAction> {
  return function doMapActions(
    diff: any,
    newObj: any,
    oldObj: any,
    options: any = {}
  ): Array<UpdateAction> {
    const allActions = []
    const { sameForAllAttributeNames, enableDiscounted } = options
    const { publish, staged } = newObj

    const variantHashMap = findMatchingPairs(
      diff.variants,
      oldObj.variants,
      newObj.variants
    )

    allActions.push(
      mapActionGroup(
        'attributes',
        (): Array<UpdateAction> =>
          actionsMapAttributes(
            diff,
            oldObj,
            newObj,
            sameForAllAttributeNames || [],
            variantHashMap
          )
      )
    )

    allActions.push(
      mapActionGroup(
        'variants',
        (): Array<UpdateAction> => actionsMapAddVariants(diff, oldObj, newObj)
      )
    )

    allActions.push(actionsMapMasterVariant(oldObj, newObj))

    allActions.push(
      mapActionGroup(
        'variants',
        (): Array<UpdateAction> =>
          actionsMapRemoveVariants(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup(
        'base',
        (): Array<UpdateAction> =>
          actionsMapBase(diff, oldObj, newObj, syncActionConfig)
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
        'references',
        (): Array<UpdateAction> => actionsMapReferences(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup(
        'images',
        (): Array<UpdateAction> =>
          actionsMapImages(diff, oldObj, newObj, variantHashMap)
      )
    )

    allActions.push(
      mapActionGroup(
        'pricesCustom',
        (): Array<UpdateAction> =>
          actionsMapPricesCustom(diff, oldObj, newObj, variantHashMap)
      )
    )

    allActions.push(
      mapActionGroup(
        'prices',
        (): Array<UpdateAction> =>
          actionsMapPrices(
            diff,
            oldObj,
            newObj,
            variantHashMap,
            enableDiscounted
          )
      )
    )

    allActions.push(
      mapActionGroup(
        'categories',
        (): Array<UpdateAction> => actionsMapCategories(diff)
      )
    )

    allActions.push(
      mapActionGroup(
        'categories',
        (): Array<UpdateAction> => actionsMapCategoryOrderHints(diff)
      )
    )

    allActions.push(
      mapActionGroup(
        'assets',
        (): Array<UpdateAction> =>
          actionsMapAssets(diff, oldObj, newObj, variantHashMap)
      )
    )

    if (publish === true || staged === false)
      return allActions.flat().map((action) => ({ ...action, staged: false }))

    return allActions.flat()
  }
}

function moveMasterVariantsIntoVariants(before: any, now: any): Array<Object> {
  const [beforeCopy, nowCopy] = copyEmptyArrayProps(before, now)
  const move = (obj: any): any => ({
    ...obj,
    masterVariant: undefined,
    variants: [obj.masterVariant, ...(obj.variants || [])],
  })
  const hasMasterVariant = (obj: any): any => obj && obj.masterVariant

  return [
    hasMasterVariant(beforeCopy) ? move(beforeCopy) : beforeCopy,
    hasMasterVariant(nowCopy) ? move(nowCopy) : nowCopy,
  ]
}

export type ProductSync = { key: string; id: string } & ProductData

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction<ProductSync, ProductUpdateAction> => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createProductMapActions(mapActionGroup, syncActionConfig)

  const buildActions = createBuildActions<ProductSync, ProductUpdateAction>(
    diff,
    doMapActions,
    moveMasterVariantsIntoVariants
  )

  return { buildActions }
}

export { actionGroups }
