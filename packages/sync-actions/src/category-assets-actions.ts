import createBuildArrayActions, {
  ADD_ACTIONS,
  CHANGE_ACTIONS,
  REMOVE_ACTIONS,
} from './utils/create-build-array-actions'
import {
  CategoryAddAssetAction,
  CategoryRemoveAssetAction,
} from '@commercetools/platform-sdk'
import { UpdateAction } from '@commercetools/sdk-client-v2'

function toAssetIdentifier(asset: { id?: string; key?: string }) {
  return asset.id ? { assetId: asset.id } : { assetKey: asset.key }
}

export default function actionsMapAssets(diff: any, oldObj: any, newObj: any) {
  const handler = createBuildArrayActions('assets', {
    [ADD_ACTIONS]: (newAsset): CategoryAddAssetAction => ({
      action: 'addAsset',
      asset: newAsset,
    }),
    [REMOVE_ACTIONS]: (oldAsset): CategoryRemoveAssetAction => ({
      action: 'removeAsset',
      ...toAssetIdentifier(oldAsset),
    }),
    [CHANGE_ACTIONS]: (oldAsset, newAsset): Array<UpdateAction> =>
      // here we could use more atomic update actions (e.g. changeAssetName)
      // but for now we use the simpler approach to first remove and then
      // re-add the asset - which reduces the code complexity
      {
        return [
          {
            action: 'removeAsset',
            ...toAssetIdentifier(oldAsset),
          },
          {
            action: 'addAsset',
            asset: newAsset,
          },
        ]
      },
  })

  return handler(diff, oldObj, newObj)
}
