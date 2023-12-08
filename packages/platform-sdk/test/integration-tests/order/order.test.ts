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
import { _OrderSearchQuery, CartDraft, OrderSearchRequest } from '../../../src'
import { ctpApiBuilder } from '../../helpers/ctp-api-helper'
import { randomUUID } from 'crypto'
import { waitUntil } from '../../helpers/test-utils'

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
    const updatedCartWithProduct = await apiRoot
      .carts()
      .withId({ ID: cart.body.id })
      .post({
        body: {
          version: cart.body.version,
          actions: [
            {
              action: 'addLineItem',
              sku: product.body.masterData.current.masterVariant.sku,
            },
          ],
        },
      })
      .execute()

    const order = await createOrder(updatedCartWithProduct)

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
    const updatedCartWithProduct = await apiRoot
      .carts()
      .withId({ ID: cart.body.id })
      .post({
        body: {
          version: cart.body.version,
          actions: [
            {
              action: 'addLineItem',
              sku: product.body.masterData.current.masterVariant.sku,
            },
          ],
        },
      })
      .execute()

    const order = await createOrder(updatedCartWithProduct)

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
    const updatedCartWithProduct = await apiRoot
      .carts()
      .withId({ ID: cart.body.id })
      .post({
        body: {
          version: cart.body.version,
          actions: [
            {
              action: 'addLineItem',
              sku: product.body.masterData.current.masterVariant.sku,
            },
          ],
        },
      })
      .execute()

    const order = await createOrder(updatedCartWithProduct)

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

  it('should search a order', async () => {
    let project = await ctpApiBuilder.get().execute()

    if (project.body.searchIndexing.orders.status === 'Deactivated') {
      await ctpApiBuilder
        .post({
          body: {
            version: project.body.version,
            actions: [
              {
                action: 'changeOrderSearchStatus',
                status: 'Activated',
              },
            ],
          },
        })
        .execute()
    }

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
    const updatedCartWithProduct = await apiRoot
      .carts()
      .withId({ ID: cart.body.id })
      .post({
        body: {
          version: cart.body.version,
          actions: [
            {
              action: 'addLineItem',
              sku: product.body.masterData.current.masterVariant.sku,
            },
          ],
        },
      })
      .execute()

    const responseOrder = await createOrder(updatedCartWithProduct)
    const order = responseOrder.body

    const orderSearchRequest: OrderSearchRequest = {
      query: {
        exact: {
          field: 'orderNumber',
          value: order.orderNumber,
        },
      },
      sort: [
        {
          field: 'createdAt',
          order: 'desc',
        },
      ],
      limit: 20,
    }

    await waitUntil(async () => {
      const responseOrderSearch = await apiRoot
        .orders()
        .search()
        .post({ body: orderSearchRequest })
        .execute()
      return responseOrderSearch.body.total > 0
    })

    const responseOrderSearch = await apiRoot
      .orders()
      .search()
      .post({ body: orderSearchRequest })
      .execute()

    expect(responseOrderSearch.statusCode).toEqual(200)
    expect(responseOrderSearch.body.hits.length).toEqual(1)
    expect(responseOrderSearch.body.hits[0].id).toEqual(order.id)

    await deleteOrder(responseOrder)
    const getCart = await apiRoot
      .carts()
      .withId({ ID: order.cart.id })
      .get()
      .execute()
    await deleteCart(getCart)
    await deleteProduct(product)
    await deleteProductType(productType)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)
  }, 50_000)
})
