const { Product } = require("../models/Product.model.js");

const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || !price) {
      return res.json({
        message: "All fields are require",
      });
    }

    const product = await Product.findOne({ name });

    if (product) {
      return res.json({
        message: "Product Alredy exists",
      });
    }

    const newProduct = await Product.create({
      name,
      price,
    });

    return res.json({
      message: "Product created",
      newProduct,
    });
  } catch (err) {
    console.error("Error creating Product", err);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json({
      products,
    });
  } catch (err) {
    console.error("Error getting Product", err);
  }
};

module.exports = {
  createProduct,
  getAllProducts
};
