import { buildBaseAttributesActions } from './utils/common-actions'
import createBuildArrayActions, {
  ADD_ACTIONS,
  CHANGE_ACTIONS,
  REMOVE_ACTIONS,
} from './utils/create-build-array-actions'
import { UpdateAction } from '@commercetools/sdk-client-v2'
import { ActionMapBase } from './utils/create-map-action-group'
import { Location } from '@commercetools/platform-sdk'

export const baseActionsList: Array<UpdateAction> = [
  { action: 'changeName', key: 'name' },
  { action: 'setDescription', key: 'description' },
  { action: 'setKey', key: 'key' },
]

const hasLocation = (locations: Array<Location>, otherLocation: Location) =>
  locations.some((location) => location.country === otherLocation.country)

export const actionsMapBase: ActionMapBase = (diff, oldObj, newObj, config) => {
  return buildBaseAttributesActions({
    actions: baseActionsList,
    diff,
    oldObj,
    newObj,
    shouldOmitEmptyString: config?.shouldOmitEmptyString,
  })
}

export function actionsMapLocations(diff: any, oldObj: any, newObj: any) {
  const handler = createBuildArrayActions('locations', {
    [ADD_ACTIONS]: (newLocation) => ({
      action: 'addLocation',
      location: newLocation,
    }),
    [REMOVE_ACTIONS]: (oldLocation) =>
      // We only add the action if the location is not included in the new object.
      !hasLocation(newObj.locations, oldLocation)
        ? {
            action: 'removeLocation',
            location: oldLocation,
          }
        : null,
    [CHANGE_ACTIONS]: (oldLocation, newLocation) => {
      const result: Array<UpdateAction> = []

      // We only remove the location in case that the oldLocation is not
      // included in the new object
      if (!hasLocation(newObj.locations, oldLocation))
        result.push({
          action: 'removeLocation',
          location: oldLocation,
        })

      // We only add the location in case that the newLocation was not
      // included in the old object
      if (!hasLocation(oldObj.locations, newLocation))
        result.push({
          action: 'addLocation',
          location: newLocation,
        })

      return result
    },
  })

  return handler(diff, oldObj, newObj)
}
