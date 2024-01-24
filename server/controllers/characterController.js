const asyncHandler = require("express-async-handler");
const Character = require("../models/character");

exports.index = asyncHandler(async (req, res, next) => {
  const characters = await Character.find().exec();

  res.json(characters);
});
