import { apiRoot } from '../test-utils'
import { randomUUID } from 'crypto'
import { _Money, PaymentDraft, PaymentMethodInfo } from '../../../src'

const money: _Money = {
  centAmount: 1000,
  currencyCode: 'EUR',
}

const paymentMethodInfo: PaymentMethodInfo = {
  paymentInterface: 'testInterface',
  name: { en: 'test-name-paymentMethodInfo' + randomUUID() },
}

const paymentDraft: PaymentDraft = {
  key: 'payment-test' + randomUUID(),
  amountPlanned: money,
  interfaceId: 'interfaceid-test' + randomUUID(),
  paymentMethodInfo,
}

export const createPayment = async () => {
  return await apiRoot.payments().post({ body: paymentDraft }).execute()
}

export const deletePayment = async (payment) => {
  return await apiRoot
    .payments()
    .withId({ ID: payment.body.id })
    .delete({
      queryArgs: { version: payment.body.version },
    })
    .execute()
}
