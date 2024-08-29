import clone, { notEmpty } from './clone'
import { Delta, getDeltaValue, patch } from './diffpatcher'
import { UpdateAction } from '@commercetools/sdk-client-v2'

const normalizeValue = (value: any) =>
  typeof value === 'string' ? value.trim() : value

export const createIsEmptyValue = (emptyValues: Array<any>) => (value: any) =>
  emptyValues.some((emptyValue) => emptyValue === normalizeValue(value))

/**
 * Builds actions for simple object properties, given a list of actions
 * E.g. [{ action: `changeName`, key: 'name' }]
 *
 * @param  {Array} actions - a list of actions to be built
 * based on the given property
 * @param  {Object} diff - the diff object
 * @param  {Object} oldObj - the object that needs to be updated
 * @param  {Object} newObj - the new representation of the object
 * @param {Boolean} shouldOmitEmptyString - a flag to determine if we should treat an empty string a NON-value
 */
export function buildBaseAttributesActions({
  actions,
  diff,
  oldObj,
  newObj,
  shouldOmitEmptyString,
}: {
  actions: Array<UpdateAction>
  diff: Delta
  oldObj: any
  newObj: any
  shouldOmitEmptyString?: boolean
}): Array<UpdateAction> {
  const isEmptyValue = createIsEmptyValue(
    shouldOmitEmptyString ? [undefined, null, ''] : [undefined, null]
  )
  return actions
    .map((item) => {
      const key = item.key // e.g.: name, description, ...
      const actionKey = item.actionKey || item.key
      const delta = diff[key]
      const before = oldObj[key]
      const now = newObj[key]
      const isNotDefinedBefore = isEmptyValue(oldObj[key])
      const isNotDefinedNow = isEmptyValue(newObj[key])
      if (!delta) return undefined

      if (isNotDefinedNow && isNotDefinedBefore) return undefined

      if (!isNotDefinedNow && isNotDefinedBefore)
        // no value previously set
        return { action: item.action, [actionKey]: now }

      /* no new value */
      if (isNotDefinedNow && !{}.hasOwnProperty.call(newObj, key))
        return undefined

      if (isNotDefinedNow && {}.hasOwnProperty.call(newObj, key))
        // value unset
        return { action: item.action }

      // We need to clone `before` as `patch` will mutate it
      const patched = patch(clone(before), delta)
      return { action: item.action, [actionKey]: patched }
    })
    .filter(notEmpty)
}

/**
 * Builds actions for simple reference objects, given a list of actions
 * E.g. [{ action: `setTaxCategory`, key: 'taxCategory' }]
 *
 * @param  {Array} actions - a list of actions to be built
 * based on the given property
 * @param  {Object} diff - the diff object
 * @param  {Object} oldObj - the object that needs to be updated
 * @param  {Object} newObj - the new representation of the object
 */
export function buildReferenceActions({
  actions,
  diff,
  oldObj,
  newObj,
}: {
  actions: Array<UpdateAction>
  diff: Delta
  oldObj: any
  newObj: any
}): Array<{ action: string }> {
  return actions
    .map((item) => {
      const action = item.action
      const key = item.key

      if (
        diff[key] &&
        // The `key` value was added or removed
        (Array.isArray(diff[key]) ||
          // The `key` value id changed
          diff[key].id)
      ) {
        const newValue = Array.isArray(diff[key])
          ? getDeltaValue(diff[key])
          : newObj[key]

        if (!newValue) return { action }

        // When the `id` of the object is undefined
        if (!newValue.id) {
          return {
            action,
            [key]: {
              typeId: newValue.typeId,
              key: newValue.key,
            },
          }
        }

        return {
          action,
          // We only need to pass a reference to the object.
          // This prevents accidentally sending the expanded (`obj`)
          // over the wire.
          [key]: {
            typeId: newValue.typeId,
            id: newValue.id,
          },
        }
      }

      return undefined
    })
    .filter((action) => action)
}
