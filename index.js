require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const Movie = require("./movie.schema");

const app = express();
const MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost";
console.log({ MONGO_URI });
mongoose
  .connect(MONGO_URI)
  .then((conn) => {
    console.log(`MongoDb connected to :  ${conn.connection.host}`);
  })
  .catch((err) => {
    console.log({ err });
  });

app.get("/", async (_req, res) => {
  const data = await Movie.find();
  return res.json({ data });
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`running on ${PORT}`));
