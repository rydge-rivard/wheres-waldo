const express = require("express");
const router = express.Router();
const character_controller = require("../controllers/characterController");

router.get("/", character_controller.index);

module.exports = router;
