/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.commercetools.com/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */
import { executeRequest } from '../../shared/utils/common-types'
import { ByProjectKeyInStoreKeyByStoreKeyMeActiveCartRequestBuilder } from '../active-cart/by-project-key-in-store-key-by-store-key-me-active-cart-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyMeCartsRequestBuilder } from '../carts/by-project-key-in-store-key-by-store-key-me-carts-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyMeOrdersRequestBuilder } from '../orders/by-project-key-in-store-key-by-store-key-me-orders-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyMeShoppingListsRequestBuilder } from '../shopping-lists/by-project-key-in-store-key-by-store-key-me-shopping-lists-request-builder'

export class ByProjectKeyInStoreKeyByStoreKeyMeRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        storeKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *	A shopping cart holds product variants and can be ordered.
   */
  public carts(): ByProjectKeyInStoreKeyByStoreKeyMeCartsRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyMeCartsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	An order can be created from a order, usually after a checkout process has been completed.
   */
  public orders(): ByProjectKeyInStoreKeyByStoreKeyMeOrdersRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyMeOrdersRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public activeCart(): ByProjectKeyInStoreKeyByStoreKeyMeActiveCartRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyMeActiveCartRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	shopping-lists e.g. for wishlist support
   *
   */
  public shoppingLists(): ByProjectKeyInStoreKeyByStoreKeyMeShoppingListsRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyMeShoppingListsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
}
