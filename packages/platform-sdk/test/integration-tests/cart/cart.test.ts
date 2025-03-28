import { randomUUID } from 'crypto'
import { apiRoot, SORT_ORDER } from '../test-utils'
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
  deleteDiscountCode,
} from '../discount-code/discount-code-fixture'
import {
  createCartDiscount,
  deleteCartDiscount,
} from '../cart-discount/cart-discount-fixture'
import {
  _Money,
  BaseAddress,
  CartDiscountDraft,
  CartDiscountResourceIdentifier,
  CartDiscountShippingCostTarget,
  CartDiscountValueRelativeDraft,
  CartDraft,
  CustomLineItemDraft,
  DiscountCodeDraft,
  FieldContainer,
  LineItemDraft,
  TaxCategoryResourceIdentifier,
  TypeResourceIdentifier,
} from '../../../src'

import { createType, deleteType } from '../type/type-fixture'
import { createCategory, deleteCategory } from '../category/category-fixture'
import {
  deleteTaxCategory,
  ensureTaxCategory,
} from '../tax-category/tax-category-fixture'
import {
  ensureProductType,
  productTypeDraftForProduct,
} from '../product-type/product-type-fixture'
import {
  createProduct,
  createProductDraft,
  deleteProduct,
} from '../product/product-fixture'

