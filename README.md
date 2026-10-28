# paperwing.

**Find your next great read.** Paperwing is a responsive book explorer: search real books by title, save the ones you love to your own Favorites shelf, and come back to them any time.

🔗 **Live site:** [book-explorer-dmhd.vercel.app](https://book-explorer-dmhd.vercel.app)

---

## Features

- **Browse books.** The homepage loads real books from the [Open Library API](https://openlibrary.org/developers/api), with covers, titles and authors.
- **Search by title.** Type a title and press Search to see matching books.
- **Clear feedback.** A loading spinner shows while books load, and a message appears when no books are found or the request fails.
- **Save favorites.** Tap "Add to favorites" on any book. The button changes to "Saved ✓", and tapping it again removes the book.
- **Your shelf.** The Favorites page lists your saved books, plus a set of suggested books you can add with one click.
- **Remembered after refresh.** Favorites are stored in your browser with `localStorage`, so they are still there when you come back.
- **Works on every screen.** The layout adapts from phone to tablet to desktop, with a hamburger menu on small screens.
- **Three pages.** Home, Favorites and About, with a shared navigation bar and footer.

## Built with

- **HTML5**
- **Tailwind CSS v4** for styling and responsive design
- **Vanilla JavaScript** (ES modules, `async`/`await`, DOM events, `localStorage`)
- **Vite** as the development server and build tool
- **Open Library API** for book data and covers
- **Vercel** for hosting

## Project structure

```
book-explorer/
├── index.html            # Home: hero, search bar and book grid
├── favorites.html        # Favorites: saved books and suggested books
├── about.html            # About Paperwing
├── images/
│   └── hero.png          # Hero background image
├── src/
│   ├── styles.css        # Tailwind import and custom colors (beige, cream)
│   └── js/
│       ├── fetchBooks.js     # Calls the Open Library API (fetch + async/await)
│       ├── favorites.js      # Add, remove and read favorites in localStorage
│       ├── main.js           # Homepage: search, book cards, loading states
│       ├── favoritesPage.js  # Favorites page: saved and suggested books
│       └── nav.js            # Hamburger menu on small screens
├── vite.config.js        # Tailwind plugin and the three pages to build
└── package.json
```

## How it works

1. **`fetchBooks.js`** builds the Open Library search URL, fetches it with `fetch` and `await`, and returns the list of books. If the request fails, it throws an error.
2. **`main.js`** shows a spinner, calls `fetchBooks`, and creates a card for each book. If the list is empty, it shows "No books found"; if the request fails, it shows the error message.
3. **`favorites.js`** is a module that exports `getFavorites`, `addFavorite`, `removeFavorite` and `isFavorite`. Favorites are saved as JSON in `localStorage`.
4. **`favoritesPage.js`** reads your favorites and displays them, along with hardcoded suggested books. Every Add or Remove click updates `localStorage` and redraws the lists.
5. **`nav.js`** toggles the menu links when the hamburger button is clicked on small screens.

## Getting started

You need [Node.js](https://nodejs.org) installed.

```bash
# 1. Clone the repository
git clone https://github.com/Tetaaline/book-explorer.git
cd book-explorer

# 2. Install the dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open the link Vite prints, usually `http://localhost:5173`.

To build and preview the production version:

```bash
npm run build
npx vite preview
```

## GitHub workflow

- **Project board:** tasks tracked as issues on the *PaperWing development* board (Todo → In Progress → Done).
- **Feature branches:** each feature was built on its own branch, such as `feature/search`, `feature/favorites` and `feature/about`.
- **Pull requests:** every branch was merged into `main` through a pull request that closes its issues (for example, `Closes #10`).
- **Bug tracking:** bugs found while testing were logged as issues and fixed on `fix/` branches, such as `fix/favorites-nav`.

## Author

Built by **[Tetaaline](https://github.com/Tetaaline)**.