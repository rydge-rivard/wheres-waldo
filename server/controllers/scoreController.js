const asyncHandler = require("express-async-handler");
const Score = require("../models/score");
const { body, validationResult } = require("express-validator");

exports.score_get = asyncHandler(async (req, res, next) => {
  const scores = await Score.find().exec();

  res.json(scores);
});

exports.score_post = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const score = await new Score({
    player: req.body.player,
    game: req.body.game,
  });
  await score.save();

  // const errors = validationResult(req);

  // if (!errors.isEmpty()) {
  //   console.log(errors);
  // } else {
  // }
  res.json(score);
});