describe('testing cart API calls', () => {
  let category,
    taxCategory,
    productType,
    product1,
    product2,
    cart1,
    cart2,
    cart3,
    cart4,
    cart5,
    customerGroup,
    customer,
    type,
    discountCode,
    cartDiscount

  it('should create a cart with multiple item shipping address', async () => {
    const addresses: BaseAddress[] = [
      {
        country: 'DE',
        key: randomUUID(),
      },
      {
        country: 'FR',
        key: randomUUID(),
      },
      {
        country: 'IT',
        key: randomUUID(),
      },
    ]

    const cartDraft: CartDraft = {
      key: 'test-cart-key-' + randomUUID(),
      itemShippingAddresses: addresses,
      currency: 'EUR',
      country: 'DE',
    }

    cart1 = await createCart(cartDraft)

    expect(cart1.body.id).toBeDefined()
    expect(Object.keys(cart1.body.itemShippingAddresses)).toHaveLength(3)
  })

  it('should create a cart with line items', async () => {
    category = await createCategory()
    taxCategory = await ensureTaxCategory()
    productType = await ensureProductType(productTypeDraftForProduct)

    //Published product
    const productDraft1 = createProductDraft(
      category,
      taxCategory,
      productType,
      true
    )
    const productDraft2 = createProductDraft(
      category,
      taxCategory,
      productType,
      true
    )

    product1 = await createProduct(productDraft1)
    product2 = await createProduct(productDraft2)

    const lineItemDraft: LineItemDraft[] = [
      {
        sku: product1.body.masterData.current.masterVariant.sku,
      },
      {
        sku: product2.body.masterData.current.masterVariant.sku,
      },
    ]

    const cartDraft: CartDraft = {
      currency: 'EUR',
      country: 'DE',
      lineItems: lineItemDraft,
    }

    cart2 = await createCart(cartDraft)

    expect(cart2.body.id).toBeDefined()
    expect(cart2.body.lineItems).toHaveLength(2)
  })

  it('should create a cart with custom line items', async () => {
    const taxCategory = await ensureTaxCategory()

    const taxCategoryResourceIdentifier: TaxCategoryResourceIdentifier = {
      typeId: 'tax-category',
      id: taxCategory.body.id,
    }

    const money: _Money = {
      centAmount: 1000,
      currencyCode: 'EUR',
    }

    const customLineItemDraft: CustomLineItemDraft[] = [
      {
        name: { en: 'test' },
        quantity: 1,
        taxCategory: taxCategoryResourceIdentifier,
        money,
        slug: 'test-slug',
        priceMode: 'Standard',
      },
    ]

    const cartDraft: CartDraft = {
      currency: 'EUR',
      country: 'DE',
      customLineItems: customLineItemDraft,
    }

    cart3 = await createCart(cartDraft)
    expect(cart3.body.id).toBeDefined()
    expect(cart3.body.customLineItems).toHaveLength(1)
  })

  // query
  it('should get a cart by Id', async () => {
    const getCart = await apiRoot
      .carts()
      .withId({ ID: cart1.body.id })
      .get()
      .execute()

    expect(getCart).toBeDefined()
    expect(getCart.body.id).toEqual(cart1.body.id)
  })

  it('should get a cart by key', async () => {
    const getCart = await apiRoot
      .carts()
      .withKey({ key: cart1.body.key })
      .get()
      .execute()

    expect(getCart).toBeDefined()
    expect(getCart.body.key).toEqual(cart1.body.key)
  })

  it('should query a cart by customer ID with predicates', async () => {
    customerGroup = await createCustomerGroup()
    const customerDraft = createCustomerDraft(customerGroup)
    customer = await createCustomer(customerDraft)
    const cartDraftWithCustomer = createCartDraftWithCustomer(customer)
    cart4 = await createCart(cartDraftWithCustomer)
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

    expect(queryCart).toBeDefined()
    expect(queryCart.body.results[0].id).toEqual(cart4.body.id)

    const queryCart2 = await apiRoot
      .carts()
      .get({
        queryArgs: {
          where: 'customerId = :customerId and cartState = "Active"',
          customerId: customer.body.customer.id,
        },
      })
      .execute()

    expect(queryCart2).toBeDefined()
    expect(queryCart2.body).toEqual(queryCart.body.results[0])
  })

  it('should query a cart by customer ID', async () => {
    const getCart = await apiRoot
      .carts()
      .withCustomerId({ customerId: customer.body.customer.id })
      .get()
      .execute()
    expect(getCart).toBeDefined()
    expect(getCart.body.id).toEqual(cart4.body.id)
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
      sortOrder: SORT_ORDER,
      isActive: true,
      requiresDiscountCode: true,
    }

    cartDiscount = await createCartDiscount(cartDiscountDraft)
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

    discountCode = await createDiscountCode(discountCodeDraft)
    const cartDraftWithCustomer = createCartDraftWithCustomer(customer)
    const _cart5 = await createCart(cartDraftWithCustomer)

    const updateCart = await apiRoot
      .carts()
      .withKey({ key: _cart5.body.key })
      .post({
        body: {
          version: _cart5.body.version,
          actions: [
            {
              action: 'addDiscountCode',
              code: discountCode.body.code,
            },
          ],
        },
      })
      .execute()

    expect(updateCart.statusCode).toEqual(200)
    expect(updateCart.body.version).not.toEqual(_cart5.body.version)
    cart5 = updateCart
  })

  //update
  it('should update the cart with custom field', async () => {
    type = await createType()

    const typeResourceIdentifier: TypeResourceIdentifier = {
      typeId: 'type',
      id: type.body.id,
    }
    const fieldName: string = type.body.fieldDefinitions[0].name
    const fieldValue = 'fieldValue'
    const fieldContainer: FieldContainer = {
      [fieldName]: fieldValue,
    }

    const updateCart = await apiRoot
      .carts()
      .withKey({ key: cart1.body.key })
      .post({
        body: {
          version: cart1.body.version,
          actions: [
            {
              action: 'setCustomType',
              type: typeResourceIdentifier,
              fields: fieldContainer,
            },
          ],
        },
      })
      .execute()
    expect(updateCart.body.version).not.toBe(cart1.body.version)
    expect(updateCart.statusCode).toEqual(200)
    cart1 = updateCart
  })

  it('should update the cart adding item shipping address', async () => {
    const address1: BaseAddress = {
      country: 'DE',
      key: randomUUID(),
    }

    const updateCart = await apiRoot
      .carts()
      .withKey({ key: cart1.body.key })
      .post({
        body: {
          version: cart1.body.version,
          actions: [
            {
              action: 'addItemShippingAddress',
              address: address1,
            },
          ],
        },
      })
      .execute()

    expect(updateCart.statusCode).toEqual(200)
    expect(updateCart.body.version).not.toEqual(cart1.body.version)
    expect(Object.keys(updateCart.body.itemShippingAddresses)).toHaveLength(4)
    cart1 = updateCart
  })

  afterAll(async () => {
    /**
     * the order in which these resource
     * are being deleted is important
     */
    await deleteProduct(product1)
    await deleteProduct(product2)

    await deleteCart(cart1)
    await deleteCart(cart2)
    await deleteCart(cart3)
    await deleteCart(cart4)
    await deleteCart(cart5)

    await deleteCategory(category)
    await deleteTaxCategory(taxCategory)

    await deleteCustomer(customer)
    await deleteCustomerGroup(customerGroup)

    await deleteType(type)
    await deleteDiscountCode(discountCode)
    await deleteCartDiscount(cartDiscount)
  })
})
