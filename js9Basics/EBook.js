const Book = require("./Book");

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  // getter
  get fileFormat() {
    return this._fileFormat;
  }

  // setter
  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("File format must be a non-empty string");
    }
    this._fileFormat = value;
  }

  // перевизначений метод
  printInfo() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Format: ${this.fileFormat}`
    );
  }

  // static method
  static fromBook(book, format) {
    return new EBook(book.title, book.author, book.year, format);
  }
}

module.exports = EBook;
