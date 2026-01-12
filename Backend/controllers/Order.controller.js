const { Order } = require("../models/Order.model.js");
const { Product } = require("../models/Product.model.js");

const createOrder = async (req, res) => {
  try {
    const { product_name, order_quantity } = req.body;

    if (!product_name || !order_quantity) {
      return res.json({
        message: "All fields are require",
      });
    }

    const product = await Product.findOne({ _id: product_name });

    const totalPrice = product.price * order_quantity;

    const newOrder = await Order.create({
      product_name,
      order_quantity,
      total_price: totalPrice,
    });

    return res.json({
      message: "Order created",
      newOrder,
    });
  } catch (err) {
    console.error(err);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    return res.json({
      orders,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createOrder,
  getAllOrders
};
