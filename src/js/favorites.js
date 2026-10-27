// Favorites module: save, remove and read favorite books from localStorage

const STORAGE_KEY = "favorites";

// Get all favorite books (empty list if there are none yet)
export function getFavorites() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Save the list of favorites
function saveFavorites(favorites) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

// Check if a book is already a favorite
export function isFavorite(bookKey) {
  return getFavorites().some((book) => book.key === bookKey);
}

// Add a book to favorites
export function addFavorite(book) {
  if (isFavorite(book.key)) return;

  const favorites = getFavorites();
  favorites.push(book);
  saveFavorites(favorites);
}

// Remove a book from favorites
export function removeFavorite(bookKey) {
  const favorites = getFavorites().filter((book) => book.key !== bookKey);
  saveFavorites(favorites);
}