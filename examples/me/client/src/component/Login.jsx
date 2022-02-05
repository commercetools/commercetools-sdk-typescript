import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap'
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom'

import { getUser } from "../../store/auth/authAction";
import { getActiveCart } from "../../store/cart/cartAction";

const Login = ({ getUser, getActiveCart, cart }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState({ email: '', password: '' })

  const handleChange = ({ target }) => {
    let _user = {}
    const { name, value } = target
    _user[name] = value
    setUser({ ...user, ..._user })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (cart?.lineItems?.length > 0 && cart?.anonymousId) {
      // navigate to an intermediary screen and display anonymous cart items
      return navigate('/Merge', { state: user })
    }

    try {
      getUser(user)
        .then(({ type }) => {
          if (type == 'GET_USER_SUCCESS') {
            navigate('/')
          }
        })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getActiveCart()
  }, [])

  return (
    <div className="col-2 mx-auto col-md-6 col-lg-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart
})

const mapDispatchToProps = (dispatch) => ({
  getActiveCart: () => dispatch(getActiveCart()),
  getUser: (user) => dispatch(getUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
