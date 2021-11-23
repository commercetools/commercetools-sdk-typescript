// import cors from "cors";
// import express from "express"
// // import ApiRoot from "./client/client"
// import { CustomerRepository } from "./repository"

// require("dotenv").config()
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.set("port", process.env.PORT || 3085);

// app
//   .get("/", async function (_, res) {
//     res.status(200).json({
//       status: 'success',
//       message: 'welocome to commercetools me endpoint demo app'
//     })
//   });

// app
//   .post("/register", async function async (req, res) {
//     const customerRepository = new CustomerRepository()
//     const data = await customerRepository.createCustomer(req.body)

//     return res.status(200).json({
//       status: 200,
//       data
//     })
//   })

// app
//   .get("/login", async function (req, res) {
//     const customerRepository = new CustomerRepository()

//     const data = await customerRepository.getCustomer(req.body)
//     return res.status(200).json({
//       data
//     })
//   })

// // app.delete("/delete", async function(req, res) {
// //   const { index } = req.body;

// //   try {
// //     if (await client.indices.exists({ index })) {
// //       await client.indices.delete({ index });
// //       res.status(200).json({
// //         message: "index deleted successfully",
// //         data: { index }
// //       });
// //     } else {
// //       res.status(404).json({
// //         message: "index not found",
// //       });
// //     }
// //   } catch (error) {
// //     res.status(500).json({
// //       message: error.message,
// //       error
// //     });
// //   }
// // });

// // app.post("/search", function(req, res) {
// //   // const q = req.query.q.length ? "*" + req.query.q + "*" : "";

// //   // construct query here
// //   // const query = {}
// //   const body = req.body;
// //   console.log(body, "-->");

// //   client.search({
// //     index: "analytics",
// //     body,
// //   }).then(results => {
// //     console.log(results, ["results"]);
// //     res.status(200).json({
// //       status: "success",
// //       // data: results.hits.hits
// //       data: results.aggregations.popular_colors.buckets
// //     });
// //   }).catch(err => {
// //     console.error(err);
// //     res.send([]);
// //   })
// // });

// app.listen(app.get("port"), function () {
//   console.log("express server listening on port " + app.get("port"));
// });

// import "dotenv/config";

import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from 'express'

import routes from './routes'

const app = express()
const { NODE_ENV } = process.env

// Application-Level Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Global error handler
app.use(
  (
    error: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    // response to user with 403 error and details
    if (error) {
      next(error)
    } else {
      next()
    }
  }
)

// Routes
app.use('/', routes)
app.get('/home', async function (_, res) {
  res.status(200).json({
    status: 'success',
    message: 'welocome to commercetools me endpoint demo app',
  })
})
app.use('*', async (_, res: Response) => {
  return res.status(404).json({
    status: 'error',
    data: {
      message: 'resource not found on this server',
    },
  })
})

export default app
