import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from 'express'
import cors from 'cors'

import routes from './routes'

const app = express()
const { NODE_ENV } = process.env

// Application-Level Middleware
app.use(cors())
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
    message: 'Welcome to Composable Commerce ME endpoint demo app',
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
