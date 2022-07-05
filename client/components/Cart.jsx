import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'

import { placeOrder } from '../actions/orders'

import CartItem from './CartItem'

function Cart(props) {
  const { children } = props
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  function submitCart() {
    dispatch(placeOrder(cart, () => navigate('/orders')))
  }

  return cart.length ? (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <td role="columnheader">Product</td>
            <td role="columnheader">Quantity</td>
            <td role="columnheader">Remove</td>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, id) => {
            return <CartItem key={id} item={item} />
          })}
        </tbody>
      </table>
      <p className="actions">
        <Link to="/">Continue shopping</Link>
        <span>
          {children} {/* Holds the WaitIndicator */}
          <button className="button-primary" onClick={submitCart}>
            Place Order
          </button>
        </span>
      </p>
    </div>
  ) : (
    <p>
      Your cart is empty! Start shopping <Link to="/">here</Link>
    </p>
  )
}

export default Cart