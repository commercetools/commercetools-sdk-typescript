import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Button } from 'react-bootstrap'

const incart = false

const Product = ({ product, handler }) => {
  const name = product?.masterData?.current?.name?.en
  const image = product?.masterData?.current?.masterVariant?.images[0].url
  const currencyCode = product?.masterData?.current?.masterVariant?.prices[0].value.currencyCode
  const centAmount = product?.masterData?.current?.masterVariant?.prices[0].value.centAmount
  return (
    <div className="col-2 mx-auto col-md-6 col-lg-3" style={{ marginBottom: '25px' }}>
      <Card onClick={() => { }} style={{ width: '18rem' }}>
        <Link to="/details" state={{ name, image, currencyCode, centAmount, product }}>
          <Card.Img variant="top" className="img-fluid" src={image} />
        </Link>
        <Card.Body>
          <Card.Text className="sm" style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>{name}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <Button size="sm" disabled={incart} onClick={() => handler(product)} variant="secondary">
                {incart ? (<span>In Cart</span>) : (<span>Add to Cart</span>)}
              </Button>
            </Col>
            <Col>
              <small className="text-muted text-right">{'€'} {Number.parseFloat(centAmount / 100).toFixed(2).toString().replace('.', ',')}</small>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div >
  )
}

export default Product
