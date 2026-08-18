const bookGrid = document.querySelector('#bookGrid');

const card = document.createElement('div');
const title = document.createElement('h3');
const author = document.createElement('p');
const pages = document.createElement('p');
const status = document.createElement('p');

card.classList.add('book-card');

bookGrid.appendChild(card);
card.appendChild(title);
card.appendChild(author);
card.appendChild(pages);
card.appendChild(status);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  const readStatus = this.read ? 'read' : 'not read yet';
  return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
};

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

const atomicHabits = new Book('Atomic Habits', 'James Clear', 320, true);

const myLibrary = [];

myLibrary.push(theHobbit);
myLibrary.push(atomicHabits);

function displayBooks() {
  myLibrary.forEach((book) => {
    console.log(book.info());
  });
}

// Test for Terminal

title.textContent = Book.title;
author.textContent = Book.author;
pages.textContent = `${Book.pages} pages`;
status.textContent = Book.read ? 'Read' : 'Not read yet';
