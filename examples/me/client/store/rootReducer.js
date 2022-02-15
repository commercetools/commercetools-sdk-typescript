import { combineReducers } from 'redux'

import productReducer from './product/productReducer'
import authReducer from './auth/authReducer'
import cartReducer from './cart/cartReducer'

export default combineReducers({
  productReducer,
  authReducer,
  cartReducer,
})
