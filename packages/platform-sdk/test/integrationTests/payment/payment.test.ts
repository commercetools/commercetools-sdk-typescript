import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import {
  _Money,
  PaymentDraft,
  PaymentMethodInfo,
  TransactionDraft,
  TypeResourceIdentifier,
} from '../../../src'
import { createPayment, deletePayment } from './payment-fixture'
import { createType, deleteType } from '../type/type-fixture'

const money: _Money = {
  centAmount: 1000,
  currencyCode: 'EUR',
}

describe('testing payment API calls', () => {
  it('should create and delete a payment by ID', async () => {
    const paymentMethodInfo: PaymentMethodInfo = {
      paymentInterface: 'testInterface',
      name: { en: 'test-name-paymentMethodInfo' + randomUUID() },
    }

    const paymentDraft: PaymentDraft = {
      key: randomUUID(),
      amountPlanned: money,
      interfaceId: randomUUID(),
      paymentMethodInfo,
    }

    const responseCreatedPayment = await apiRoot
      .payments()
      .post({ body: paymentDraft })
      .execute()

    expect(responseCreatedPayment.statusCode).toEqual(201)
    expect(responseCreatedPayment.body).not.toBe(null)

    const responsePaymentDeleted = await apiRoot
      .payments()
      .withId({ ID: responseCreatedPayment.body.id })
      .delete({
        queryArgs: { version: responseCreatedPayment.body.version },
      })
      .execute()

    expect(responsePaymentDeleted.statusCode).toEqual(200)
  })

  it('should get an payment by ID', async () => {
    const payment = await createPayment()
    const getPayment = await apiRoot
      .payments()
      .withId({ ID: payment.body.id })
      .get()
      .execute()
    expect(getPayment).not.toBe(null)
    expect(getPayment.body.id).toEqual(payment.body.id)

    await deletePayment(payment)
  })

  it('should update a payment adding transaction', async () => {
    const payment = await createPayment()

    const transactionDraft: TransactionDraft = {
      type: 'Charge',
      amount: money,
    }

    const updatePayment = await apiRoot
      .payments()
      .withId({ ID: payment.body.id })
      .post({
        body: {
          version: payment.body.version,
          actions: [
            {
              action: 'addTransaction',
              transaction: transactionDraft,
            },
          ],
        },
      })
      .execute()

    expect(updatePayment.body.version).not.toBe(payment.body.version)
    expect(updatePayment.statusCode).toEqual(200)

    await deletePayment(updatePayment)
  })

  it('should update a payment adding interface interaction', async () => {
    const type = await createType()
    const payment = await createPayment()

    const typeResourceIdentifier: TypeResourceIdentifier = {
      typeId: 'type',
      id: type.body.id,
    }

    const updatePayment = await apiRoot
      .payments()
      .withId({ ID: payment.body.id })
      .post({
        body: {
          version: payment.body.version,
          actions: [
            {
              action: 'addInterfaceInteraction',
              type: typeResourceIdentifier,
              fields: {
                'string-field': type.body.key,
              },
            },
          ],
        },
      })
      .execute()

    expect(updatePayment.body.version).not.toBe(payment.body.version)
    expect(updatePayment.statusCode).toEqual(200)

    await deletePayment(updatePayment)
    await deleteType(type)
  })

  it('should update a payment setting custom field', async () => {
    const type = await createType()
    const payment = await createPayment()

    const typeResourceIdentifier: TypeResourceIdentifier = {
      typeId: 'type',
      id: type.body.id,
    }

    const updatePaymentWithType = await apiRoot
      .payments()
      .withId({ ID: payment.body.id })
      .post({
        body: {
          version: payment.body.version,
          actions: [
            {
              action: 'setCustomType',
              type: typeResourceIdentifier,
              fields: {
                'string-field': type.body.key,
              },
            },
          ],
        },
      })
      .execute()

    const updatePaymentWithCustomField = await apiRoot
      .payments()
      .withId({ ID: payment.body.id })
      .post({
        body: {
          version: updatePaymentWithType.body.version,
          actions: [
            {
              action: 'setCustomField',
              name: 'string-field',
              value: type.body.key,
            },
          ],
        },
      })
      .execute()

    expect(updatePaymentWithCustomField.body.version).not.toBe(
      payment.body.version
    )
    expect(updatePaymentWithCustomField.statusCode).toEqual(200)
    expect(updatePaymentWithCustomField.body.custom.fields).not.toBe(null)

    await deletePayment(updatePaymentWithCustomField)
    await deleteType(type)
  })
})
