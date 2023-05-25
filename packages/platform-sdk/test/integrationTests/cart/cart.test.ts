import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import {
  createCart,
  createCartDraftWithCustomer,
  deleteCart,
} from './cart-fixture'
import {
  createCustomer,
  createCustomerDraft,
  deleteCustomer,
} from '../customer/customer-fixture'
import {
  createCustomerGroup,
  deleteCustomerGroup,
} from '../customer-group/customer-group-fixture'
import {
  createDiscountCode,
  createDiscountCodeDraft,
  deleteDiscountCode,
} from '../discount-code/discount-code-fixture'
import {
  createCartDiscount,
  deleteCartDiscount,
} from '../cart-discount/cart-discount-fixture'
import {
  CartDiscountDraft,
  CartDiscountResourceIdentifier,
  CartDiscountShippingCostTarget,
  CartDiscountValueRelativeDraft,
  CartDraft,
  DiscountCodeDraft,
  LineItemDraft,
  ProductDraft,
} from '../../../src'
import {
  createProduct,
  createProductDraft,
  deleteProduct,
} from '../product/product-fixture'
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

describe('testing cart API calls', () => {
  // tests for queries
  it('should get a cart by Id', async () => {
    const cart = await createCart()

    const getCart = await apiRoot
      .carts()
      .withId({ ID: cart.body.id })
      .get()
      .execute()

    expect(getCart).not.toBe(null)
    expect(getCart.body.id).toEqual(cart.body.id)

    await deleteCart(cart)
  })

  it('should get a cart by key', async () => {
    const cart = await createCart()

    const getCart = await apiRoot
      .carts()
      .withKey({ key: cart.body.key })
      .get()
      .execute()

    expect(getCart).not.toBe(null)
    expect(getCart.body.key).toEqual(cart.body.key)

    await deleteCart(cart)
  })

  it('should query a cart by customer ID with predicates', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)
    const cartDraftWithCustomer = await createCartDraftWithCustomer(customer)
    const cart = await createCart(cartDraftWithCustomer)
    const queryCart = await apiRoot
      .carts()
      .get({
        queryArgs: {
          where:
            'customerId=' +
            '"' +
            customer.body.customer.id +
            '" and cartState = "Active"',
        },
      })
      .execute()
    expect(queryCart).not.toBe(null)
    expect(queryCart.body.results.at(0).id).toEqual(cart.body.id)

    const queryCart2 = await apiRoot
      .carts()
      .get({
        queryArgs: {
          where: 'customerId = :customerId and cartState = "Active"',
          customerId: customer.body.customer.id,
        },
      })
      .execute()

    expect(queryCart2).not.toBe(null)
    expect(queryCart2.body).toEqual(queryCart.body.results.at(0))

    await deleteCart(cart)
    await deleteCustomer(customer)
    await deleteCustomerGroup(customerGroup)
  })

  it('should query a cart by customer ID', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)
    const cartDraftWithCustomer = await createCartDraftWithCustomer(customer)
    const cart = await createCart(cartDraftWithCustomer)

    const getCart = await apiRoot
      .carts()
      .withCustomerId({ customerId: customer.body.customer.id })
      .get()
      .execute()
    expect(getCart).not.toBe(null)
    expect(getCart.body.id).toEqual(cart.body.id)

    await deleteCart(cart)
    await deleteCustomer(customer)
    await deleteCustomerGroup(customerGroup)
  })

  it('should expand discount code reference', async () => {
    const cartDiscountValueDraft: CartDiscountValueRelativeDraft = {
      type: 'relative',
      permyriad: 10,
    }

    const cartDiscountShippingCostTarget: CartDiscountShippingCostTarget = {
      type: 'shipping',
    }
    const cartDiscountDraft: CartDiscountDraft = {
      key: randomUUID(),
      name: { en: 'test-name-cartDiscount' + randomUUID() },
      value: cartDiscountValueDraft,
      cartPredicate: 'country="DE"',
      target: cartDiscountShippingCostTarget,
      sortOrder: '0.7041',
      isActive: true,
      requiresDiscountCode: true,
    }

    const cartDiscount = await createCartDiscount(cartDiscountDraft)
    const cartDiscountResourceIdentifier: CartDiscountResourceIdentifier[] = [
      {
        typeId: 'cart-discount',
        id: cartDiscount.body.id,
      },
    ]

    const discountCodeDraft: DiscountCodeDraft = {
      name: { en: 'test-discount-code-' + randomUUID() },
      code: randomUUID(),
      cartDiscounts: cartDiscountResourceIdentifier,
      cartPredicate: 'country="DE"',
      isActive: true,
      validFrom: new Date().toISOString(),
    }
    const discountCode = await createDiscountCode(discountCodeDraft)
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)
    const cartDraftWithCustomer = await createCartDraftWithCustomer(customer)
    const cart = await createCart(cartDraftWithCustomer)

    const updateCart = await apiRoot
      .carts()
      .withKey({ key: cart.body.key })
      .post({
        body: {
          version: cart.body.version,
          actions: [
            {
              action: 'addDiscountCode',
              code: discountCode.body.code,
            },
          ],
        },
      })
      .execute()
    expect(updateCart.body.version).not.toBe(cart.body.version)
    expect(updateCart.statusCode).toEqual(200)

    const queryCartWithExpandedDiscountCode = await apiRoot
      .carts()
      .withId({ ID: updateCart.body.id })
      .get({
        queryArgs: {
          expand: 'discountCodes[*].discountCode',
        },
      })
      .execute()

    await deleteCart(updateCart)
    await deleteCustomer(customer)
    await deleteCustomerGroup(customerGroup)
    await deleteDiscountCode(discountCode)
    await deleteCartDiscount(cartDiscount)
  })
})
