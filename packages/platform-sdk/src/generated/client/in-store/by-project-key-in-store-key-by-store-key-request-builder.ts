/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { executeRequest } from '../../shared/utils/common-types'
import { ByProjectKeyInStoreKeyByStoreKeyBusinessUnitsRequestBuilder } from '../business-units/by-project-key-in-store-key-by-store-key-business-units-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyCartDiscountsRequestBuilder } from '../cart-discounts/by-project-key-in-store-key-by-store-key-cart-discounts-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyCartsRequestBuilder } from '../carts/by-project-key-in-store-key-by-store-key-carts-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyCustomersRequestBuilder } from '../customers/by-project-key-in-store-key-by-store-key-customers-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyLoginRequestBuilder } from '../login/by-project-key-in-store-key-by-store-key-login-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyMeRequestBuilder } from '../me/by-project-key-in-store-key-by-store-key-me-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyOrdersRequestBuilder } from '../orders/by-project-key-in-store-key-by-store-key-orders-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyProductProjectionsRequestBuilder } from '../product-projections/by-project-key-in-store-key-by-store-key-product-projections-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyProductSelectionAssignmentsRequestBuilder } from '../product-selection-assignments/by-project-key-in-store-key-by-store-key-product-selection-assignments-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyProductTailoringRequestBuilder } from '../product-tailoring/by-project-key-in-store-key-by-store-key-product-tailoring-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyProductsRequestBuilder } from '../products/by-project-key-in-store-key-by-store-key-products-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyQuoteRequestsRequestBuilder } from '../quote-requests/by-project-key-in-store-key-by-store-key-quote-requests-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyQuotesRequestBuilder } from '../quotes/by-project-key-in-store-key-by-store-key-quotes-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyShippingMethodsRequestBuilder } from '../shipping-methods/by-project-key-in-store-key-by-store-key-shipping-methods-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyShoppingListsRequestBuilder } from '../shopping-lists/by-project-key-in-store-key-by-store-key-shopping-lists-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyStagedQuotesRequestBuilder } from '../staged-quotes/by-project-key-in-store-key-by-store-key-staged-quotes-request-builder'
/**
 **/
export class ByProjectKeyInStoreKeyByStoreKeyRequestBuilder {
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
  public carts(): ByProjectKeyInStoreKeyByStoreKeyCartsRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCartsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	An order can be created from a cart, usually after a checkout process has been completed.
   */
  public orders(): ByProjectKeyInStoreKeyByStoreKeyOrdersRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyOrdersRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public me(): ByProjectKeyInStoreKeyByStoreKeyMeRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyMeRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	A Customer is a person purchasing products. Carts, Orders,
   *	Comments and Reviews can be associated to a Customer.
   *
   */
  public customers(): ByProjectKeyInStoreKeyByStoreKeyCustomersRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCustomersRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	Retrieves the authenticated customer.
   */
  public login(): ByProjectKeyInStoreKeyByStoreKeyLoginRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyLoginRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public shippingMethods(): ByProjectKeyInStoreKeyByStoreKeyShippingMethodsRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyShippingMethodsRequestBuilder({
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
  public shoppingLists(): ByProjectKeyInStoreKeyByStoreKeyShoppingListsRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyShoppingListsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public productProjections(): ByProjectKeyInStoreKeyByStoreKeyProductProjectionsRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyProductProjectionsRequestBuilder(
      {
        pathArgs: {
          ...this.args.pathArgs,
        },
        executeRequest: this.args.executeRequest,
        baseUri: this.args.baseUri,
      }
    )
  }
  public productSelectionAssignments(): ByProjectKeyInStoreKeyByStoreKeyProductSelectionAssignmentsRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyProductSelectionAssignmentsRequestBuilder(
      {
        pathArgs: {
          ...this.args.pathArgs,
        },
        executeRequest: this.args.executeRequest,
        baseUri: this.args.baseUri,
      }
    )
  }
  public cartDiscounts(): ByProjectKeyInStoreKeyByStoreKeyCartDiscountsRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCartDiscountsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	A Product Tailoring holds tailored data of Product in the Store.
   */
  public productTailoring(): ByProjectKeyInStoreKeyByStoreKeyProductTailoringRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyProductTailoringRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public products(): ByProjectKeyInStoreKeyByStoreKeyProductsRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyProductsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	A request for a Quote holds product variants and can be ordered.
   */
  public quoteRequests(): ByProjectKeyInStoreKeyByStoreKeyQuoteRequestsRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyQuoteRequestsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	A staged quote holds the negotiation between the [Buyer](/../api/quotes-overview#buyer) and the [Seller](/../api/quotes-overview#seller).
   */
  public stagedQuotes(): ByProjectKeyInStoreKeyByStoreKeyStagedQuotesRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyStagedQuotesRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	A quote holds the negotiated offer.
   */
  public quotes(): ByProjectKeyInStoreKeyByStoreKeyQuotesRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyQuotesRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	A Business Unit can represent a Company or a Division.
   */
  public businessUnits(): ByProjectKeyInStoreKeyByStoreKeyBusinessUnitsRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyBusinessUnitsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
}
