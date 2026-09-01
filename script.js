const addBookBtn = document.getElementById('addBookBtn');
const closeDialogBtn = document.getElementById('closeDialogBtn');
const bookDialog = document.querySelector('.bookDialog');
const bookForm = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');

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

    const row = document.createElement('tr');

    const tdTitle = document.createElement('td');
    tdTitle.textContent = title;

    const tdAuthor = document.createElement('td');
    tdAuthor.textContent = author;

    const tdYear = document.createElement('td');
    tdYear.textContent = year;

    const tdPages = document.createElement('td');
    tdPages.textContent = pages;

    const tdStatus = document.createElement('td');
    const statusBadge = document.createElement('span');
    statusBadge.className =`status-badge ${readStatus === 'Read' ? 'read' : 'not-read'}`;
    statusBadge.textContent = readStatus;
    tdStatus.appendChild(statusBadge);

    const tdActions = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => 
        row.remove());
    tdActions.appendChild(deleteBtn);

    row.append(tdTitle, tdAuthor, tdYear, tdPages, tdStatus, tdActions);
    bookList.appendChild(row);

    bookDialog.close();
    bookForm.reset();
});


