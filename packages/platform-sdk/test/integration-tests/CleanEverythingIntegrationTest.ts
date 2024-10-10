import { Product } from '../../src'
import { apiRoot } from './test-utils'

// Generic function to handle deletion of resources
const deleteResource = async (resourceType, resourceId, version) => {
  try {
    await apiRoot[resourceType]()
      .withId({ ID: resourceId })
      .delete({ queryArgs: { version } })
      .execute()
    console.log(`Deleted ${resourceType.slice(0, -1)} with ID: ${resourceId}`)
  } catch (error) {
    console.error(
      `Error deleting ${resourceType.slice(0, -1)} with ID: ${resourceId}:`,
      error
    )
  }
}

// Function to unpublish and delete a product
const unpublishAndDeleteProduct = async (product: Product) => {
  if (product.masterData.published) {
    console.log(`Unpublishing product: ${product.id}`)
    await apiRoot
      .products()
      .withId({ ID: product.id })
      .post({
        body: {
          version: product.version,
          actions: [{ action: 'unpublish' }],
        },
      })
      .execute()
    console.log(`Product ${product.id} unpublished.`)
  }

  // Increment version after unpublish
  await deleteResource(
    'products',
    product.id,
    product.version + (product.masterData.published ? 1 : 0)
  )
}

// Function to delete all products for a specific product type
const deleteProductsForProductType = async (productTypeId: string) => {
  const products = await apiRoot
    .products()
    .get({ queryArgs: { where: `productType(id="${productTypeId}")` } })
    .execute()

  console.log(
    `Found ${products.body.results.length} products for product type ${productTypeId}...`
  )
  return Promise.all(
    products.body.results.map((product: Product) =>
      unpublishAndDeleteProduct(product)
    )
  )
}

// Function to delete all products in the system
const deleteAllProducts = async () => {
  const products = await apiRoot.products().get().execute()
  console.log(`Found ${products.body.results.length} products to delete...`)

  return Promise.all(
    products.body.results.map(async (product: Product) => {
      await unpublishAndDeleteProduct(product)
    })
  )
}

// Generic function to check if a resource is referenced by another resource and delete it if not
const safeDeleteResource = async (
  resourceType,
  resourceId,
  version,
  referenceCheckFn
) => {
  const isReferenced = await referenceCheckFn()
  if (isReferenced) {
    console.log(
      `${resourceType.slice(0, -1)} with ID: ${resourceId} is referenced. Skipping deletion.`
    )
    return
  }
  await deleteResource(resourceType, resourceId, version)
}

// Main function to delete all resources
const deleteAllResources = async () => {
  try {
    // Product Types and associated products
    const productTypes = await apiRoot.productTypes().get().execute()
    await Promise.all(
      productTypes.body.results.map(async (productType) => {
        await deleteProductsForProductType(productType.id)
      })
    )
    console.log(`Deleted ${productTypes.body.results.length} Product Types`)

    // Delete all standalone products (not tied to a product type)
    await deleteAllProducts()
    console.log('Deleted all standalone products')

    // Categories
    const categories = await apiRoot.categories().get().execute()
    await Promise.all(
      categories.body.results.map((cat) =>
        deleteResource('categories', cat.id, cat.version)
      )
    )
    console.log(`Deleted ${categories.body.results.length} Categories`)

    // Carts
    const carts = await apiRoot.carts().get().execute()
    await Promise.all(
      carts.body.results.map((cart) =>
        deleteResource('carts', cart.id, cart.version)
      )
    )
    console.log(`Deleted ${carts.body.results.length} Carts`)

    // Customers
    const customers = await apiRoot.customers().get().execute()
    await Promise.all(
      customers.body.results.map((cust) =>
        deleteResource('customers', cust.id, cust.version)
      )
    )
    console.log(`Deleted ${customers.body.results.length} Customers`)

    // Orders
    const orders = await apiRoot.orders().get().execute()
    await Promise.all(
      orders.body.results.map((order) =>
        deleteResource('orders', order.id, order.version)
      )
    )
    console.log(`Deleted ${orders.body.results.length} Orders`)

    // Tax Categories
    const taxCategories = await apiRoot.taxCategories().get().execute()
    await Promise.all(
      taxCategories.body.results.map(async (taxCategory) => {
        await safeDeleteResource(
          'taxCategories',
          taxCategory.id,
          taxCategory.version,
          async () => {
            const productsReferencingTaxCategory = await apiRoot
              .products()
              .get({
                queryArgs: { where: `taxCategory(id="${taxCategory.id}")` },
              })
              .execute()
            return productsReferencingTaxCategory.body.results.length > 0
          }
        )
      })
    )
    console.log(`Processed ${taxCategories.body.results.length} Tax Categories`)

    // Stores
    const stores = await apiRoot.stores().get().execute()
    await Promise.all(
      stores.body.results.map(async (store) => {
        await safeDeleteResource(
          'stores',
          store.id,
          store.version,
          async () => {
            const ordersReferencingStore = await apiRoot
              .orders()
              .get({
                queryArgs: { where: `store(key="${store.key}")` },
              })
              .execute()
            return ordersReferencingStore.body.results.length > 0
          }
        )
      })
    )
    console.log(`Processed ${stores.body.results.length} Stores`)

    // Customer Groups
    const customerGroups = await apiRoot.customerGroups().get().execute()
    await Promise.all(
      customerGroups.body.results.map(async (customerGroup) => {
        await safeDeleteResource(
          'customerGroups',
          customerGroup.id,
          customerGroup.version,
          async () => {
            const productsReferencingCustomerGroup = await apiRoot
              .products()
              .get({
                queryArgs: {
                  where: `masterData(current(masterVariant(prices(customerGroup(id="${customerGroup.id}"))) or variants(prices(customerGroup(id="${customerGroup.id}")))))`,
                },
              })
              .execute()
            return productsReferencingCustomerGroup.body.results.length > 0
          }
        )
      })
    )
    console.log(
      `Processed ${customerGroups.body.results.length} Customer Groups`
    )

    // Other Resources
    const otherResources = [
      'cartDiscounts',
      'productSelections',
      'subscriptions',
      'shippingMethods',
      'zones',
      'standalonePrices',
      'productDiscounts',
      'inventory',
      'reviews',
    ]
    for (const resource of otherResources) {
      const items = await apiRoot[resource]().get().execute()
      await Promise.all(
        items.body.results.map((item) =>
          deleteResource(resource, item.id, item.version)
        )
      )
      console.log(
        `Deleted ${items.body.results.length} ${resource.slice(0, -1)}s`
      )
    }
  } catch (error) {
    console.error('Error during bulk resource deletion: ', error)
  }
}

// Execute the cleanup script
deleteAllResources()
