// http middleware - will be incharge of all external api calls
// function callAPI(request) {
//   return new Promise(function (resolve, reject) {
//     resolve(request);
//   });
// }

// // athentication middleware
// function createAuthMiddleware(options) {
//   return function (next) {
//     return function (request) {
//       callAPI(request).then(function (res) {
//         const response = {
//           ...res,
//           ...request,
//           headers: {
//             token: 'this-is-a-token-from-api-call'
//           }
//         }

//         const n = next(response);
//         console.log(n, '((((()))))')
//       });
//     };
//   };
// };

// function createUserAgentMiddleware(options) {
//   return function (next) {
//     return function (request) {
//       const response = {
//         ...request,
//         headers: {
//           ...request.headers,
//           'user-agent': 'This is a user agent'
//         }
//       }

//       next(response)
//       return response
//     }
//   }
// }

// function createLoggerMiddleware(options) {
//   return function (next) {
//     return function (request) {
//       // console.log("request", next.toString());
//       request.logger = 'logger'
//       var response = next(request);

//       console.log("response", response);
//       return response;
//     };
//   };
// };

// module.exports = {
//   createAuthMiddleware,
//   createUserAgentMiddleware,
//   createLoggerMiddleware
// }

export { default as createCorrelationIdMiddleware } from './createCorrelationIdMiddleware'
export { default as createAuthMiddleware } from './createAuthMiddleware';
export { default as createLoggerMiddleware } from './createLoggerMiddleware'
export { default as createRetryMiddleware } from './createRetryMiddleware'
export { default as createHttpMiddleware } from './createHttpMiddleware'
export { default as createUserAgentMiddleware } from './createUserAgentMiddleware'
export { default as createQueueMiddleware } from './createQueueMiddleware'
