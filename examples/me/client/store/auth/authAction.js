import axios from 'axios'
import { TokenStorage } from '../../src/utils'

export const GET_USER_START = 'GET_USER_START'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_ERROR = 'GET_USER_ERROR'

export const LOGOUT_USER_START = 'LOGOUT_USER_START'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR'

const tokenStorage = new TokenStorage(localStorage)

export const getUserStart = () => ({
  type: GET_USER_START,
})

export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: { user },
})

export const getUserError = (error) => ({
  type: GET_USER_ERROR,
  payload: { error },
})

export const logoutUserStart = () => ({
  type: LOGOUT_USER_START,
})

export const logoutUserSuccess = (user) => ({
  type: LOGOUT_USER_SUCCESS,
  payload: { user },
})

export const logoutUserError = (error) => ({
  type: LOGOUT_USER_ERROR,
  payload: { error },
})

export function getUser({ email, password }) {
  return (dispatch) => {
    dispatch(getUserStart())
    return axios({
      url: 'http://localhost:8085/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: tokenStorage.getItem('token'),
        anonymousId: tokenStorage.getItem('anonymousId'),
      },
      data: {
        email,
        password,
      },
    })
      .then((response) => {
        if (response.status == 200) {
          tokenStorage.removeItem('anonymousId')
          tokenStorage.setItem('token', response.data.data.token)
          return dispatch(getUserSuccess(response.data.data))
        }
        dispatch(getUserError(response.data))
      })
      .catch((error) => {
        dispatch(getUserError(error))
      })
  }
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(logoutUserStart())
    return axios({
      url: 'http://localhost:8085/logout',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: tokenStorage.getItem('token'),
      },
    })
      .then(({ data }) => {
        dispatch(logoutUserSuccess(null))
      })
      .catch((error) => {
        dispatch(logoutUserError(error))
      })
  }
}
