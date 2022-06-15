const express = require("express");

const router = express.Router();

const { addUser } = require('../controllers/register');
const {login} = require("../controllers/login");

// Route
router.post("/register", addUser);
router.post("/login", login);
module.exports = router;