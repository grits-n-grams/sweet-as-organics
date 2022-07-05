import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../actions/orders'

import Order from './Order'

function OrderList({ children }) {
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.orders)

  useEffect(() => {
    dispatch(fetchOrders())
  }, [])

  return (
    <div className="orderlist">
      {children} {/* Holds the WaitIndicator */}
      {orders?.map((order) => {
        return <Order key={order.id} order={order} />
      })}
    </div>
  )
}

export default OrderList
