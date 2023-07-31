const mongoose = require('mongoose');
const Book = require("./schema/book");
require('dotenv').config();

const books = [
  {
    "title": "The Great Gatsby",
    "description": "A classic novel by F. Scott Fitzgerald, exploring the roaring twenties and the American Dream through the eyes of Jay Gatsby.",
    "status": "Available"
  },
  {
    "title": "To Kill a Mockingbird",
    "description": "Harper Lee's powerful novel addressing racial injustice and moral growth as seen through the eyes of young Scout Finch.",
    "status": "Checked Out"
  },
  {
    "title": "1984",
    "description": "George Orwell's dystopian novel depicting a totalitarian society ruled by Big Brother, where individual freedom is suppressed.",
    "status": "Available"
  },
  {
    "title": "Pride and Prejudice",
    "description": "Jane Austen's classic tale of love and social manners, revolving around Elizabeth Bennet and Mr. Darcy.",
    "status": "Available"
  },
  {
    "title": "Harry Potter and the Sorcerer's Stone",
    "description": "J.K. Rowling's first book in the Harry Potter series, where a young wizard embarks on an extraordinary adventure.",
    "status": "On Hold"
  }
];

async function  seed() {
  await mongoose.connect(process.env.DATABASE_URL)
  
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    Book.create(book);
  }
  console.log('Seed donee')
}

seed();
