import React, { useContext } from 'react'
import { Alert } from 'react-bootstrap'
import { cartContext } from './cartContext'
const CartHeader = () => {
    const { count} = useContext(cartContext)
  return (
    <Alert variant='info'>
        <h4> items : {count} </h4>
  </Alert>
  )
}

export default CartHeader
