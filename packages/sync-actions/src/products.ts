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
import createMapActionGroup, {
  MapActionGroup,
  MapActionResult,
} from './utils/create-map-action-group'
import { diff } from './utils/diffpatcher'
import findMatchingPairs from './utils/find-matching-pairs'

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
  mapActionGroup: MapActionGroup,
  syncActionConfig?: SyncActionConfig
): MapActionResult {
  return function doMapActions(diff, newObj, oldObj, options) {
    const allActions: Array<Array<UpdateAction>> = []
    const { sameForAllAttributeNames, enableDiscounted } = options
    const { publish, staged } = newObj

    const variantHashMap = findMatchingPairs(
      diff.variants,
      oldObj.variants,
      newObj.variants
    )

    allActions.push(
      mapActionGroup('attributes', () =>
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
      mapActionGroup('variants', () =>
        actionsMapAddVariants(diff, oldObj, newObj)
      )
    )

    allActions.push(actionsMapMasterVariant(oldObj, newObj))

    allActions.push(
      mapActionGroup('variants', () =>
        actionsMapRemoveVariants(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup('base', () =>
        actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )

    allActions.push(
      mapActionGroup('meta', () => actionsMapMeta(diff, oldObj, newObj))
    )

    allActions.push(
      mapActionGroup('references', () =>
        actionsMapReferences(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup('images', () =>
        actionsMapImages(diff, oldObj, newObj, variantHashMap)
      )
    )

    allActions.push(
      mapActionGroup('pricesCustom', () =>
        actionsMapPricesCustom(diff, oldObj, newObj, variantHashMap)
      )
    )

    allActions.push(
      mapActionGroup('prices', () =>
        actionsMapPrices(diff, oldObj, newObj, variantHashMap, enableDiscounted)
      )
    )

    allActions.push(
      mapActionGroup('categories', () => actionsMapCategories(diff))
    )

    allActions.push(
      mapActionGroup('categories', () => actionsMapCategoryOrderHints(diff))
    )

    allActions.push(
      mapActionGroup('assets', () =>
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
