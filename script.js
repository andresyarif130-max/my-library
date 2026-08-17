const bookGrid = document.querySelector('#bookGrid');

const card = document.createElement('div');
const title = document.createElement('h3');

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

card.classList.add('book-card');
card.appendChild(title);
bookGrid.appendChild(card);
