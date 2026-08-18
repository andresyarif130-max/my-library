const bookGrid = document.querySelector('#bookGrid');

const card = document.createElement('div');
const title = document.createElement('h3');
const author = document.createElement('p');
const pages = document.createElement('p');
const status = document.createElement('p');

card.classList.add('book-card');

card.appendChild(title);
bookGrid.appendChild(card);
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
// Test for Terminal
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(theHobbit.info());
// End test for Terminal
const myLibrary = [];
myLibrary.push(theHobbit);

// Test for Terminal
const atomicHabits = new Book('Atomic Habits', 'James Clear', 320, true);
myLibrary.push(atomicHabits);

title.textContent = theHobbit.title;
author.textContent = theHobbit.author;
pages.textContent = `${theHobbit.pages} pages`;
status.textContent = theHobbit.read ? 'Read' : 'Not read yet';
