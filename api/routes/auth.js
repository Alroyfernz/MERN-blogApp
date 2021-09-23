const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    res.status(200).json("Registration succesfull");
    console.log(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials");
    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !checkPassword && res.status(400).json("Wrong password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("login failed");
  }
});

module.exports = router;
