import * as productAction from './productAction'

const initialState = {
  loading: false,
  products: [],
  error: null,
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productAction.GET_PRODUCT_START: {
      return {
        ...state,
        loading: true,
      }
    }
    case productAction.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: action.payload.product,
      }
    }
    case productAction.GET_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    }
    default: {
      return state
    }
  }
}

export default productReducer
