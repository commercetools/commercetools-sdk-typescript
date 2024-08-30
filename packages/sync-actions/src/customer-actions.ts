import clone, { notEmpty } from './utils/clone'
import {
  buildBaseAttributesActions,
  buildReferenceActions,
  createIsEmptyValue,
} from './utils/common-actions'
import createBuildArrayActions, {
  ADD_ACTIONS,
  CHANGE_ACTIONS,
  REMOVE_ACTIONS,
} from './utils/create-build-array-actions'
import { Delta, patch } from './utils/diffpatcher'
import { ActionMap, ActionMapBase } from './utils/create-map-action-group'
import { UpdateAction } from './types/update-actions'

const isEmptyValue = createIsEmptyValue([undefined, null, ''])

export const baseActionsList: Array<UpdateAction> = [
  { action: 'setSalutation', key: 'salutation' },
  { action: 'changeEmail', key: 'email' },
  { action: 'setFirstName', key: 'firstName' },
  { action: 'setLastName', key: 'lastName' },
  { action: 'setMiddleName', key: 'middleName' },
  { action: 'setTitle', key: 'title' },
  { action: 'setCustomerNumber', key: 'customerNumber' },
  { action: 'setExternalId', key: 'externalId' },
  { action: 'setCompanyName', key: 'companyName' },
  { action: 'setDateOfBirth', key: 'dateOfBirth' },
  { action: 'setLocale', key: 'locale' },
  { action: 'setVatId', key: 'vatId' },
  {
    action: 'setStores',
    key: 'stores',
  },
  { action: 'setKey', key: 'key' },
]

export const setDefaultBaseActionsList: Array<UpdateAction> = [
  {
    action: 'setDefaultBillingAddress',
    key: 'defaultBillingAddressId',
    actionKey: 'addressId',
  },
  {
    action: 'setDefaultShippingAddress',
    key: 'defaultShippingAddressId',
    actionKey: 'addressId',
  },
]

export const referenceActionsList = [
  { action: 'setCustomerGroup', key: 'customerGroup' },
]

export const authenticationModeActionsList = [
  {
    action: 'setAuthenticationMode',
    key: 'authenticationMode',
    value: 'password',
  },
]

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

export const actionsMapSetDefaultBase: ActionMapBase = (
  diff,
  oldObj,
  newObj,
  config
) => {
  return buildBaseAttributesActions({
    actions: setDefaultBaseActionsList,
    diff,
    oldObj,
    newObj,
    shouldOmitEmptyString: config?.shouldOmitEmptyString,
  })
}

export const actionsMapReferences: ActionMap = (diff, oldObj, newObj) => {
  return buildReferenceActions({
    actions: referenceActionsList,
    diff,
    oldObj,
    newObj,
  })
}

export const actionsMapAddresses: ActionMap = (diff, oldObj, newObj) => {
  const handler = createBuildArrayActions('addresses', {
    [ADD_ACTIONS]: (newObject) => ({
      action: 'addAddress',
      address: newObject,
    }),
    [REMOVE_ACTIONS]: (objectToRemove) => ({
      action: 'removeAddress',
      addressId: objectToRemove.id,
    }),
    [CHANGE_ACTIONS]: (oldObject, updatedObject) => ({
      action: 'changeAddress',
      addressId: oldObject.id,
      address: updatedObject,
    }),
  })

  return handler(diff, oldObj, newObj)
}

export const actionsMapBillingAddresses: ActionMap = (diff, oldObj, newObj) => {
  const handler = createBuildArrayActions('billingAddressIds', {
    [ADD_ACTIONS]: (addressId) => ({
      action: 'addBillingAddressId',
      addressId,
    }),
    [REMOVE_ACTIONS]: (addressId) => ({
      action: 'removeBillingAddressId',
      addressId,
    }),
  })

  return handler(diff, oldObj, newObj)
}

export const actionsMapShippingAddresses: ActionMap = (
  diff,
  oldObj,
  newObj
) => {
  const handler = createBuildArrayActions('shippingAddressIds', {
    [ADD_ACTIONS]: (addressId) => ({
      action: 'addShippingAddressId',
      addressId,
    }),
    [REMOVE_ACTIONS]: (addressId) => ({
      action: 'removeShippingAddressId',
      addressId,
    }),
  })

  return handler(diff, oldObj, newObj)
}

export const actionsMapAuthenticationModes: ActionMap = (
  diff,
  oldObj,
  newObj
) => {
  return buildAuthenticationModeActions({
    actions: authenticationModeActionsList,
    diff,
    oldObj,
    newObj,
  })
}

function buildAuthenticationModeActions({
  actions,
  diff,
  oldObj,
  newObj,
}: {
  actions: Array<UpdateAction>
  diff: Delta
  oldObj: any
  newObj: any
}) {
  return actions
    .map((item) => {
      const key = item.key
      const value = item.value || item.key
      const delta = diff[key]
      const before = oldObj[key]
      const now = newObj[key]
      const isNotDefinedBefore = isEmptyValue(oldObj[key])
      const isNotDefinedNow = isEmptyValue(newObj[key])
      const authenticationModes = ['Password', 'ExternalAuth']

      if (!delta) return undefined

      if (isNotDefinedNow && isNotDefinedBefore) return undefined

      if (newObj.authenticationMode === 'Password' && !newObj.password)
        throw new Error(
          'Cannot set to Password authentication mode without password'
        )

      if (
        'authenticationMode' in newObj &&
        !authenticationModes.includes(newObj.authenticationMode)
      )
        throw new Error('Invalid Authentication Mode')

      if (!isNotDefinedNow && isNotDefinedBefore) {
        // no value previously set
        if (newObj.authenticationMode === 'ExternalAuth')
          return { action: item.action, authMode: now }
        return { action: item.action, authMode: now, [value]: newObj.password }
      }

      /* no new value */
      if (isNotDefinedNow && !{}.hasOwnProperty.call(newObj, key))
        return undefined

      if (isNotDefinedNow && {}.hasOwnProperty.call(newObj, key))
        // value unset
        return undefined

      // We need to clone `before` as `patch` will mutate it
      const patched = patch(clone(before), delta)
      if (newObj.authenticationMode === 'ExternalAuth')
        return { action: item.action, authMode: patched }
      return {
        action: item.action,
        authMode: patched,
        [value]: newObj.password,
      }
    })
    .filter(notEmpty)
}
