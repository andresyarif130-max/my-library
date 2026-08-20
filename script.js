const bookGrid = document.querySelector('#bookGrid');
const bookForm = document.querySelector('#bookForm');

const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const pagesInput = document.querySelector('#pagesInput');
const readInput = document.querySelector('#readInput');

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
    card.appendChild(title);

    const author = document.createElement('p');
    author.textContent = book.author;
    card.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = `${book.pages} pages`;
    card.appendChild(pages);

    const status = document.createElement('p');
    status.textContent = book.read ? 'Read' : 'Not read yet';
    card.appendChild(status);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    card.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
      const bookId = book.id;

      const index = myLibrary.findIndex((book) => {
        return book.id === bookId;
      });
      myLibrary.splice(index, 1);

      displayBooks();
    });

    const readButton = document.createElement('button');
    readButton.textContent = book.read ? 'Mark as unread' : 'Mark as read';
    readButton.classList.add('read-button');
    card.appendChild(readButton);

    readButton.addEventListener('click', () => {
      book.read = !book.read;
      displayBooks();
    });

    bookGrid.appendChild(card);
  });
}

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = Number(pagesInput.value);
  const read = readInput.checked;

  if (!title || !author || pages <= 0) {
    return;
  }

  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);

  displayBooks();

  bookForm.reset();
});

displayBooks();
