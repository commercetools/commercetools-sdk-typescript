import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

import Product from './Product.jsx'
import { getProducts } from '../../store/product/productAction'
import { addLineItems, getActiveCart } from '../../store/cart/cartAction'

const ProductList = ({ getProducts, addLineItems, getActiveCart, products, cart }) => {

  useEffect(() => {
    getProducts()
    getActiveCart()
  }, [])

  const addItemToCart = (data) => {
    const { id, version } = cart
    const lineItem = {
      cartId: id,
      cartUpdateDraft: {
        version,
        productId: data.id,
        variantId: data?.masterData?.current?.masterVariant?.id,
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


  return (
    <div className="container">
      <div style={{ marginTop: '80px' }}>
        <h1>Product List</h1>
      </div>
      <div className="row" style={{ marginBottom: '80px' }}>
        {
          products?.results?.map((data, i) => (
            <Product key={i} product={data} handler={addItemToCart} />
          ))
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
