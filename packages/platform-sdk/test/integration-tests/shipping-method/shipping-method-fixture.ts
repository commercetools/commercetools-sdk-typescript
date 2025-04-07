import { apiRoot } from '../test-utils'
import { _Money } from '../../../src'

export const deleteShippingMethod = async (shippingMethod) =>
  apiRoot
    .shippingMethods()
    .withId({ ID: shippingMethod.body.id })
    .delete({ queryArgs: { version: shippingMethod.body.version } })
    .execute()
