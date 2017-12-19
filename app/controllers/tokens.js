'use strict'

const stripe = require('stripe')('sk_test_NvXOEMvRfSxOzGkCvwuvHvvF')
const controller = require('lib/wiring/controller')
const models = require('app/models')
const Token = models.token
// const stripe = require("stripe")(keySecret)

// const index = (req, res, next) => {
//   Token.find()
//     .then(tokens => res.json({
//       tokens: tokens.map((e) =>
//         e.toJSON({ virtuals: true, user: req.user }))
//     }))
//     .catch(next)
// }

const create = (req, res, next) => {
  const token = Object.assign(req.body.token)
  Token.create(token)
    .then(token =>
      res.status(201)
        .json({
          token: token.toJSON({ virtuals: true, user: req.user })
        })).then(() => {
          // Set your secret key: remember to change this to your live secret key in production
          // See your keys here: https://dashboard.stripe.com/account/apikeys
          // Token is created using Checkout or Elements!
          // Get the payment token ID submitted by the form:
          const token = req.body.token.token_id // Using Express

          // Charge the user's card:
          stripe.charges.create({
            amount: req.body.token.total,
            currency: 'usd',
            description: 'Example charge',
            source: token
          })
        })
    .catch(next)
}

const destroy = (req, res, next) => {
  req.token.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  // index,
  create,
  destroy
})
