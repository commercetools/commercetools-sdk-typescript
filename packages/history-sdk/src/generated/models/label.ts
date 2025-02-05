/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { LocalizedString, Money, Reference } from './common'

/**
 *	Provides descriptive information specific to the resource.
 */
export type Label =
  | AssociateRoleLabel
  | BusinessUnitLabel
  | CustomObjectLabel
  | CustomerLabel
  | LocalizedLabel
  | OrderLabel
  | PaymentLabel
  | ProductLabel
  | QuoteLabel
  | QuoteRequestLabel
  | ReviewLabel
  | StagedQuoteLabel
  | StringLabel
export interface ILabel {
  /**
   *
   */
  readonly type: string
}
export interface AssociateRoleLabel extends ILabel {
  readonly type: 'AssociateRoleLabel'
  /**
   *	User-defined unique identifier of the [Associate Role](ctp:api:type:AssociateRole).
   *
   */
  readonly key: string
  /**
   *	Name of the Associate Role.
   *
   */
  readonly name: string
}
export interface BusinessUnitLabel extends ILabel {
  readonly type: 'BusinessUnitLabel'
  /**
   *	User-defined unique identifier of the [Business Unit](ctp:api:type:BusinessUnit).
   *
   */
  readonly key: string
  /**
   *	Name of the Business Unit.
   *
   */
  readonly name: string
}
export interface CustomObjectLabel extends ILabel {
  readonly type: 'CustomObjectLabel'
  /**
   *	User-defined unique identifier of the CustomObject within the defined `container`.
   *
   *
   */
  readonly key: string
  /**
   *	Namespace to group Custom Objects.
   *
   *
   */
  readonly container: string
}
export interface CustomerLabel extends ILabel {
  readonly type: 'CustomerLabel'
  /**
   *	Given name (first name) of the Customer.
   *
   *
   */
  readonly firstName: string
  /**
   *	Family name (last name) of the Customer.
   *
   *
   */
  readonly lastName: string
  /**
   *	User-defined unique identifier of the [Customer](ctp:api:type:Customer).
   *
   *
   */
  readonly customerNumber: string
}
export interface LocalizedLabel extends ILabel {
  readonly type: 'LocalizedLabel'
  /**
   *	Changed value.
   *
   *
   */
  readonly value: LocalizedString
}
export interface OrderLabel extends ILabel {
  readonly type: 'OrderLabel'
  /**
   *	Email address of the Customer that the Order belongs to.
   *
   *
   */
  readonly customerEmail: string
  /**
   *	User-defined unique identifier of the Order that is unique across a Project.
   *
   *
   */
  readonly orderNumber: string
}
export interface PaymentLabel extends ILabel {
  readonly type: 'PaymentLabel'
  /**
   *	User-defined unique identifier of the Payment.
   *
   *
   */
  readonly key: string
  /**
   *	Money value the Payment intends to receive from the Customer.
   *
   *
   */
  readonly amountPlanned: Money
}
export interface ProductLabel extends ILabel {
  readonly type: 'ProductLabel'
  /**
   *	User-defined identifier used in a deep-link URL for the Product.
   *
   *
   */
  readonly slug: LocalizedString
  /**
   *	Name of the Product.
   *
   *
   */
  readonly name: LocalizedString
}
export interface QuoteLabel extends ILabel {
  readonly type: 'QuoteLabel'
  /**
   *	User-defined unique identifier of the Quote.
   *
   *
   */
  readonly key: string
  /**
   *	The [Buyer](/../api/quotes-overview#buyer) who requested the Quote.
   *
   *
   */
  readonly customer: Reference
  /**
   *	Staged Quote related to the Quote.
   *
   *
   */
  readonly stagedQuote: Reference
  /**
   *	Quote Request related to the Quote.
   *
   *
   */
  readonly quoteRequest: Reference
}
export interface QuoteRequestLabel extends ILabel {
  readonly type: 'QuoteRequestLabel'
  /**
   *	User-defined unique identifier of the Quote Request.
   *
   *
   */
  readonly key: string
  /**
   *	The [Buyer](/../api/quotes-overview#buyer) who raised the Quote Request.
   *
   *
   */
  readonly customer: Reference
}
export interface ReviewLabel extends ILabel {
  readonly type: 'ReviewLabel'
  /**
   *	User-defined unique identifier of the Review.
   *
   *
   */
  readonly key: string
  /**
   *	Title of the Review.
   *
   *
   */
  readonly title: string
}
export interface StagedQuoteLabel extends ILabel {
  readonly type: 'StagedQuoteLabel'
  /**
   *	User-defined unique identifier of the Staged Quote.
   *
   *
   */
  readonly key: string
  /**
   *	The [Buyer](/../api/quotes-overview#buyer) who requested the Quote.
   *
   *
   */
  readonly customer: Reference
  /**
   *	Quote Request related to the Staged Quote.
   *
   *
   */
  readonly quoteRequest: Reference
}
export interface StringLabel extends ILabel {
  readonly type: 'StringLabel'
  /**
   *	Changed value.
   *
   *
   */
  readonly value: string
}
