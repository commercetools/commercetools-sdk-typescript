import { CartRepository } from '../repository'

interface ICartService {
  cartRepository: typeof CartRepository
  getActiveCart(): any
}
/**
 * @description cart service class
 */
class CartService implements ICartService {
  cartRepository: any
  constructor(CartRepository) {
    this.cartRepository = CartRepository
  }

  createCartForCurrentCustomer(cartData) {
    return this.cartRepository.createCartForCurrentCustomer(cartData)
  }

  getActiveCart() {
    return this.cartRepository.getActiveCart()
  }

  updateActiveCart(productDetails) {
    return this.cartRepository.updateActiveCart(productDetails)
  }

  removeLineItem(productDetails) {
    return this.cartRepository.removeLineItem(productDetails)
  }
}

export default CartService
