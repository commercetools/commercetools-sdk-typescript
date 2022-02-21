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

export const TOGGLE_CART_VISIBILITY = 'TOGGLE_CART_VISIBILITY'

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

export const toggleCartVisibility = (value) => ({
  type: TOGGLE_CART_VISIBILITY,
  payload: { value },
})

export function addLineItems(data) {
  const token = tokenStorage.getItem('token')
  return async (dispatch) => {
    dispatch(addLineItemStart())
    try {
      const response = await axios({
        url: 'http://localhost:8085/cart',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          ...(token ?? {}),
        },
        data,
      })

      if (response.status == 200) {
        const { data } = response?.data

        if (data.anonymousId) tokenStorage.setItem('token', data?.token)
        return dispatch(addLineItemSuccess(data))
      }
    } catch (e) {
      dispatch(addLineItemError(e))
    }
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
  return async (dispatch) => {
    dispatch(removeLineItemStart())
    try {
      const response = await axios({
        url: 'http://localhost:8085/cart',
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        data: {
          ...lineItem,
        },
      })

      if (response.status == 200) {
        return dispatch(removeLineItemSuccess(response.data.data))
      }
      dispatch(removeLineItemError(response.data))
    } catch (error) {
      dispatch(removeLineItemError(error))
    }
  }
}

export function toggleCart(value) {
  return async (dispatch) => {
    dispatch(toggleCartVisibility(value))
  }
}
