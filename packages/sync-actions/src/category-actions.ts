import {
  buildBaseAttributesActions,
  buildReferenceActions,
} from './utils/common-actions'
import { ActionMapBase } from './utils/create-map-action-group'
import { UpdateAction } from '@commercetools/sdk-client-v2'

export const baseActionsList: Array<UpdateAction> = [
  { action: 'changeName', key: 'name' },
  { action: 'changeSlug', key: 'slug' },
  { action: 'setDescription', key: 'description' },
  { action: 'changeOrderHint', key: 'orderHint' },
  { action: 'setExternalId', key: 'externalId' },
  { action: 'setKey', key: 'key' },
]

export const metaActionsList: Array<UpdateAction> = [
  { action: 'setMetaTitle', key: 'metaTitle' },
  { action: 'setMetaKeywords', key: 'metaKeywords' },
  { action: 'setMetaDescription', key: 'metaDescription' },
]

export const referenceActionsList = [{ action: 'changeParent', key: 'parent' }]

/**
 * SYNC FUNCTIONS
 */

export const actionsMapBase: ActionMapBase = (diff, oldObj, newObj, config) => {
  return buildBaseAttributesActions({
    actions: baseActionsList,
    diff,
    oldObj,
    newObj,
    shouldOmitEmptyString: config?.shouldOmitEmptyString,
  })
}

export function actionsMapReferences(diff: any, oldObj: any, newObj: any) {
  return buildReferenceActions({
    actions: referenceActionsList,
    diff,
    oldObj,
    newObj,
  })
}

export function actionsMapMeta(diff: any, oldObj: any, newObj: any) {
  return buildBaseAttributesActions({
    actions: metaActionsList,
    diff,
    oldObj,
    newObj,
  })
}
