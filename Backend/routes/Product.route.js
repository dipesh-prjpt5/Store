const { Router } = require("express");
const {
  createProduct,
  getAllProducts,
} = require("../controllers/Product.controller");

const router = Router();

router.get("/", getAllProducts);

router.post("/", createProduct);

module.exports = router;
