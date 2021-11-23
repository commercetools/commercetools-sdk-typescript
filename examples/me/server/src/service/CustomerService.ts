import { CustomerRepository } from '../repository'

interface ICustomerService {
  customerRepository: typeof CustomerRepository
  createCustomer(customerData): any
  getCustomer({ email, password }: { email: string; password: string }): any
}
/**
 * @description customer service class
 */
class CustomerService implements ICustomerService {
  customerRepository: any
  constructor(CustomerRepository) {
    this.customerRepository = CustomerRepository
  }

  createCustomer(customer) {
    return this.customerRepository.createCustomer(customer)
  }

  getCustomer(customer) {
    return this.customerRepository.getCustomer(customer)
  }
}

export default CustomerService
