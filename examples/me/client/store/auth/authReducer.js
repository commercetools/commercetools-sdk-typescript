import * as authAction from './authAction'

const initialState = {
  loading: false,
  user: {},
  error: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case authAction.GET_USER_START: {
      return {
        ...state,
        loading: true,
      }
    }
    case authAction.GET_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload.user,
      }
    }
    case authAction.GET_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    }
    case authAction.LOGOUT_USER_START: {
      return {
        ...state,
        loading: true,
      }
    }
    case authAction.LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload.user,
      }
    }
    case authAction.LOGOUT_USER_ERROR: {
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

export default userReducer
