import * as cartAction from './cartAction'

const initialState = {
  loading: false,
  cart: {},
  showCart: true,
  error: null,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartAction.ADD_LINE_ITEM_START: {
      return {
        ...state,
        loading: true,
      }
    }
    case cartAction.ADD_LINE_ITEM_SUCCESS: {
      return {
        ...state,
        loading: false,
        cart: action.payload.cart,
      }
    }
    case cartAction.ADD_LINE_ITEM_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    }
    case cartAction.GET_ACTIVE_CART_START: {
      return {
        ...state,
        loading: true,
      }
    }
    case cartAction.GET_ACTIVE_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        cart: action.payload.cart,
      }
    }
    case cartAction.GET_ACTIVE_CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    }
    case cartAction.REMOVE_LINE_ITEM_START: {
      return {
        ...state,
        loading: true,
      }
    }
    case cartAction.REMOVE_LINE_ITEM_SUCCESS: {
      return {
        ...state,
        loading: false,
        cart: action.payload.cart,
      }
    }
    case cartAction.REMOVE_LINE_ITEM_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    }
    case cartAction.TOGGLE_CART_VISIBILITY: {
      return {
        ...state,
        showCart: action.payload.value,
      }
    }
    default: {
      return state
    }
  }
}

export default cartReducer
