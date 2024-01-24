const asyncHandler = require("express-async-handler");
const Game = require("../models/game");

exports.game_new = asyncHandler(async (req, res, next) => {
  const games = await Game.find().exec();
});

exports.game_update = asyncHandler(async (req, res, next) => {
  const games = await Game.find().exec();
});
