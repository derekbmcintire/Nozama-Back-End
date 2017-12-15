'use strict'

const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
  stripeToken: {
    type: String,
    required: true
  },
  stripeEmail: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Purchase = mongoose.model('Purchase', purchaseSchema)

module.exports = Purchase
