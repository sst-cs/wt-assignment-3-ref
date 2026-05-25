# Assignment 3 – React Movie Browser

## Objective
Build a fully-featured **Movie Browser** single-page app using React with `useState`, `useEffect`, and a **custom hook**.

## Project Setup
```
npm install
npm run dev    # development server on http://localhost:5173
npm run build  # production build
```

## The Only File You Edit
**`src/App.jsx`** — everything goes here. Do **not** modify `main.jsx`, `index.html`, `package.json`, or `vite.config.js`.

---

## Features to Implement

### 1. Custom Hook – `useMovies`
Define a function (in `App.jsx`) called **`useMovies`** that takes four arguments:
```js
function useMovies(movies, query, sortBy, genre) { ... }
```
It must return the filtered and sorted array of movies based on the current `query`, `sortBy`, and `genre`.

### 2. State Variables (use `useState`)
Your `App` component must manage at least these state variables:

| Variable | Initial value | Purpose |
|---|---|---|
| `movies` | `[]` | All movies loaded from `data.json` |
| `loading` | `true` | True while fetching |
| `error` | `null` | Error message string, or null |
| `searchQuery` | `''` | Live search text |
| `sortBy` | `'rating'` | Current sort key (`'rating'`, `'title'`, `'year'`) |
| `filterGenre` | `'All'` | Currently selected genre |
| `favorites` | `[]` | Array of movie `id`s the user has favourited |
| `currentPage` | `1` | Current pagination page |

### 3. Data Loading (use `useEffect`)
- Fetch `./data.json` on **component mount** (empty dependency array).
- While fetching → `loading` is `true`, render `<div id="loading">`.
- On error → set `error`, render `<div id="error">`.
- On success → set `movies`, set `loading` to `false`.

### 4. Search Filter
`#search-input` filters movies by title (case-insensitive substring).  
Resetting the search should also reset `currentPage` to `1`.

### 5. Sorting
`<select id="sort-select">` with options: `rating` (desc), `title` (asc), `year` (desc).  
Handled inside `useMovies`.

### 6. Genre Filter
`<select id="genre-filter">` populated with `"All"` plus all unique genres from the loaded data.  
When a genre is selected, only movies from that genre are shown.

### 7. Favorites
- Each `.movie-card` has a **`<button className="favorite-btn">`** that toggles the movie in/out of favorites.
- Favorites are persisted in `localStorage` under the key **`"wt3_favorites"`**.
- Load favorites from `localStorage` on mount (initialise the `favorites` state from it).
- A **`<div id="favorites-list">`** section shows the titles of all favourited movies.

### 8. Pagination
- Show **5 movies per page** from the filtered+sorted list.
- `<button id="prev-page">` and `<button id="next-page">` navigate between pages.
- `<span id="page-info">` displays current page and total pages, e.g. `Page 2 of 4`.
- `prev-page` is disabled on page 1; `next-page` is disabled on the last page.
- Changing search, sort, or genre resets `currentPage` to `1`.

### 9. Stats Panel
`<div id="stats-panel">` always visible, showing:
- Total number of movies in the **filtered** list (before pagination)
- Average rating of the filtered list (rounded to 1 decimal place)
- The most common genre in the filtered list

---

## Required HTML Structure (exact IDs and class names)

| Element | ID or className | Notes |
|---|---|---|
| Root wrapper | `id="app"` | Outermost div |
| Search input | `id="search-input"` | Controlled text input |
| Sort dropdown | `id="sort-select"` | `<select>` element |
| Genre dropdown | `id="genre-filter"` | `<select>` element |
| Movie list | `id="movie-list"` | Container for all visible movie cards |
| Loading indicator | `id="loading"` | Shown only when `loading === true` |
| Error message | `id="error"` | Shown only when `error !== null` |
| Favorites list | `id="favorites-list"` | Shows favorited movie titles |
| Stats panel | `id="stats-panel"` | Always visible |
| Prev page button | `id="prev-page"` | Disabled on first page |
| Next page button | `id="next-page"` | Disabled on last page |
| Page info | `id="page-info"` | e.g. "Page 1 of 6" |
| Each movie card | `className="movie-card"` | One per visible movie |
| Movie title | `className="movie-title"` | Inside each card |
| Movie rating | `className="movie-rating"` | Inside each card |
| Movie genre | `className="movie-genre"` | Inside each card |
| Favorite button | `className="favorite-btn"` | Inside each card |

---

## Rules
- The **custom hook must be named `useMovies`** exactly.
- Favorites must use `localStorage` key **`"wt3_favorites"`**.
- Changing search/sort/genre must reset page to `1`.
- Do **not** install any additional npm packages.
- Do **not** modify any file other than `src/App.jsx` and `src/App.css`.
