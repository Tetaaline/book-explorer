import { fetchBooks } from "./fetchBooks.js";

const bookList = document.querySelector("#book-list");
const bookStatus = document.querySelector("#book-status");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

// Show a spinner while books are loading
function showLoading() {
  bookList.innerHTML = "";
  bookStatus.innerHTML = `
    <div class="flex flex-col items-center gap-3 py-16 text-stone-500">
      <div class="h-10 w-10 animate-spin rounded-full border-4 border-stone-200 border-t-emerald-700"></div>
      <p>Loading books...</p>
    </div>
  `;
}

// Show a message (no results or error)
function showMessage(text) {
  bookList.innerHTML = "";
  bookStatus.innerHTML = `<p class="py-16 text-center text-stone-500">${text}</p>`;
}

// Create one book card
function createCard(book) {
  const card = document.createElement("article");
  card.className = "rounded-xl bg-white p-3 shadow-sm hover:shadow-md";

  const cover = document.createElement("img");
  cover.className = "mb-3 aspect-[2/3] w-full rounded-lg object-cover";
  cover.alt = `Cover of ${book.title}`;

  if (book.cover_i) {
    cover.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
  } else {
    cover.src = "https://placehold.co/300x450?text=No+Cover";
  }

  const title = document.createElement("h3");
  title.className = "line-clamp-2 font-semibold text-stone-900";
  title.textContent = book.title;

  const author = document.createElement("p");
  author.className = "mt-1 text-sm text-stone-500";
  author.textContent = book.author_name?.[0] || "Unknown author";

  card.append(cover, title, author);
  return card;
}

// Display books on the homepage
function displayBooks(books) {
  bookStatus.innerHTML = "";
  bookList.innerHTML = "";

  if (books.length === 0) {
    showMessage("No books found. Try another title.");
    return;
  }

  books.forEach((book) => {
    bookList.append(createCard(book));
  });
}

// Fetch and display books
async function loadBooks(searchTerm = "fiction") {
  showLoading();

  try {
    const books = await fetchBooks(searchTerm);
    displayBooks(books);
  } catch (error) {
    showMessage(error.message);
  }
}

// Search for books by title
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchTerm = searchInput.value.trim();

  if (searchTerm) {
    loadBooks(searchTerm);
  } else {
    loadBooks(); // empty search shows the default books again
  }
});

// Load books when the homepage opens
loadBooks();