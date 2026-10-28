import { getFavorites, addFavorite, removeFavorite, isFavorite } from "./favorites.js";

const favoritesList = document.querySelector("#favorites-list");
const favoritesEmpty = document.querySelector("#favorites-empty");
const suggestedList = document.querySelector("#suggested-list");

// Hardcoded books the user can add 
   const suggestedBooks = [
     { key: "sample-1", title: "Things Fall Apart", author_name: ["Chinua Achebe"], isbn: "9780385474542" },
     { key: "sample-2", title: "Purple Hibiscus", author_name: ["Chimamanda Ngozi Adichie"], cover_i: 12063933 },,
     { key: "sample-3", title: "The Hobbit", author_name: ["J. R. R. Tolkien"], isbn: "9780547928227" },
     { key: "sample-4", title: "Dune", author_name: ["Frank Herbert"], isbn: "9780441172719" },
     { key: "sample-5", title: "Pride and Prejudice", author_name: ["Jane Austen"], isbn: "9780141439518" },
     { key: "sample-6", title: "Matilda", author_name: ["Roald Dahl"], isbn: "9780142410370" },
   ];

// Create one book card with a button
function createCard(book, buttonText, buttonClass, onClick) {
  const card = document.createElement("article");
    card.className = "flex flex-col rounded-xl bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg";

  const cover = document.createElement("img");
  cover.className = "mb-3 aspect-[2/3] w-full rounded-lg object-cover";
  cover.alt = `Cover of ${book.title}`;

    if (book.cover_i) {
     cover.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
   } else if (book.isbn) {
     cover.src = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`;
   } else {
     cover.src = "https://placehold.co/300x450?text=No+Cover";
   }

  const title = document.createElement("h3");
  title.className = "line-clamp-2 font-semibold text-stone-900";
  title.textContent = book.title;

  const author = document.createElement("p");
  author.className = "mt-1 mb-3 flex-1 text-sm text-stone-500";
  author.textContent = book.author_name?.[0] || "Unknown author";

  const button = document.createElement("button");
  button.className = `rounded-full px-4 py-2 text-sm font-semibold ${buttonClass}`;
  button.textContent = buttonText;
  button.addEventListener("click", onClick);

  card.append(cover, title, author, button);
  return card;
}

// Show the saved favorites
function displayFavorites() {
  const favorites = getFavorites();
  favoritesList.innerHTML = "";

  if (favorites.length === 0) {
    favoritesEmpty.classList.remove("hidden");
  } else {
    favoritesEmpty.classList.add("hidden");
  }

  favorites.forEach((book) => {
    const card = createCard(
      book,
      "Remove",
      "border border-stone-300 text-stone-700 hover:border-stone-900",
      () => {
        removeFavorite(book.key);
        displayAll();
      }
    );
    favoritesList.append(card);
  });
}

// Show the suggested books
function displaySuggested() {
  suggestedList.innerHTML = "";

  suggestedBooks.forEach((book) => {
    let card;

    if (isFavorite(book.key)) {
      card = createCard(book, "Added ✓", "bg-emerald-50 text-emerald-800", () => {
        removeFavorite(book.key);
        displayAll();
      });
    } else {
      card = createCard(book, "Add to favorites", "bg-emerald-900 text-white hover:bg-emerald-950", () => {
        addFavorite(book);
        displayAll();
      });
    }

    suggestedList.append(card);
  });
}

// Redraw both lists
function displayAll() {
  displayFavorites();
  displaySuggested();
}

displayAll();