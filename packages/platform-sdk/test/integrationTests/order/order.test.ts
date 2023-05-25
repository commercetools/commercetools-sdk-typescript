import { apiRoot } from '../test-utils'
import { createOrder, deleteOrder } from './order-fixture'
import { createCategory, deleteCategory } from '../category/category-fixture'
import {
  createTaxCategory,
  deleteTaxCategory,
} from '../tax-category/tax-category-fixture'
import {
  createProductType,
  deleteProductType,
  productTypeDraftForProduct,
} from '../product-type/product-type-fixture'
import {
  createProduct,
  createProductDraft,
  deleteProduct,
} from '../product/product-fixture'
import { createCart, deleteCart } from '../cart/cart-fixture'

describe('testing order API calls', () => {
  it('should get a order by Id', async () => {
    const category = await createCategory()
    const taxCategory = await createTaxCategory()
    const productType = await createProductType(productTypeDraftForProduct)
    const productDraft = await createProductDraft(
      category,
      taxCategory,
      productType,
      true
    )
    const product = await createProduct(productDraft)
    const cart = await createCart()
    const order = await createOrder(cart, product)

    const getOrder = await apiRoot
      .orders()
      .withId({ ID: order.body.id })
      .get()
      .execute()

    expect(getOrder).not.toBe(null)
    expect(getOrder.body.id).toEqual(order.body.id)

    await deleteOrder(order)
    const getCart = await apiRoot
      .carts()
      .withId({ ID: order.body.cart.id })
      .get()
      .execute()
    await deleteCart(getCart)
    await deleteProduct(product)
    await deleteProductType(productType)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)
  })

  it('should get a order by order number', async () => {
    const category = await createCategory()
    const taxCategory = await createTaxCategory()
    const productType = await createProductType(productTypeDraftForProduct)
    const productDraft = await createProductDraft(
      category,
      taxCategory,
      productType,
      true
    )
    const product = await createProduct(productDraft)
    const cart = await createCart()
    const order = await createOrder(cart, product)

    const getOrder = await apiRoot
      .orders()
      .withOrderNumber({ orderNumber: order.body.orderNumber })
      .get()
      .execute()

    expect(getOrder).not.toBe(null)
    expect(getOrder.body.id).toEqual(order.body.id)

    await deleteOrder(order)
    const getCart = await apiRoot
      .carts()
      .withId({ ID: order.body.cart.id })
      .get()
      .execute()
    await deleteCart(getCart)
    await deleteProduct(product)
    await deleteProductType(productType)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)
  })

  it('should update a order', async () => {
    const category = await createCategory()
    const taxCategory = await createTaxCategory()
    const productType = await createProductType(productTypeDraftForProduct)
    const productDraft = await createProductDraft(
      category,
      taxCategory,
      productType,
      true
    )
    const product = await createProduct(productDraft)
    const cart = await createCart()
    const order = await createOrder(cart, product)

    const updateOrder = await apiRoot
      .orders()
      .withId({ ID: order.body.id })
      .post({
        body: {
          version: order.body.version,
          actions: [
            {
              action: 'setBillingAddress',
              address: {
                country: 'DE',
                state: 'Berlin',
              },
            },
            {
              action: 'changeOrderState',
              orderState: 'Confirmed',
            },
          ],
        },
      })
      .execute()
    expect(updateOrder.body.version).not.toBe(order.body.version)
    expect(updateOrder.statusCode).toEqual(200)

    await deleteOrder(updateOrder)
    const getCart = await apiRoot
      .carts()
      .withId({ ID: updateOrder.body.cart.id })
      .get()
      .execute()
    await deleteCart(getCart)
    await deleteProduct(product)
    await deleteProductType(productType)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)
  })
})
