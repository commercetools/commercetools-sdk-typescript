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
 *	The import response contains an import operation for each import resource sent with an import request. Use it for tracking the progress of imports to a commercetools project.
 *
 *	This is a generic parent type. In practice, send a specific import request type (`CategoryImportRequest`, `OrderImportRequest`, etc.) to an import sink with a matching import type.
 *
 */
export interface ImportResponse {
  /**
   *
   */
  readonly operationStatus: ImportOperationStatus[]
}
/**
 *	An import request for multiple category import resources.
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
 *	An import request for multiple product import resources.
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
 *	An import request for multiple product draft import resources.
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
 *	An import request for multiple product type import resources.
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
 *	An import request for multiple product variant import resources.
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
 *	An import request for multiple price import resources.
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
 *	An import request for multiple order import resources.
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
 *	An import request for multiple order patch resources.
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
 *	An import request for multiple product variant patch resources.
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
 *	An import request for multiple customer import resources.
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
 *	An import request for multiple inventory import resources.
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
