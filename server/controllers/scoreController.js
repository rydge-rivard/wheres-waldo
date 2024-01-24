const asyncHandler = require("express-async-handler");
const Score = require("../models/score");

exports.score_get = asyncHandler(async (req, res, next) => {
  const scores = await Score.find().exec();

  res.json(scores);
});
