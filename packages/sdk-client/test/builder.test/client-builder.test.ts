import ApiRootBuilder from "../../src/builder/ApiRootBuilder";
require("dotenv").config();

export const projectKey = 'demo-1';
const fetch = require("node-fetch");

describe('client builder', () => {
  let apiRoot;
  const rand = Math.floor(Math.random() * 9999);
  const customerSampleData = {
    firstName: "test2",
    lastName: "test",
    email: `test-${rand}@test.com`,
    password: "123",
    key: "test" + rand,
    countryCode: "DE",
  };

  const createCustomerDraft = (customerData) => {
    const {
      email,
      password,
      firstName,
      lastName,
      countryCode,
      key,
    } = customerData;
    return {
      email,
      password,
      key,
      firstName,
      lastName,
      addresses: [
        {
          country: countryCode,
        },
      ],
      defaultShippingAddress: 0,
    };
  };

  const authMiddlewareOptions = {
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey: process.env.PROJECT_KEY || projectKey,
    credentials: {
      clientId: process.env.adminClientId || '',
      clientSecret: process.env.adminClientSecret || '',
    },
    oauthUri: process.env.adminAuthUrl || '',
    scopes: ['manage_project:demo-1'],
    fetch,
  };

  const httpMiddlewareOptions = {
    host: 'https://api.europe-west1.gcp.commercetools.com',
    fetch
  }

  apiRoot = new ApiRootBuilder()
    .withAuthMiddleware(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();

  test('get bare project details', async () => {
    const projectDetails = await apiRoot
      .withProjectKey({ projectKey })
      .get()
      .execute();

    expect(projectDetails).toHaveProperty('body');
    expect(projectDetails.body).toHaveProperty('name');
    expect(projectDetails.body).toHaveProperty('carts');
    expect(projectDetails.body).toHaveProperty('shoppingLists');

    expect(projectDetails.body.key).toEqual(projectKey);
  })

  test('create a customer', async () => {
    const customer = await apiRoot
      .withProjectKey({ projectKey })
      .customers()
      .post({
        body: createCustomerDraft(customerSampleData),
      }).execute();

    expect(customer).toHaveProperty('body');
    expect(customer).toHaveProperty('statusCode');
    expect(customer.body.customer).toHaveProperty('id');
    expect(customer.body.customer).toHaveProperty('email');

    expect(customer.body.customer.firstName).toEqual('test2');
    expect(customer.body.customer.lastName).toEqual('test');
    expect(customer.body.customer.email).toEqual(`test-${rand}@test.com`);
  })
})
