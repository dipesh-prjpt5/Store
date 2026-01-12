const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  product_name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  order_quantity: {
    type: Number,
    required: true,
  },
  order_date: {
    type: Date,
    default: Date.now,
  },
  total_price: {
    type: Number,
  },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = {
  Order,
};
