export function createTestResponse(options) {
  return {
    body: {},
    statusCode: 200,
    request: {
      url: 'http://demo-url/1235',
      headers: {
        Authorization: 'token-12345',
      },
    },
    headers: {},
    error: null,
    ...options,
  }
}
