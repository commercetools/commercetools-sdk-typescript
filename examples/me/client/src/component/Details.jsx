import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { getActiveCart, addLineItems } from '../../store/cart/cartAction'
import { connect } from 'react-redux'
import { CURRENCY_CODE } from '../constants'

const Details = ({ addLineItems, getActiveCart, cart }) => {
  const { state } = useLocation()
  const incart = false

  const addItemToCart = () => {
    const { id, version } = cart
    const { product } = state
    const lineItem = {
      cartId: id,
      cartUpdateDraft: {
        version,
        productId: product.id,
        variantId: product?.masterData?.current?.masterVariant?.id,
        quantity: 1
      }
    }

    addLineItems(lineItem)
      .then(({ type }) => {
        if (type == 'ADD_LINE_ITEM_SUCCESS') {
          return toast.success('Item added to cart')
        }
        toast.error('An error occurred')
      })
      .catch((error) => {
        console.log(error)
        toast.error('An error occurred')
      })
  }

  useEffect(() => {
    getActiveCart()
  }, [])

  return (
    <div>
      <div className="container">
        <div className="col-5 mx-auto" style={{ marginTop: '50px', marginBottom: '50px' }}>
          <h1>Product Details</h1>
        </div>
        <div className="row">
          <div className="col-4 mx-auto col-md-4">
            <img src={state?.image} className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-4 mx-auto col-md-4" style={{ marginTop: '50px' }}>
          <h4>
            {state?.name}
          </h4>
          <h5>
            <strong><span>{CURRENCY_CODE[state?.currencyCode]}</span>{Number.parseFloat(state?.centAmount / 100).toFixed(2).toString().replace('.', ',')}</strong>
          </h5>
          {/* <p>Some info abut this product:</p> */}
          <div>
            <Link to="/">Back to products page</Link>&nbsp;
            <Button size="sm" disabled={incart} onClick={() => addItemToCart()} variant="secondary">
              {incart ? (<span>In Cart</span>) : (<span>Add to Cart</span>)}
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer closeOnClick autoClose={3000} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.productReducer.products,
  item: state.cartReducer.item,
  cart: state.cartReducer.cart
})

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  getActiveCart: () => dispatch(getActiveCart()),
  addLineItems: (item) => dispatch(addLineItems(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)
