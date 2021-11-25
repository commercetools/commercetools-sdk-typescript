import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap'
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom'

import { getUser } from "../../store/auth/authAction";

const Login = ({ getUser }) => {
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
    try {
      getUser(user)
        .then(({ type, payload }) => {
          if (type == 'GET_USER_SUCCESS') {
            navigate('/')
          }
        })
    } catch (error) {
      console.error(error)
    }
  }

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
  // User: state.authReducer.user
})

const mapDispatchToProps = (dispatch) => ({
  getUser: (user) => dispatch(getUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
