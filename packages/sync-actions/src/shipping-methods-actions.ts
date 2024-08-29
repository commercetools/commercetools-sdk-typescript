import { buildBaseAttributesActions } from './utils/common-actions'
import createBuildArrayActions, {
  ADD_ACTIONS,
  CHANGE_ACTIONS,
  REMOVE_ACTIONS,
} from './utils/create-build-array-actions'
import { ActionMap, ActionMapBase } from './utils/create-map-action-group'
import { UpdateAction } from '@commercetools/sdk-client-v2'
import { ZoneRate } from '@commercetools/platform-sdk'

export const baseActionsList: Array<UpdateAction> = [
  { action: 'setKey', key: 'key' },
  { action: 'changeName', key: 'name' },
  { action: 'setLocalizedName', key: 'localizedName' },
  { action: 'setDescription', key: 'description' },
  { action: 'setLocalizedDescription', key: 'localizedDescription' },
  { action: 'changeIsDefault', key: 'isDefault' },
  { action: 'setPredicate', key: 'predicate' },
  { action: 'changeTaxCategory', key: 'taxCategory' },
  { action: 'changeActive', key: 'active' },
]

export const actionsMapBase: ActionMapBase = (diff, oldObj, newObj, config) => {
  return buildBaseAttributesActions({
    actions: baseActionsList,
    diff,
    oldObj,
    newObj,
    shouldOmitEmptyString: config?.shouldOmitEmptyString,
  })
}

const addShippingRates = (newZoneRate: ZoneRate) =>
  newZoneRate.shippingRates
    ? newZoneRate.shippingRates.map((shippingRate) => ({
        action: 'addShippingRate',
        zone: newZoneRate.zone,
        shippingRate,
      }))
    : []

const actionsMapZoneRatesShippingRates: ActionMap = (diff, oldObj, newObj) => {
  const handler = createBuildArrayActions('shippingRates', {
    [ADD_ACTIONS]: (newShippingRate) => ({
      action: 'addShippingRate',
      zone: newObj.zone,
      shippingRate: newShippingRate,
    }),
    [REMOVE_ACTIONS]: (oldShippingRate) => ({
      action: 'removeShippingRate',
      zone: oldObj.zone,
      shippingRate: oldShippingRate,
    }),
    [CHANGE_ACTIONS]: (oldShippingRate, newShippingRate) => [
      {
        action: 'removeShippingRate',
        zone: oldObj.zone,
        shippingRate: oldShippingRate,
      },
      {
        action: 'addShippingRate',
        zone: newObj.zone,
        shippingRate: newShippingRate,
      },
    ],
  })

  return handler(diff, oldObj, newObj)
}

export const actionsMapZoneRates: ActionMap = (diff, oldObj, newObj) => {
  const handler = createBuildArrayActions('zoneRates', {
    [ADD_ACTIONS]: (newZoneRate) => [
      {
        action: 'addZone',
        zone: newZoneRate.zone,
      },
      ...addShippingRates(newZoneRate),
    ],
    [REMOVE_ACTIONS]: (oldZoneRate) => ({
      action: 'removeZone',
      zone: oldZoneRate.zone,
    }),
    [CHANGE_ACTIONS]: (oldZoneRate, newZoneRate) => {
      let hasZoneActions = false

      const shippingRateActions = Object.keys(diff.zoneRates).reduce(
        (actions, key) => {
          if (diff.zoneRates[key].zone) hasZoneActions = true

          if (diff.zoneRates[key].shippingRates)
            return [
              ...actions,
              ...actionsMapZoneRatesShippingRates(
                diff.zoneRates[key],
                oldZoneRate,
                newZoneRate
              ),
            ]
          return actions
        },
        []
      )

      return (
        hasZoneActions
          ? [
              ...shippingRateActions,
              ...[
                {
                  action: 'removeZone',
                  zone: oldZoneRate.zone,
                },
                {
                  action: 'addZone',
                  zone: newZoneRate.zone,
                },
              ],
            ]
          : shippingRateActions
      ).flat()
    },
  })

  return handler(diff, oldObj, newObj)
}
