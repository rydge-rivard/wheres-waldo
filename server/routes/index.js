const express = require("express");
const router = express.Router();
const character_controller = require("../controllers/characterController");
const game_controller = require("../controllers/gameController");
const score_controller = require("../controllers/scoreController");

// Character
router.get("/", character_controller.index);

// Score
router.get("/score", score_controller.score_get);

// Game
router.post("/game", game_controller.game_new);
router.post("/game/won", game_controller.game_update);

module.exports = router;
