import React from 'react'
import { Modal, Button } from 'react-bootstrap'

import { CURRENCY_CODE } from '../constants'

export const ModalView = ({ data, show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Products Checkout...</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '350px', overflow: 'scroll' }}>
          {
            data?.length > 0 &&
            data.map((item, index) => (
              <div key={index} style={{ padding: '10px', ...(index != data.length - 1) ? { borderBottom: '0.5px solid #ccc' } : null }}>
                <div style={{ fontWeight: '500' }}>{index + 1}. {item?.name?.en}</div>
                <div>{CURRENCY_CODE[item.totalPrice.currencyCode] + Number.parseFloat(item.totalPrice.centAmount / 100).toFixed(2).toString().replace('.', ',')}</div>
              </div>
            ))
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={null}>
            Proceed To Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
