import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { getUser } from '../../store/auth/authAction'
import { getActiveCart, removeLineItem, addLineItems, toggleCart } from '../../store/cart/cartAction'
import { ToastContainer, toast } from 'react-toastify'
import { sleep } from '../utils'
import ActivityIndicator from './Loader.jsx'
import { CURRENCY_CODE } from '../constants'


const Merge = ({ removeLineItem, addLineItems, getActiveCart, getUser, cart, toggleCart }) => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const removeItem = async (item, cart = {}, showToast = true) => {
    const lineItem = {
      version: cart.version,
      lineItemId: item.id,
      quantity: item.quantity
    }

    try {
      const response = await removeLineItem(lineItem)

      if (response?.type == 'REMOVE_LINE_ITEM_SUCCESS') {
        if (showToast) toast.success('Item removed from cart')
        return response
      }
      toast.error('An error occurred')
    } catch (error) {
      console.error(error)
      if (showToast) toast.error('An error occurred')
    }
  }

  const handleClick = async (e) => {
    toggleCart(false)
    setLoading(true)
    e.preventDefault()

    // save anonymous cart
    const _cart = cart

    try {
      // remove the item from anonymous cart
      let shrinkedCart = _cart
      for (let i = 0; i < cart.lineItems.length; i++) {
        const { payload: { cart: Cart } } = await removeItem(cart.lineItems[i], shrinkedCart, false)

        await sleep(200)
        shrinkedCart = Cart
      }

      const { type, payload } = await getUser(state)
      if (type == 'GET_USER_SUCCESS') {
        // merge anonymous cart with user cart
        if (_cart?.lineItems.length > 0) {

          // loop through line items and add to user cart
          let updatedCart = await payload.user.cart
          for (let i = 0; i < _cart.lineItems.length; i++) {
            const { payload: { cart: cart_ } } = await addItem(updatedCart, _cart.lineItems[i])

            await sleep(200)
            updatedCart = cart_
          }
        }

        toggleCart(true)
        setLoading(false)
        navigate('/')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const addItem = async (cart, item) => {
    const { id, version } = cart
    const lineItem = {
      cartId: id,
      cartUpdateDraft: {
        version,
        productId: item.productId,
        variantId: item?.variant.id,
        quantity: 1
      }
    }

    return addLineItems(lineItem)
  }

  useEffect(() => {
    getActiveCart()
  }, [])

  return (
    <section>
      <div>
        <br /><br />
        <center>
          <h4>You have the following items in your temporal cart do you want to merge with your main cart?</h4>
        </center>
        <br /><br /><br /><br />
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-10 max-auto col-lg-2">
              <strong>Product</strong>
            </div>
            <div className="col-10 max-auto col-lg-2">
              <strong>Name of Product</strong>
            </div>
            <div className="col-10 max-auto col-lg-2">
              <strong>Price</strong>
            </div>
            <div className="col-10 max-auto col-lg-2">
              <strong>Quantity</strong>
            </div>
            <div className="col-10 max-auto col-lg-2">
              <strong>Total</strong>
            </div>
          </div>
        </div>
        {cart?.lineItems?.length > 0 && cart.lineItems.map((item, index) => (
          <div className="container-fluid text-center" key={index}>
            <div className="row">
              <div className="col-10 max-auto col-lg-2">
                <img style={{ width: '6rem', height: '4rem' }} src={item.variant.images[0].url} className="img-fluid" />
              </div>
              <div className="col-10 max-auto col-lg-2">
                {item?.name?.en}
              </div>
              <div className="col-10 max-auto col-lg-2">
                {CURRENCY_CODE[item.price.value.currencyCode] + Number.parseFloat(item.price.value.centAmount / 100).toFixed(2).toString().replace('.', ',')}
              </div>
              <div className="col-10 max-auto col-lg-2">
                <input size="sm" className="qtyplus" defaultValue="-" onClick={() => { }} />
                {item.quantity}
                <input size="sm" className="qtyminus" defaultValue="+" onClick={() => { }} />
              </div>
              <div className="col-10 max-auto col-lg-2">
                {CURRENCY_CODE[item.price.value.currencyCode] + Number.parseFloat(item.totalPrice.centAmount / 100).toFixed(2).toString().replace('.', ',')}
              </div>
              <div className="col-10 max-auto col-lg-2">
                <Button variant="danger" onClick={() => removeItem(item, cart)} size="sm">Remove</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <br /><br /><br /><br />
      <center>
        <Button className="col-10 max-auto col-lg-2" onClick={handleClick} variant="primary" type="submit">
          Proceed
        </Button>
      </center>

      <ToastContainer closeOnClick autoClose={3000} />
      <ActivityIndicator loading={loading} />
    </section>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart
})

const mapDispatchToProps = (dispatch) => ({
  getUser: (user) => dispatch(getUser(user)),
  getActiveCart: () => dispatch(getActiveCart()),
  addLineItems: (item) => dispatch(addLineItems(item)),
  removeLineItem: (lineItem) => dispatch(removeLineItem(lineItem)),
  toggleCart: (action) => dispatch(toggleCart(action))
})

export default connect(mapStateToProps, mapDispatchToProps)(Merge)
