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

import { LocalizedString, Money } from './common'

/**
 *	Provides descriptive information specific to the resource.
 */
export type Label =
  | CustomerLabel
  | LocalizedLabel
  | OrderLabel
  | PaymentLabel
  | ProductLabel
  | ReviewLabel
  | StringLabel
export interface CustomerLabel {
  readonly type: 'CustomerLabel'
  /**
   *
   */
  readonly firstName: string
  /**
   *
   */
  readonly lastName: string
  /**
   *
   */
  readonly customerNumber: string
}
export interface LocalizedLabel {
  readonly type: 'LocalizedLabel'
  /**
   *
   */
  readonly value: LocalizedString
}
export interface OrderLabel {
  readonly type: 'OrderLabel'
  /**
   *
   */
  readonly customerEmail: string
  /**
   *
   */
  readonly orderNumber: string
}
export interface PaymentLabel {
  readonly type: 'PaymentLabel'
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly amountPlanned: Money
}
export interface ProductLabel {
  readonly type: 'ProductLabel'
  /**
   *
   */
  readonly slug: LocalizedString
  /**
   *
   */
  readonly name: LocalizedString
}
export interface ReviewLabel {
  readonly type: 'ReviewLabel'
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly title: string
}
export interface StringLabel {
  readonly type: 'StringLabel'
  /**
   *
   */
  readonly value: string
}
