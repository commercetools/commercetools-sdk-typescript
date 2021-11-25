import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const prodMiddleware = applyMiddleware(thunk)
const devMiddleware = applyMiddleware(thunk, logger)

const middleware =
  process.env.NODE_ENV === 'development' ? devMiddleware : prodMiddleware

const store = createStore(rootReducer, middleware)
export default store
