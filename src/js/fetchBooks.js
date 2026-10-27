export async function fetchBooks(searchTerm = "fiction") {
  const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(searchTerm)}&limit=12&fields=key,title,author_name,cover_i,first_publish_year`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch books. Please try again.");
  }

  const data = await response.json();

  return data.docs;
}