'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Token = models.token
// const stripe = require("stripe")(keySecret)

const index = (req, res, next) => {
  Token.find()
    .then(tokens => res.json({
      tokens: tokens.map((e) =>
        e.toJSON({ virtuals: true, user: req.user }))
    }))
    .catch(next)
}

const create = (req, res, next) => {
  const token = Object.assign(req.body.token)
  Token.create(token)
    .then(token =>
      res.status(201)
        .json({
          token: token.toJSON({ virtuals: true, user: req.user })
        }))
    .catch(next)
}

const destroy = (req, res, next) => {
  req.token.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  index,
  create,
  destroy
})
