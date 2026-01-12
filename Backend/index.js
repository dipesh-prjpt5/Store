const express = require("express");
const { ConnectDB } = require("./config/db.config");
const ProductsRoute = require("./routes/Product.route.js");
const OrdersRoute = require("./routes/Order.route.js");
const AuthRoutes = require("./routes/Auth.route.js");

const app = express();

app.use(express.json());

app.use("/product", ProductsRoute);

app.use("/order", OrdersRoute);

app.use("/auth", AuthRoutes);

app.listen(5000, () => {
  console.log("App is listening on port 5000");
  ConnectDB();
});
