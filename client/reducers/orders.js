import {
  FETCH_ORDERS_SUCCESS,
  UPDATE_ORDER_STATUS_SUCCESS,
} from '../actions/orders'

const updateState = (state, updatedOrder) => {
  return state.map((order) =>
    order.id === updatedOrder.id ? updatedOrder : order
  )
}

function orders(state = [], action) {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return action.orders

    case UPDATE_ORDER_STATUS_SUCCESS:
      return updateState(state, action.order)

    default:
      return state
  }
}

export default orders
