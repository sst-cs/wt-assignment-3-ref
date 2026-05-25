# Assignment 3 – React Movie Browser

## Objective
Build a **Movie Browser** single-page application using **React** with `useState` and `useEffect` hooks.

## Project Setup
Your project uses **Vite + React**. The provided `package.json` already has all dependencies. Run:
```
npm install
npm run dev   # development server
npm run build # production build
```

## Required File
Edit only **`src/App.jsx`**. Do not modify `main.jsx`, `index.html`, `package.json`, or `vite.config.js`.

## What to Build

### State (useState)
Your component must manage at least three pieces of state:
| State variable | Purpose |
|---|---|
| `data` / `movies` | The array of movie objects loaded from `data.json` |
| `loading` | Boolean — `true` while fetching, `false` when done |
| `error` | Null or an error message string |

### Data Loading (useEffect)
- Use **`useEffect`** to fetch `data.json` on component mount.
- While loading, render an element with `id="loading"`.
- On error, render an element with `id="error"`.
- On success, render the list of movies.

### Required HTML Structure (exact IDs/classes)
| Element | ID / Class | Description |
|---|---|---|
| Root wrapper | `id="app"` | Outer container |
| Search input | `id="search-input"` | Filters movies by title |
| Movie list | `id="movie-list"` | `<ul>` or `<div>` holding all movie cards |
| Each movie card | `class="movie-card"` | One per movie |
| Movie title | `class="movie-title"` | Title text inside each card |
| Movie rating | `class="movie-rating"` | Rating text inside each card |
| Loading indicator | `id="loading"` | Shown while fetching |
| Error message | `id="error"` | Shown on fetch error |

### Search Filter
The `#search-input` filters `#movie-list` in real time — only cards whose title contains the search string (case-insensitive) are displayed.

## data.json
A `data.json` file is provided in the project root. Load it with:
```js
useEffect(() => {
  fetch('data.json')
    .then(r => r.json())
    .then(setMovies)   // or however you named your state setter
    .catch(err => setError(err.message));
}, []);
```

## Files to Submit
- `src/App.jsx` — your React component
- `src/App.css` — your styles (at least basic styling for cards)

## Rules
- Use the **exact IDs and classes** listed above — the autograder reads them.
- Use `useState` and `useEffect` — importing and using them is required.
- The `localStorage` key (if used for search) must be `"search"`.
- Do **not** modify `main.jsx`, `index.html`, `vite.config.js`, or `package.json`.

## Grading
Autograding runs automatically on every push.
