const Book = require("./Book");
const EBook = require("./EBook");

// Books
const book1 = new Book("JS Hillel", "Данило Дьяченко", 2010);
const book2 = new Book("JavaScript Basics", "Daria Habriielian", 2026);

// EBook
const ebook1 = new EBook("AQA JS Hillel", "Hillel Hillel", 2018, "PDF");

// printInfo
book1.printInfo();
book2.printInfo();
ebook1.printInfo();

// static Book method
const books = [book1, book2, ebook1];
const oldestBook = Book.findOldestBook(books);
console.log("Oldest book:");
oldestBook.printInfo();

// static EBook method
const ebookFromBook = EBook.fromBook(book1, "EPUB");
ebookFromBook.printInfo();
