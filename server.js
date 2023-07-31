"use strict";

const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Book = require("./db/schema/book");

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected!"))
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/", (request, response) => {
  response.send("hello");
});

app.get("/book", async (request, response) => {
  const books = await Book.find();
  response.send(books);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
