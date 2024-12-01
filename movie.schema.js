const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  make: String,
  model: String,
  year: Number,
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
