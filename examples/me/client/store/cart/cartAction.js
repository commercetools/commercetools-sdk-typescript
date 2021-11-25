import axios from 'axios'
import { TokenStorage } from '../../src/utils'

export const ADD_LINE_ITEM_START = 'ADD_LINE_ITEM_START'
export const ADD_LINE_ITEM_SUCCESS = 'ADD_LINE_ITEM_SUCCESS'
export const ADD_LINE_ITEM_ERROR = 'ADD_LINE_ITEM_ERROR'

export const GET_ACTIVE_CART_START = 'GET_ACTIVE_CART_START'
export const GET_ACTIVE_CART_SUCCESS = 'GET_ACTIVE_CART_SUCCESS'
export const GET_ACTIVE_CART_ERROR = 'GET_ACTIVE_CART_ERROR'

export const REMOVE_LINE_ITEM_START = 'REMOVE_LINE_ITEM_START'
export const REMOVE_LINE_ITEM_SUCCESS = 'REMOVE_LINE_ITEM_SUCCESS'
export const REMOVE_LINE_ITEM_ERROR = 'REMOVE_LINE_ITEM_ERROR'

const tokenStorage = new TokenStorage(localStorage)

// add line item
export const addLineItemStart = () => ({
  type: ADD_LINE_ITEM_START,
})

export const addLineItemSuccess = (cart) => ({
  type: ADD_LINE_ITEM_SUCCESS,
  payload: { cart },
})

export const addLineItemError = (error) => ({
  type: ADD_LINE_ITEM_ERROR,
  payload: { error },
})

// get active cart
export const getActiveCartStart = () => ({
  type: GET_ACTIVE_CART_START,
})

export const getActiveCartSuccess = (cart) => ({
  type: GET_ACTIVE_CART_SUCCESS,
  payload: { cart },
})

export const getActiveCartError = (error) => ({
  type: GET_ACTIVE_CART_ERROR,
  payload: { error },
})

// remove an item from cart
export const removeLineItemStart = () => ({
  type: REMOVE_LINE_ITEM_START,
})

export const removeLineItemSuccess = (cart) => ({
  type: REMOVE_LINE_ITEM_SUCCESS,
  payload: { cart },
})

export const removeLineItemError = (error) => ({
  type: REMOVE_LINE_ITEM_ERROR,
  payload: { error },
})

export function addLineItems(data) {
  return (dispatch) => {
    dispatch(addLineItemStart())
    return axios({
      url: 'http://localhost:8085/cart',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        token: tokenStorage.getItem('token'),
        anonymous_id: tokenStorage.getItem('anonymousId'),
      },
      data,
    })
      .then((response) => {
        if (response.status == 200) {
          // add anonymousId to header
          const { data } = response?.data
          tokenStorage.setItem('token', data?.token)
          tokenStorage.setItem('anonymousId', data?.anonymousId)

          return dispatch(addLineItemSuccess(data))
        }
        dispatch(addLineItemError(response.data))
      })
      .catch((error) => {
        dispatch(addLineItemError(error))
      })
  }
}

export function getActiveCart() {
  return (dispatch) => {
    dispatch(getActiveCartStart())
    return axios({
      url: 'http://localhost:8085/cart',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        token: tokenStorage.getItem('token'),
      },
    })
      .then((response) => {
        if (response.status == 200) {
          return dispatch(getActiveCartSuccess(response.data.data))
        }
        dispatch(getActiveCartError(response.data))
      })
      .catch((error) => {
        dispatch(getActiveCartError(error))
      })
  }
}

export function removeLineItem(lineItem) {
  return (dispatch) => {
    dispatch(removeLineItemStart())
    return axios({
      url: 'http://localhost:8085/cart',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        token: tokenStorage.getItem('token'), // encrypt this
        anonymous_id: tokenStorage.getItem('anonymousId'),
      },
      data: {
        ...lineItem,
      },
    })
      .then((response) => {
        if (response.status == 200) {
          return dispatch(removeLineItemSuccess(response.data.data))
        }
        dispatch(removeLineItemError(response.data))
      })
      .catch((error) => {
        dispatch(removeLineItemError(error))
      })
  }
}
