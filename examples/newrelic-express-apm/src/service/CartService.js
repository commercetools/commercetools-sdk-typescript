class CartService {
  constructor({ apiRoot }) {
    this.apiRoot = apiRoot
  }

  _createCustomerCartDraft(cartData) {
    const { currency, customerEmail } = cartData

    return {
      currency,
      customerEmail,
    }
  }

  async createCartForCurrentCustomer(cartDraft) {
    const cart = await this.getActiveCart()
    if (cart?.statusCode === 200) return cart
    return this.apiRoot
      .me()
      .carts()
      .post({
        body: this._createCustomerCartDraft(cartDraft),
      })
      .execute()
      .catch((err) => err)
  }

  async getActiveCart() {
    return this.apiRoot
      .me()
      .activeCart()
      .get()
      .execute()
      .catch((err) => err)
  }
}

module.exports = CartService
