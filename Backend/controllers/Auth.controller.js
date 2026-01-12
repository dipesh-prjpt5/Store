const { User } = require("../models/User.model");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({
        message: "All fields are require",
      });
    }
    const newAdmin = await User.create({
      name,
      email,
      password,
    });
    return res.json({
      newAdmin,
    });
  } catch (err) {
    console.error(err);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        message: "All fields are require",
      });
    }

    const user = await User.findOne({ email });

    console.log(user);

    if (!user) {
      return res.json({
        message: "user not found",
      });
    }

    return res.json({
      message: "Welcome sir",
      user,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  register,
  login,
};
