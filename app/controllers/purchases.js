'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Purchase = models.purchase
// const stripe = require("stripe")(keySecret)

const create = (req, res, next) => {
  const purchase = Object.assign(req.body.purchase)
  Purchase.create(purchase)
    .then(purchase =>
      res.status(201)
        .json({
          purchase: purchase.toJSON({ virtuals: true, user: req.user })
        }))
    .catch(next)
}

const destroy = (req, res, next) => {
  req.purchase.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  create,
  destroy
})
