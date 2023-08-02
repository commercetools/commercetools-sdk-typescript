const { randomUUID } = require('crypto')

class CartDiscountService {
  constructor({ apiRoot }) {
    this.apiRoot = apiRoot
    this.SORT_ORDER = '0.65141'
  }

  createCartDiscountDraft(cartDiscountDraft) {
    const {
      key = randomUUID(),
      name = { en: 'test-name-cartDiscount' + randomUUID() },
      value = { type: 'relative', permyriad: 10 },
      cartPredicate = 'country="DE"',
      target = { type: 'shipping' },
      sortOrder = this.SORT_ORDER,
      requiresDiscountCode = true,
      isActive = false,
    } = cartDiscountDraft

    return {
      key,
      name,
      value,
      cartPredicate,
      target,
      sortOrder,
      requiresDiscountCode,
      isActive,
    }
  }

  async createCartDiscount(cartDiscountDraft) {
    // TODO: try to get cartDiscount if exist else create new one
    return this.apiRoot
      .cartDiscounts()
      .post({ body: this.createCartDiscountDraft(cartDiscountDraft) })
      .execute()
      .catch((err) => err)
  }

  async getCartDiscount(ID) {
    return this.apiRoot
      .cartDiscounts()
      .withId({ ID })
      .get()
      .execute()
      .catch((err) => err)
  }
}

module.exports = CartDiscountService
