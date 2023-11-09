import { UpdateAction } from '@commercetools/sdk-client-v2'
import { deepEqual } from 'fast-equals'
import { DeepPartial } from '../types/update-actions'
import { Price, ProductVariant } from '@commercetools/platform-sdk'
import { MapActionResult } from './create-map-action-group'

function applyOnBeforeDiff(
  before: any,
  now: any,
  fn?: (before: any, now: any) => Array<any>
) {
  return fn && typeof fn === 'function' ? fn(before, now) : [before, now]
}

const createPriceComparator = (price: Price) => ({
  value: { currencyCode: price.value.currencyCode },
  channel: price.channel,
  country: price.country,
  customerGroup: price.customerGroup,
  validFrom: price.validFrom,
  validUntil: price.validUntil,
})

function arePricesStructurallyEqual(oldPrice: Price, newPrice: Price) {
  const oldPriceComparison = createPriceComparator(oldPrice)
  const newPriceComparison = createPriceComparator(newPrice)
  return deepEqual(newPriceComparison, oldPriceComparison)
}

function extractPriceFromPreviousVariant(
  newPrice: Price,
  previousVariant?: ProductVariant
) {
  if (!previousVariant) return null
  const price = previousVariant.prices.find((oldPrice) =>
    arePricesStructurallyEqual(oldPrice, newPrice)
  )
  return price || null
}

function injectMissingPriceIds(
  nextVariants: Array<ProductVariant>,
  previousVariants: Array<ProductVariant>
) {
  return nextVariants.map((newVariant) => {
    const { prices, ...restOfVariant } = newVariant

    if (!prices) return restOfVariant
    const oldVariant = previousVariants.find(
      (previousVariant) =>
        (previousVariant.id && previousVariant.id === newVariant.id) ||
        (previousVariant.key && previousVariant.key === newVariant.key) ||
        (previousVariant.sku && previousVariant.sku === newVariant.sku)
    )

    return {
      ...restOfVariant,
      prices: prices.map((price) => {
        let newPrice: any = { ...price }
        const oldPrice = extractPriceFromPreviousVariant(price, oldVariant)

        if (oldPrice) {
          // copy ID if not provided
          if (!newPrice.id) {
            newPrice.id = oldPrice.id
          }

          if (!newPrice.value.type) {
            newPrice.value.type = oldPrice.value.type
          }

          if (!newPrice.value.fractionDigits) {
            newPrice.value.fractionDigits = oldPrice.value.fractionDigits
          }
        }

        return newPrice
      }),
    }
  })
}

export default function createBuildActions<S, T extends UpdateAction>(
  differ: any,
  doMapActions: any,
  onBeforeDiff?: (before: DeepPartial<S>, now: DeepPartial<S>) => Array<any>,
  buildActionsConfig: any = {}
) {
  return function buildActions(
    now: DeepPartial<S>,
    before: DeepPartial<S>,
    options = {}
  ): Array<T> {
    if (!now || !before)
      throw new Error(
        'Missing either `newObj` or `oldObj` ' +
          'in order to build update actions'
      )

    const [processedBefore, processedNow] = applyOnBeforeDiff(
      before,
      now,
      onBeforeDiff
    )

    if (processedNow.variants && processedBefore.variants)
      processedNow.variants = injectMissingPriceIds(
        processedNow.variants,
        processedBefore.variants
      )

    const diffed = differ(processedBefore, processedNow)
    if (!buildActionsConfig.withHints && !diffed) return []
    return doMapActions(diffed, processedNow, processedBefore, options)
  }
}
