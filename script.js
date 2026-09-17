const addBookBtn = document.getElementById('addBookBtn');
const closeDialogBtn = document.getElementById('closeDialogBtn');
const bookDialog = document.querySelector('.bookDialog');
const bookForm = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');
const loginForm = document.getElementById('loginForm');

class Book {
    constructor(title, author, pages, year, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
        this.readStatus = readStatus;
    }

    toggleRead() {
        this.readStatus = this.readStatus === 'Read' ? 'Not Read' : 'Read';
    }
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, year, readStatus) {
    const newBook = new Book(title, author, pages, year, readStatus);
    myLibrary.push(newBook);
}

function renderLibrary() {
    bookList.textContent = "";

    myLibrary.forEach((book) => {
        const row = bookList.insertRow();

        const titleCell = row.insertCell();
        const authorCell = row.insertCell();
        const yearCell = row.insertCell();
        const pagesCell = row.insertCell();
        const statusCell = row.insertCell();
        const actionsCell = row.insertCell();

        titleCell.textContent = book.title;
        authorCell.textContent = book.author;
        pagesCell.textContent = book.pages;
        yearCell.textContent = book.year;
        statusCell.textContent = book.readStatus;
        statusCell.style.cursor = 'pointer';
        statusCell.addEventListener('click', () => {
            book.toggleRead();
            renderLibrary();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            const index = myLibrary.indexOf(book);
            myLibrary.splice(index, 1);
            renderLibrary();
        });
        actionsCell.appendChild(deleteBtn);
    });
    
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Admin' && password === '123456789') {
        addBookBtn.disabled = false;
        alert('Acesss granted');
    } else {
        alert('Access denied');
    }
});

addBookBtn.addEventListener('click', () => {
    bookDialog.showModal();
});

closeDialogBtn.addEventListener('click', () => {
    bookDialog.close();
    bookForm.reset();
});

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const pages = document.getElementById('pages').value;
    const readStatus = document.getElementById('readStatus').value;

    addBookToLibrary(title, author, pages, year, readStatus);
    renderLibrary();

    bookDialog.close();
    bookForm.reset();
});


