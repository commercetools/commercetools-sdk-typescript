/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.commercetools.com/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */

import { CategoryImport } from './categories'
import { CustomerImport } from './customers'
import { ImportOperationStatus } from './importoperations'
import { InventoryImport } from './inventories'
import { OrderPatchImport } from './order-patches'
import { OrderImport } from './orders'
import { PriceImport } from './prices'
import { ProductDraftImport } from './productdrafts'
import { ProductImport } from './products'
import { ProductTypeImport } from './producttypes'
import { ProductVariantImport, ProductVariantPatch } from './productvariants'

/**
 *	An import request batches multiple import resources of the same import resource type for processing by an import sink.
 *
 */
export type ImportRequest =
  | CategoryImportRequest
  | CustomerImportRequest
  | InventoryImportRequest
  | OrderImportRequest
  | OrderPatchImportRequest
  | PriceImportRequest
  | ProductDraftImportRequest
  | ProductImportRequest
  | ProductTypeImportRequest
  | ProductVariantImportRequest
  | ProductVariantPatchRequest
/**
 *	A list of the ID's and validation statuses of newly created [ImportOperations](#importoperation).
 *	Used as a response at each resource-specific import endpoint, for example, at [Import Categories](/category#import-categories) and [Import ProductTypes](/product-type#import-producttypes).
 *
 */
export interface ImportResponse {
  /**
   *
   */
  readonly operationStatus: ImportOperationStatus[]
}
/**
 *	The request body to [import Categories](#import-categories). Contains data for [Categories](/../api/projects/categories#category) to be created or updated in a commercetools Project.
 *
 */
export interface CategoryImportRequest {
  readonly type: 'category'
  /**
   *	The category import resources of this request.
   *
   *
   */
  readonly resources: CategoryImport[]
}
/**
 *	The request body to [import Products](#import-products). Contains data for [Products](/../api/projects/products#product) to be created or updated in a commercetools Project.
 *
 */
export interface ProductImportRequest {
  readonly type: 'product'
  /**
   *	The product import resources of this request.
   *
   *
   */
  readonly resources: ProductImport[]
}
/**
 *	The request body to [import ProductDrafts](#import-productdrafts). Contains data for [Products](/../api/projects/products#productdraft) to be created or updated in a commercetools Project.
 *
 */
export interface ProductDraftImportRequest {
  readonly type: 'product-draft'
  /**
   *	The product draft import resources of this request.
   *
   *
   */
  readonly resources: ProductDraftImport[]
}
/**
 *	The request body to [import ProductTypes](#import-producttypes). Contains data for [ProductTypes](/../api/projects/productTypes#producttype) to be created or updated in a commercetools Project.
 *
 */
export interface ProductTypeImportRequest {
  readonly type: 'product-type'
  /**
   *	The product type import resources of this request.
   *
   *
   */
  readonly resources: ProductTypeImport[]
}
/**
 *	The request body to [import ProductVariants](#import-productvariants). Contains data for [ProductVariants](/../api/projects/products#productvariant) to be created or updated in a commercetools Project.
 *
 */
export interface ProductVariantImportRequest {
  readonly type: 'product-variant'
  /**
   *	The product variant import resources of this request.
   *
   *
   */
  readonly resources: ProductVariantImport[]
}
/**
 *	The request body to [import Prices](#import-prices). Contains data for [Prices](/../api/projects/products#price) to be created or updated in a commercetools Project.
 *
 */
export interface PriceImportRequest {
  readonly type: 'price'
  /**
   *	The price import resources of this request.
   *
   *
   */
  readonly resources: PriceImport[]
}
/**
 *	The request body to [import Orders](#import-orders). Contains data for [Orders](/../api/projects/orders#order) to be created or updated in a commercetools Project.
 *
 */
export interface OrderImportRequest {
  readonly type: 'order'
  /**
   *	The order import resources of this request.
   *
   *
   */
  readonly resources: OrderImport[]
}
/**
 *	The request body to [import OrderPatches](#import-orderpatches). The data to be imported are represented by [OrderPatchImport](#orderpatchimport).
 *
 */
export interface OrderPatchImportRequest {
  readonly type: 'order-patch'
  /**
   *	The order patches of this request
   *
   *
   */
  readonly patches: OrderPatchImport[]
}
/**
 *	The request body to [import ProductVariantPatches](#import-productvariantpatches). The data to be imported are represented by [ProductVariantPatch](#productvariantpatch).
 *
 */
export interface ProductVariantPatchRequest {
  readonly type: 'product-variant-patch'
  /**
   *	The product variant patches of this request.
   *
   *
   */
  readonly patches: ProductVariantPatch[]
}
/**
 *	The request body to [import Customers](#import-customers). Contains data for [Customers](/../api/projects/customers#customer) to be created or updated in a commercetools Project.
 *
 */
export interface CustomerImportRequest {
  readonly type: 'customer'
  /**
   *	The customer import resources of this request.
   *
   *
   */
  readonly resources: CustomerImport[]
}
/**
 *	The request body to [import Inventories](#import-inventories). Contains data for [Inventories](/../api//projects/inventory#inventoryentry) to be created or updated in a commercetools Project.
 *
 */
export interface InventoryImportRequest {
  readonly type: 'inventory'
  /**
   *	The inventory import resources of this request.
   *
   *
   */
  readonly resources: InventoryImport[]
}
