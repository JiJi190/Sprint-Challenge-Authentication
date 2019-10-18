const router = require("express").Router();
const bcrypt = require("bycryptjs");
const jwt = require("jsonwebtoken");
const Users = require("./auth-config.js");
const restricted = require("./authenticate-middleware.js");

router.post("/register", (req, res) => {
  // implement registration
});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
