import { StandalonePrice, StandalonePriceDraft } from '../../../src'
import { apiRoot, ClientResponse } from '../test-utils'
import { randomString } from '../test-utils'

export class StandalonePricesFixtures {
  static defaultStandaloneDraft(
    draft: Partial<StandalonePriceDraft> = {}
  ): StandalonePriceDraft {
    const randomStr = randomString()

    return {
      sku: draft.sku ?? `standalone-sku-${randomStr}`,
      value: {
        currencyCode: draft.value?.currencyCode ?? 'EUR',
        centAmount: draft.value?.centAmount ?? 1000,
      },
    }
  }

  static defaultStandaloneDraftWithKey(
    draft: Partial<StandalonePriceDraft>,
    key: string
  ): StandalonePriceDraft {
    return Object.assign({}, this.defaultStandaloneDraft(draft), { key })
  }

  static async createStandalonePrice(
    draft: StandalonePriceDraft
  ): Promise<ClientResponse<StandalonePrice>> {
    return apiRoot.standalonePrices().post({ body: draft }).execute()
  }

  static async deleteStandalonePrice(
    standalonePriceObject: ClientResponse<StandalonePrice>
  ): Promise<void> {
    const removeResource = async (version: number) =>
      apiRoot
        .standalonePrices()
        .withId({ ID: standalonePriceObject.body!.id })
        .delete({ queryArgs: { version } })
        .execute()

    try {
      const version = standalonePriceObject.body?.version
      await removeResource(version!)
    } catch (e) {
      /* istanbul ignore next */
      if (e.statusCode == 409) {
        const version = e.error.errors[0].currentVersion
        await removeResource(version)
      }
    }
  }

  static async withStandalonePrice(
    draftFn: (draft: StandalonePriceDraft) => StandalonePriceDraft,
    fn: (
      standalonePrice: ClientResponse<StandalonePrice>
    ) => void | Promise<void>
  ) {
    const draft = draftFn(this.defaultStandaloneDraft())
    const standalonePrice = await this.createStandalonePrice(draft)

    try {
      await fn(standalonePrice)
    } finally {
      await this.deleteStandalonePrice(standalonePrice)
    }
  }
}
