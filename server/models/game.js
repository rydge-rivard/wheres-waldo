const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GameSchema = new Schema({
  start: { type: Date, required: true },
  end: { type: Date },
});

module.exports = mongoose.model("Game", GameSchema);
