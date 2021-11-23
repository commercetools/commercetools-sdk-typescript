import { ApiRoot } from '@commercetools/platform-sdk'

interface ICart {
  apiRoot: ApiRoot
  projectKey: string
  createCartForCurrentCustomer(cartDraft: CartDraft): object
  getActiveCart(): object
}

type CartDraft = {
  currency: string
  customerEmail?: string
}

type MyCartUpdate = {
  version: number
  actions: Array<MyCartUpdateAction>
}

type MyCartUpdateAction = {
  readonly action: 'addLineItem'
  readonly productId?: string
  readonly variantId?: number
  readonly quantity?: number
}

type MyCartRemoveItem = {
  version: number
  actions: Array<MyCartRemoveLineItemAction>
}

type MyCartRemoveLineItemAction = {
  readonly action: 'removeLineItem'
  readonly lineItemId: string
  readonly quantity?: number
}

type CartUpdateDraft = {
  version: number
  productId: string
  variantId: number
  quantity: number
}

type CartRemoveItemDraft = {
  version: number
  lineItemId: string
  quantity: number
}

class Cart implements ICart {
  apiRoot: ApiRoot
  projectKey: string
  constructor({ apiRoot, projectKey }) {
    this.apiRoot = apiRoot
    this.projectKey = projectKey
  }

  private createCustomerCartDraft(cartData) {
    const { currency, customerEmail } = cartData

    return {
      currency,
      customerEmail,
    }
  }

  private createCartUpdateDraft(
    cartUpdateDraft: CartUpdateDraft
  ): MyCartUpdate {
    const action = 'addLineItem' // default value needed to tell the platform we are adding an item to cart
    const { version, productId, variantId, quantity } = cartUpdateDraft
    return {
      version,
      actions: [
        {
          action,
          productId,
          variantId,
          quantity,
        },
      ],
    }
  }

  private createRemoveItemDraft(
    cartRemoveItemDraft: CartRemoveItemDraft
  ): MyCartRemoveItem {
    const action = 'removeLineItem' // default value needed to tell the platform we are removing an item from the cart
    const { version, lineItemId, quantity } = cartRemoveItemDraft
    return {
      version,
      actions: [
        {
          action,
          lineItemId,
          quantity,
        },
      ],
    }
  }

  async createCartForCurrentCustomer(cartDraft: CartDraft) {
    try {
      const cart = await this.apiRoot
        .withProjectKey({ projectKey: this.projectKey })
        .me()
        .carts()
        .post({
          body: this.createCustomerCartDraft(cartDraft),
        })
        .execute()

      return cart
    } catch (error) {
      return error
    }
  }

  async getActiveCart() {
    try {
      const activeCart = await this.apiRoot
        .withProjectKey({ projectKey: this.projectKey })
        .me()
        .activeCart()
        .get()
        .execute()

      return activeCart
    } catch (error) {
      return error
    }
  }

  async updateActiveCart(productDetails) {
    const { cartId, cartUpdateDraft } = productDetails
    try {
      const updatedCart = await this.apiRoot
        .withProjectKey({ projectKey: this.projectKey })
        .me()
        .carts()
        .withId({ ID: cartId })
        .post({ body: this.createCartUpdateDraft(cartUpdateDraft) })
        .execute()

      return updatedCart
    } catch (error) {
      return error
    }
  }

  async removeLineItem(productDetails) {
    try {
      const { body } = await this.getActiveCart()

      const updatedCart = await this.apiRoot
        .withProjectKey({ projectKey: this.projectKey })
        .me()
        .carts()
        .withId({ ID: body.id })
        .post({ body: this.createRemoveItemDraft(productDetails) })
        .execute()

      return updatedCart
    } catch (error) {
      return error
    }
  }
}

export default Cart
