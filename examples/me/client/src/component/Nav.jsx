import React, { useState, useEffect } from 'react'
import { FormControl, Container, Form, Button, Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../../store/auth/authAction'
import { getActiveCart } from '../../store/cart/cartAction'
import { TokenStorage } from '../utils'

const tokenStorage = new TokenStorage(localStorage)

const NavBar = ({ logoutUser, cart, user }) => {
  const navigate = useNavigate()

  useEffect(() => {
    getActiveCart()
  }, [])

  const logout = () => {
    logoutUser()
      .then(_ => {
        tokenStorage.clearItems()
        navigate('login')
        window.location.reload()
      }).catch(e => {
        console.log(e)
      })
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/" eventKey="/" title="Home">CheckoutApp</Nav.Link>
          </Nav>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" eventKey="/" title="Home">Home</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success" onClick={() => { }}>Search</Button>&nbsp; */}
            {tokenStorage.getItem('token') &&
              (tokenStorage.getItem('anonymousId') == 'undefined' ||
                !tokenStorage.getItem('anonymousId')) ?
              <Button variant="danger" onClick={() => logout()}>Logout</Button> : <Button as={Link} to="/login" variant="primary" onClick={() => { }}>Login</Button>}
          </Form>
          <Nav.Link as={Link} to="/cart" eventKey="/home" title="Home" className="cart">
            <img src="../../cart.png" width="35px" height="35px" />
            {user && cart?.lineItems?.length > 0 ? <div className="item-count">{cart.lineItems.length}</div> : null}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

const mapStateToProps = (state) => {
  return ({
    cart: state.cartReducer.cart,
    user: state.authReducer.user
  })
}

const mapDispatchToProps = (dispatch) => ({
  getActiveCart: () => dispatch(getActiveCart()),
  logoutUser: () => dispatch(logoutUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
