import { buildBaseAttributesActions } from './utils/common-actions'
import { ActionMapBase } from './utils/create-map-action-group'
import { UpdateAction } from '@commercetools/sdk-client-v2'

export const baseActionsList: Array<UpdateAction> = [
  { action: 'setName', key: 'name' },
  { action: 'setLanguages', key: 'languages' },
  { action: 'setDistributionChannels', key: 'distributionChannels' },
  { action: 'setSupplyChannels', key: 'supplyChannels' },
]

export const actionsMapBase: ActionMapBase = (diff, oldObj, newObj) => {
  return buildBaseAttributesActions({
    actions: baseActionsList,
    diff,
    oldObj,
    newObj,
  })
}
