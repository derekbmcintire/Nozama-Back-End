'use strict'

const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  products: [{
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
