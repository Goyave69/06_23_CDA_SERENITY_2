const express = require("express");

const router = express.Router();

const loginController = require("../controllers/authController/loginController");

router.post("/", loginController);
module.exports = router;
