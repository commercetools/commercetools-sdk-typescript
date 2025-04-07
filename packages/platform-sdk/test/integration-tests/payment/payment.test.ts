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
  let payment, type
  it('should create a payment', async () => {
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

    payment = await apiRoot.payments().post({ body: paymentDraft }).execute()

    expect(payment.body).toBeDefined()
    expect(payment.statusCode).toEqual(201)
  })

  it('should get an payment by ID', async () => {
    const getPayment = await apiRoot
      .payments()
      .withId({ ID: payment.body.id })
      .get()
      .execute()

    expect(getPayment).toBeDefined()
    expect(getPayment.body.id).toEqual(payment.body.id)
  })

  it('should get a payment by key', async () => {
    const payment = await createPayment()

    const getPayment = await apiRoot
      .payments()
      .withKey({ key: payment.body.key })
      .get()
      .execute()

    expect(getPayment).toBeDefined()
    expect(getPayment.body.key).toEqual(payment.body.key)
  })

  it('should query a payment', async () => {
    const queryPayment = await apiRoot
      .payments()
      .get({
        queryArgs: {
          where: 'id=' + '"' + payment.body.id + '"',
        },
      })
      .execute()

    expect(queryPayment).toBeDefined()
    expect(queryPayment.body.results[0].id).toEqual(payment.body.id)
  })

  it('should update a payment adding transaction', async () => {
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

    expect(updatePayment.statusCode).toEqual(200)
    expect(updatePayment.body.version).not.toEqual(payment.body.version)
    payment = updatePayment
  })

  it('should update a payment adding interface interaction', async () => {
    type = await createType()
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

    expect(updatePayment.statusCode).toEqual(200)
    expect(updatePayment.body.version).not.toEqual(payment.body.version)
    payment = updatePayment
  })

  it('should update a payment setting custom field', async () => {
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

    expect(updatePaymentWithType).toBeDefined()
    expect(updatePaymentWithType).not.toEqual(payment.body.version)

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

    expect(updatePaymentWithCustomField.statusCode).toEqual(200)
    expect(updatePaymentWithCustomField.body.custom.fields).toBeDefined()
    expect(updatePaymentWithCustomField.body.version).not.toEqual(
      payment.body.version
    )

    payment = updatePaymentWithCustomField
  })

  afterAll(async () => {
    await deletePayment(payment)
    await deleteType(type)
  })
})
