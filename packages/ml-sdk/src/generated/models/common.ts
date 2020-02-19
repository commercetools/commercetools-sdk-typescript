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
   'cart' |
   'cart-discount' |
   'category' |
   'channel' |
   'customer' |
   'customer-group' |
   'discount-code' |
   'key-value-document' |
   'payment' |
   'product' |
   'product-type' |
   'product-discount' |
   'order' |
   'review' |
   'shopping-list' |
   'shipping-method' |
   'state' |
   'store' |
   'tax-category' |
   'type' |
   'zone' |
   'inventory-entry' |
   'order-edit';
export type Reference =
  CategoryReference |
  ProductReference
;
export interface CategoryReference {
  readonly typeId: "category";
  readonly id: string
}
export interface ProductReference {
  readonly typeId: "product";
  readonly id: string
}
/**
*	The product variant that contains the image.
*/
export interface ProductVariant {
  /**
  *	The product that contains this variant.
  */
  readonly product: ProductReference;
  /**
  *	The state of the product variant.
  */
  readonly staged: boolean;
  /**
  *	The id of the product variant.
  */
  readonly variantId: number
}