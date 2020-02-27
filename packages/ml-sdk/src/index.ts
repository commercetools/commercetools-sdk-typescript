// import  createAuthMiddlewareForClientCredentialsFlow  from "@commercetools/sdk-middleware-auth";
// import { createHttpMiddleware } from "@commercetools/sdk-middleware-http";
// import { createClient } from "@commercetools/sdk-client";
// import { createLoggerMiddleware } from "@commercetools/sdk-middleware-logger";

// import {
//   ApiRoot,
//   executeRequest,
//   createExecutorFromMiddlewares
// } from "./generated";

// import fetch2 from "node-fetch";
// // console.log(fetch2);

// const projectKey = process.env.CTP_PROJECT_KEY;
// const clientId = process.env.CTP_CLIENT_ID;
// const clientSecret = process.env.CTP_CLIENT_SECRET;

// const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
//   host: "https://auth.sphere.io",
//   projectKey,
//   credentials: {
//     clientId,
//     clientSecret
//   },
//   fetch
// });

// const httpMiddleware = createHttpMiddleware({
//   host: "https://ml-eu.europe-west1.gcp.commercetools.com",
//   fetch
// });

// const ctpClient = createClient({
//   middlewares: [authMiddleware, httpMiddleware,
//     //  createLoggerMiddleware()
//     ]
// });

// const executeRequest: executeRequest = createExecutorFromMiddlewares(
//   ctpClient.execute
// );

// export const mlApiRoot: ApiRoot = new ApiRoot({
//   executeRequest,
//   baseUri: "https://ml-eu.europe-west1.gcp.commercetools.com"
// });

// mlApiRoot.withProjectKey({projectKey})
// .recommendations()
// .generalCategories()
// .get({
//   queryArgs:{
//     productName:'vase'
//   }
// })
// .execute()
// .then(res => res.body.results[0])
// .then(console.log)

export * from './generated/index';
