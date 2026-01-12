const { Router } = require("express");
const {
  createOrder,
  getAllOrders,
} = require("../controllers/Order.controller.js");

const router = Router();

router.get("/", getAllOrders);

router.post("/", createOrder);

module.exports = router;
