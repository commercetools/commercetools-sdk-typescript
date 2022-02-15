import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getActiveCart, removeLineItem } from '../../store/cart/cartAction'
import { ToastContainer, toast } from 'react-toastify';
import { ModalView } from './Modal.jsx';


const Cart = ({ removeLineItem, getActiveCart, cart }) => {
  const [show, setShow] = useState(false);

  const removeItem = (item) => {
    const lineItem = {
      version: cart.version,
      lineItemId: item.id,
      quantity: item.quantity
    }

    removeLineItem(lineItem)
      .then(data => {
        if (data?.type == 'REMOVE_LINE_ITEM_SUCCESS') {
          return toast.success('Item removed from cart')
        }
        toast.error('An error occurred')
      })
      .catch(error => {
        console.error(error)
        toast.error('An error occurred')
      })
  }

  const closeModal = () => {
    setShow(false)
  }

  useEffect(() => {
    getActiveCart()
  }, [])

  return (
    <section>
      <div>

        {
          cart?.lineItems?.length > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 50px', marginBottom: '20px' }}>
              <h1>Your Cart</h1>
              <Button variant="warning" disabled={!(cart?.lineItems?.length > 0)} onClick={() => setShow(true)} size="sm">Checkout</Button>
            </div>
          )
        }

        {/* cart?.lineItems?.length > 0 */}
        {false ? (<div className="container-fluid text-center" style={{ borderBottom: '#ccc' }}>
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
        </div>) : (null)}
        {cart?.lineItems?.length > 0 ? cart.lineItems.map((item, index) => (
          <div className="container-fluid text-center" key={index}>
            <div className="row">
              <div className="col-10 max-auto col-lg-2">
                <img style={{ width: '6rem', height: '4rem' }} src={item.variant.images[0].url} className="img-fluid" />
              </div>
              <div className="col-10 max-auto col-lg-2">
                {item?.name?.en}
              </div>
              <div className="col-10 max-auto col-lg-2">
                € {Number.parseFloat(item.price.value.centAmount / 100).toFixed(2).toString().replace('.', ',')}
              </div>
              <div className="col-10 max-auto col-lg-2">
                <input size="sm" className="qtyplus" defaultValue="-" onClick={() => { }} />
                {item.quantity}
                <input size="sm" className="qtyminus" defaultValue="+" onClick={() => { }} />
              </div>
              <div className="col-10 max-auto col-lg-2">
                € {Number.parseFloat(item.totalPrice.centAmount / 100).toFixed(2).toString().replace('.', ',')}
              </div>
              <div className="col-10 max-auto col-lg-2">
                <Button variant="danger" onClick={() => removeItem(item)} size="sm">Remove</Button>
              </div>
            </div>
          </div>
        )) : (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
          }}>
            <img src="../../assets/cart.jpeg" />
          </div>
        )}
      </div>
      <ModalView data={cart?.lineItems} show={show} handleClose={() => setShow(false)} />
      <ToastContainer closeOnClick autoClose={3000} />
    </section>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart
})

const mapDispatchToProps = (dispatch) => ({
  getActiveCart: () => dispatch(getActiveCart()),
  removeLineItem: (lineItem) => dispatch(removeLineItem(lineItem))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
