/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.vrap.io/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */

export type ReferenceTypeId =
  | 'cart'
  | 'cart-discount'
  | 'category'
  | 'channel'
  | 'customer'
  | 'customer-group'
  | 'discount-code'
  | 'key-value-document'
  | 'payment'
  | 'product'
  | 'product-type'
  | 'product-discount'
  | 'order'
  | 'review'
  | 'shopping-list'
  | 'shipping-method'
  | 'state'
  | 'store'
  | 'tax-category'
  | 'type'
  | 'zone'
  | 'inventory-entry'
  | 'order-edit'
export type Reference =
  | CategoryReference
  | ProductReference
  | ProductTypeReference
export interface CategoryReference {
  readonly typeId: 'category'
  readonly id: string
}
export interface ProductReference {
  readonly typeId: 'product'
  readonly id: string
}
export interface ProductTypeReference {
  readonly typeId: 'product-type'
  readonly id: string
}
/**
 *	The product variant that contains the image.
 */
export interface ProductVariant {
  /**
   *	The product that contains this variant.
   */
  readonly product: ProductReference
  /**
   *	The state of the product variant.
   */
  readonly staged: boolean
  /**
   *	The id of the product variant.
   */
  readonly variantId: number
}
export type TaskStatusEnum = 'PENDING' | 'SUCCESS'
/**
 *	Represents a URL path to poll to get the results of an Asynchronous Request.
 */
export interface TaskStatus {
  readonly state: TaskStatusEnum
  /**
   *	The expiry date of the result. You cannot access the result after the expiry date. Default: 1 day after the result first becomes available. This is only available when the TaskStatus state is SUCCESS.
   *
   */
  readonly expires: string
  /**
   *	The response to an asynchronous request. The type depends on the request initiated. Only populated when the status is `SUCCESS`.
   */
  readonly result: any
}
/**
 *	Represents a URL path to poll to get the results of an Asynchronous Request.
 */
export interface TaskToken {
  /**
   *	The ID for the task. Used to find the status of the task.
   */
  readonly taskId: string
  /**
   *	The URI path to poll for the status of the task.
   */
  readonly uriPath: string
}
