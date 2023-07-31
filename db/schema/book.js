const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  description: String,
  status: String
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
