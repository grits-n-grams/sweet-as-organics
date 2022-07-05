import request from 'superagent'

export function getOrders() {
  return request.get('/api/v1/orders').then((res) => res.body)
}

export function postOrder(cart) {
  return request
    .post('/api/v1/orders/')
    .send({ cart })
    .then((res) => res.body)
}

export function patchOrderStatus(id, newStatus) {
  return request
    .patch(`/api/v1/orders/`)
    .send({ id, status: newStatus })
    .then((res) => res.body)
}
