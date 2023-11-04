// Sample data for the book list (for testing)
const books = [
    { title: "Forty Rules Of Love", author: "Elif Shafak", isbn: "345890" },
    { title: "Romeo and Juliet", author: "William Shakespeare", isbn: "789012" },
    { title: "A Tale of Two Cities", author: "Charles Dickens", isbn: "672390" },
    { title: "Life on the Mississippi", author: "Mark Twain", isbn: "738926" }
];

// Function to display the book list
function displayBookList() {
    const bookListUl = document.getElementById("book-list-ul");
    bookListUl.innerHTML = ""; // Clear the existing list

    for (const book of books) {
        const li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author} (ISBN: ${book.isbn})`;
        bookListUl.appendChild(li);
    }
}

// Function to add a new book
function addBook() {
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const isbn = document.getElementById("book-isbn").value;

    // Check if the book already exists by ISBN
    if (books.some(book => book.isbn === isbn)) {
        alert("This book already exists.");
        return;
    }

    // Check if the book already exists by title and author (optional)
    if (books.some(book => book.title === title && book.author === author)) {
        alert("This book already exists.");
        return;
    }

    books.push({ title, author, isbn });
    displayBookList();
    document.getElementById("add-book-form").reset(); // Reset the form
}

// Function to search for a book
function searchBook() {
    const searchInput = document.getElementById("search-input").value;
    const searchResults = document.getElementById("search-results");
    searchResults.innerHTML = ""; // Clear the existing search results

    for (const book of books) {
        // You can implement a more advanced search here
        if (book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            book.author.toLowerCase().includes(searchInput.toLowerCase()) ||
            book.isbn.includes(searchInput)) {
            const li = document.createElement("li");
            li.textContent = `${book.title} by ${book.author} (ISBN: ${book.isbn})`;
            searchResults.appendChild(li);
        }
    }
}

// Initial display of the book list
displayBookList();

// Add event listeners
document.getElementById("add-book-form").addEventListener("submit", function (e) {
    e.preventDefault();
    addBook();
});

document.getElementById("search-button").addEventListener("click", searchBook);
