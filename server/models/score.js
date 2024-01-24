const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
  player: { type: String, required: true },
  time: { type: String, required: true },
  game: { type: Schema.Types.ObjectId, ref: "Game", required: true },
});

module.exports = mongoose.model("Score", ScoreSchema);
