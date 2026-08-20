const bookGrid = document.querySelector('#bookGrid');

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
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
  bookGrid.innerHTML = '';
  myLibrary.forEach((book) => {
    const card = document.createElement('div');
    card.classList.add('book-card');

    card.dataset.id = book.id;

    const title = document.createElement('h3');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = book.author;

    const pages = document.createElement('p');
    pages.textContent = `${book.pages} pages`;

    const status = document.createElement('p');
    status.textContent = book.read ? 'Read' : 'Not read yet';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status);
    card.appendChild(deleteButton);

    bookGrid.appendChild(card);

    deleteButton.addEventListener('click', () => {
      const bookId = book.id;

      const index = myLibrary.findIndex((book) => {
        return book.id === bookId;
      });
      myLibrary.splice(index, 1);

      displayBooks();
    });
  });
}

displayBooks();
