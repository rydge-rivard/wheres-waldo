const asyncHandler = require("express-async-handler");
const Game = require("../models/game");
const { body, validationResult } = require("express-validator");

exports.game_new = asyncHandler(async (req, res, next) => {
  const game = new Game({
    start: req.body.start,
  });
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
  } else {
    await game.save();
  }
  res.json(game);
});

exports.game_update = asyncHandler(async (req, res, next) => {
  const game = await Game.findByIdAndUpdate(req.body.game._id, {
    end: new Date(),
  });
});
