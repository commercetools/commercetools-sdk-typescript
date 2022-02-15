import axios from 'axios'

export const GET_PRODUCT_START = 'GET_PRODUCT_START'
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR'

export const getProductStart = () => ({
  type: GET_PRODUCT_START,
})

export const getProductSuccess = (product) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: { product },
})

export const getProductError = (error) => ({
  type: GET_PRODUCT_ERROR,
  payload: { error },
})

export function getProducts() {
  return (dispatch) => {
    dispatch(getProductStart())
    axios({
      url: 'http://localhost:8085/product',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => {
        if (response.status == 200) {
          return dispatch(getProductSuccess(response.data.data))
        }
        dispatch(getProductError(response.data))
      })
      .catch((error) => {
        dispatch(getProductError(error))
      })
  }
}
