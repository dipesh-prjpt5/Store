const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Store");
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Error connecting DB", err);
  }
};

module.exports = {
  ConnectDB,
};
