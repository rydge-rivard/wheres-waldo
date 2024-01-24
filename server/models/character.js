const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: { type: String, required: true },
  x_location: { type: String, required: true },
  y_location: { type: String, required: true },
});

module.exports = mongoose.model("Character", CharacterSchema);
