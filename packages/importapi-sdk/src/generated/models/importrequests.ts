/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { CategoryImport } from './categories'
import { ImportResourceType } from './common'
import { CustomerImport } from './customers'
import { DiscountCodeImport } from './discount-codes'
import { ImportOperationStatus } from './importoperations'
import { InventoryImport } from './inventories'
import { OrderPatchImport } from './order-patches'
import { OrderImport } from './orders'
import { PriceImport } from './prices'
import { ProductDraftImport } from './productdrafts'
import { ProductImport } from './products'
import { ProductTypeImport } from './producttypes'
import { ProductVariantImport, ProductVariantPatch } from './productvariants'
import { StandalonePriceImport } from './standalone-prices'
import { TypeImport } from './types'

/**
 *	An import request batches multiple import resources of the same import resource type for processing by an Import Container.
 *
 */
export type ImportRequest =
  | CategoryImportRequest
  | CustomerImportRequest
  | DiscountCodeImportRequest
  | InventoryImportRequest
  | OrderImportRequest
  | OrderPatchImportRequest
  | PriceImportRequest
  | ProductDraftImportRequest
  | ProductImportRequest
  | ProductTypeImportRequest
  | ProductVariantImportRequest
  | ProductVariantPatchRequest
  | StandalonePriceImportRequest
  | TypeImportRequest
export interface IImportRequest {
  /**
   *	The resource types that can be imported.
   *
   *
   */
  readonly type: ImportResourceType
}
/**
 *	The response of each resource import endpoint, such as [Import Categories](ctp:import:type:CategoryImport) and [Import ProductTypes](ctp:import:type:ProductTypeImport).
 *
 */
export interface ImportResponse {
  /**
   *	A list of the ID's and validation statuses of new [ImportOperations](#importoperation).
   *
   */
  readonly operationStatus: ImportOperationStatus[]
}
/**
 *	The request body to [import Categories](#import-categories). Contains data for [Categories](ctp:api:type:Category) to be created or updated in a Project.
 *
 */
export interface CategoryImportRequest extends IImportRequest {
  readonly type: 'category'
  /**
   *	The category import resources of this request.
   *
   *
   */
  readonly resources: CategoryImport[]
}
/**
 *	The request body to [import Products](#import-products). Contains data for [Products](ctp:api:type:Product) to be created or updated in a Project.
 *
 */
export interface ProductImportRequest extends IImportRequest {
  readonly type: 'product'
  /**
   *	The product import resources of this request.
   *
   *
   */
  readonly resources: ProductImport[]
}
/**
 *	The request body to [import ProductDrafts](#import-productdrafts). Contains data for [Products](ctp:api:type:Product) to be created or updated in a Project.
 *
 */
export interface ProductDraftImportRequest extends IImportRequest {
  readonly type: 'product-draft'
  /**
   *	The product draft import resources of this request.
   *
   *
   */
  readonly resources: ProductDraftImport[]
}
/**
 *	The request body to [import ProductTypes](#import-producttypes). Contains data for [ProductTypes](ctp:api:type:ProductType) to be created or updated in a Project.
 *
 */
export interface ProductTypeImportRequest extends IImportRequest {
  readonly type: 'product-type'
  /**
   *	The product type import resources of this request.
   *
   *
   */
  readonly resources: ProductTypeImport[]
}
/**
 *	The request body to [import ProductVariants](#import-productvariants). Contains data for [ProductVariants](ctp:api:type:ProductVariant) to be created or updated in a Project.
 *
 */
export interface ProductVariantImportRequest extends IImportRequest {
  readonly type: 'product-variant'
  /**
   *	The product variant import resources of this request.
   *
   *
   */
  readonly resources: ProductVariantImport[]
}
/**
 *	The request body to [import Embedded Prices](#import-embedded-prices). Contains data for [Embedded Prices](/../api/types#price) to be created or updated in a Project.
 *
 */
export interface PriceImportRequest extends IImportRequest {
  readonly type: 'price'
  /**
   *	The price import resources of this request.
   *
   *
   */
  readonly resources: PriceImport[]
}
/**
 *	The request body to [import Standalone Prices](#import-standalone-prices). Contains data for [Standalone Prices](ctp:api:type:StandalonePrice) to be created or updated in a Project.
 *
 */
export interface StandalonePriceImportRequest extends IImportRequest {
  readonly type: 'standalone-price'
  /**
   *	The Standalone Price import resources of this request.
   *
   *
   */
  readonly resources: StandalonePriceImport[]
}
/**
 *	The request body to [import Orders](#import-orders). Contains data for [Orders](ctp:api:type:Order) to be created in a Project.
 *
 */
export interface OrderImportRequest extends IImportRequest {
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
export interface OrderPatchImportRequest extends IImportRequest {
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
export interface ProductVariantPatchRequest extends IImportRequest {
  readonly type: 'product-variant-patch'
  /**
   *	The product variant patches of this request.
   *
   *
   */
  readonly patches: ProductVariantPatch[]
}
/**
 *	The request body to [import Customers](#import-customers). Contains data for [Customers](ctp:api:type:Customer) to be created or updated in a Project.
 *
 */
export interface CustomerImportRequest extends IImportRequest {
  readonly type: 'customer'
  /**
   *	The customer import resources of this request.
   *
   *
   */
  readonly resources: CustomerImport[]
}
/**
 *	The request body to [import Inventories](#import-inventory). Contains data for [InventoryEntries](ctp:api:type:InventoryEntry) to be created or updated in a commercetools Project.
 *
 */
export interface InventoryImportRequest extends IImportRequest {
  readonly type: 'inventory'
  /**
   *	The inventory import resources of this request.
   *
   *
   */
  readonly resources: InventoryImport[]
}
/**
 *	The request body to [import Types](#import-types). Contains data for [Types](ctp:api:type:Type) to be created or updated in a Project.
 *
 */
export interface TypeImportRequest extends IImportRequest {
  readonly type: 'type'
  /**
   *	The type import resources of this request.
   *
   *
   */
  readonly resources: TypeImport[]
}
/**
 *	The request body to [import Discount Codes](#import-discount-codes). Contains data for [Discount Codes](/../api/projects/discountCodes#discountcode) to be created or updated in a Project.
 *
 */
export interface DiscountCodeImportRequest extends IImportRequest {
  readonly type: 'discount-code'
  /**
   *	The Discount Code import resources of this request.
   *
   *
   */
  readonly resources: DiscountCodeImport[]
}
