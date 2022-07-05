const express = require('express')

const db = require('../db/orders')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.listOrders()
    .then((orders) => {
      res.json(orders)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Server Error')
    })
})

router.post('/', (req, res) => {
  const { cart } = req.body

  db.addOrder(cart)
    .then(() => {
      res.status(201).send()
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Server Error')
    })
})

router.patch('/', (req, res) => {
  const { id, status } = req.body

  db.editOrderStatus(id, status)
    .then((order) => {
      res.json(order)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Server Error')
    })
})
