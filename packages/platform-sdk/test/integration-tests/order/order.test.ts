import { apiRoot, type ClientResponse } from '../test-utils'
import { createOrder, deleteOrder } from './order-fixture'
import { createCategory, deleteCategory } from '../category/category-fixture'
import {
  deleteTaxCategory,
  ensureTaxCategory,
} from '../tax-category/tax-category-fixture'
import {
  deleteProductType,
  ensureProductType,
} from '../product-type/product-type-fixture'
import {
  createProduct,
  createProductDraft,
  deleteProduct,
} from '../product/product-fixture'
import { createCart, deleteCart } from '../cart/cart-fixture'
import { OrderPagedSearchResponse, OrderSearchRequest } from '../../../src'
import { ctpApiBuilder } from '../../helpers/ctp-api-helper'
import { waitForIndexing } from '../../helpers/test-utils'

describe('testing order API calls', () => {
  let category, taxCategory, productType, productDraft, product, cart, order
  it('should create an order', async () => {
    cart = await createCart()
    category = await createCategory()
    taxCategory = await ensureTaxCategory()
    productType = await ensureProductType()
    productDraft = createProductDraft(category, taxCategory, productType, true)
    product = await createProduct(productDraft)

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

    cart = updatedCartWithProduct
    order = await createOrder(cart)

    expect(order).toBeDefined()
    expect(order.body.id).toBeDefined()
  })

  it('should get an order by order number', async () => {
    const getOrder = await apiRoot
      .orders()
      .withOrderNumber({ orderNumber: order.body.orderNumber })
      .get()
      .execute()

    expect(getOrder).toBeDefined()
    expect(getOrder.body.id).toEqual(order.body.id)
  })

  it('should update an order', async () => {
    const _order = await apiRoot
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

    expect(_order.statusCode).toEqual(200)
    expect(_order.body.version).not.toEqual(order.body.version)
    order = _order
  })

  it('should search an order', async () => {
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

    const _order = order.body
    const orderSearchRequest: OrderSearchRequest = {
      query: {
        exact: {
          field: 'orderNumber',
          value: _order.orderNumber,
        },
      },
      sort: [
        {
          field: 'createdAt',
          order: 'desc',
        },
      ],
      limit: 1,
    }

    let responseOrderSearch: ClientResponse<OrderPagedSearchResponse>
    const getIndexOrder = async () => {
      responseOrderSearch = await apiRoot
        .orders()
        .search()
        .post({ body: orderSearchRequest })
        .execute()

      return responseOrderSearch.body.total > 0
    }

    await waitForIndexing(getIndexOrder)
    expect(responseOrderSearch.statusCode).toEqual(200)
    expect(responseOrderSearch.body.hits.length).toEqual(1)
    expect(responseOrderSearch.body.hits[0].id).toEqual(_order.id)
  }, 35000)

  afterAll(async () => {
    await deleteOrder(order)
    await deleteProduct(product)
    await deleteProductType(productType)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)
    await deleteCart(cart)
  })
})
