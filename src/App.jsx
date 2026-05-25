import { useState, useEffect } from 'react'

// ═══════════════════════════════════════════════════════════════════════════════
//  Assignment 3 – React Movie Browser
//
//  Complete every TODO. Do NOT rename functions, IDs, or class names.
//  You only edit this file (and App.css).
// ═══════════════════════════════════════════════════════════════════════════════


// ── TODO A: Custom Hook ────────────────────────────────────────────────────────
// Define a function called useMovies that accepts (movies, query, sortBy, genre)
// and returns the filtered + sorted array.
//
// Filtering rules:
//   • query   – case-insensitive substring match on movie.title
//   • genre   – if genre !== 'All', only include movies of that genre
//
// Sorting rules (apply AFTER filtering):
//   • sortBy === 'rating' → sort descending by rating
//   • sortBy === 'title'  → sort ascending  by title (alphabetical)
//   • sortBy === 'year'   → sort descending by year
//
// function useMovies(movies, query, sortBy, genre) {
//   ...
//   return filteredSorted
// }


// ── Main Component ─────────────────────────────────────────────────────────────
function App() {

  // ── TODO B: State Variables ──────────────────────────────────────────────────
  // Declare state with useState for each of the following:
  //   movies       – []        (all movies from data.json)
  //   loading      – true      (fetching in progress)
  //   error        – null      (fetch error message or null)
  //   searchQuery  – ''        (live search string)
  //   sortBy       – 'rating'  ('rating' | 'title' | 'year')
  //   filterGenre  – 'All'     (selected genre or 'All')
  //   favorites    – []        (array of favorited movie ids, loaded from localStorage)
  //   currentPage  – 1         (pagination)
  //
  // Load the initial value of favorites from localStorage:
  //   JSON.parse(localStorage.getItem('wt3_favorites') || '[]')


  // ── TODO C: Fetch Data on Mount ──────────────────────────────────────────────
  // Use useEffect (empty dependency array) to:
  //   1. fetch('./data.json')
  //   2. parse the JSON
  //   3. setMovies(data)  →  setLoading(false)
  //   on error: setError(err.message)  →  setLoading(false)


  // ── TODO D: Persist Favorites to localStorage ─────────────────────────────────
  // Use a second useEffect that runs whenever `favorites` changes:
  //   localStorage.setItem('wt3_favorites', JSON.stringify(favorites))


  // ── TODO E: Filtered + Sorted Movies ─────────────────────────────────────────
  // Call your useMovies hook:
  //   const filteredMovies = useMovies(movies, searchQuery, sortBy, filterGenre)
  const filteredMovies = []   // replace this line


  // ── TODO F: Pagination ────────────────────────────────────────────────────────
  // Derive:
  //   const MOVIES_PER_PAGE = 5
  //   const totalPages      = Math.max(1, Math.ceil(filteredMovies.length / MOVIES_PER_PAGE))
  //   const pageMovies      = filteredMovies.slice((currentPage-1)*MOVIES_PER_PAGE, currentPage*MOVIES_PER_PAGE)
  const pageMovies = filteredMovies   // replace with sliced page


  // ── TODO G: Favorites Toggle ──────────────────────────────────────────────────
  // function toggleFavorite(id) {
  //   setFavorites(prev =>
  //     prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
  //   )
  // }


  // ── TODO H: Unique Genres for Dropdown ────────────────────────────────────────
  // const genres = ['All', ...new Set(movies.map(m => m.genre))].sort()


  // ── TODO I: Stats ────────────────────────────────────────────────────────────
  // Compute from filteredMovies (not pageMovies):
  //   totalCount  = filteredMovies.length
  //   avgRating   = (average of filteredMovies ratings).toFixed(1)  →  '0.0' if empty
  //   topGenre    = most-frequent genre in filteredMovies            →  '—' if empty


  return (
    <div id="app">
      <h1>Movie Browser</h1>

      {/* ── TODO J: Search Input ─────────────────────────────────────── */}
      {/* Controlled input, id="search-input", updates searchQuery state  */}
      {/* When searchQuery changes, also reset currentPage to 1           */}

      {/* ── TODO K: Sort & Genre Controls ───────────────────────────── */}
      {/* <select id="sort-select">  with options: rating, title, year   */}
      {/* <select id="genre-filter"> populated from the genres array     */}
      {/* Both should reset currentPage to 1 when changed               */}

      {/* ── TODO L: Loading & Error States ──────────────────────────── */}
      {/* Show <div id="loading">...</div> when loading === true         */}
      {/* Show <div id="error">...</div>   when error !== null           */}

      {/* ── TODO M: Stats Panel ─────────────────────────────────────── */}
      {/* <div id="stats-panel"> showing totalCount, avgRating, topGenre */}

      {/* ── TODO N: Movie List ──────────────────────────────────────── */}
      <div id="movie-list">
        {pageMovies.map(movie => (
          <div key={movie.id} className="movie-card">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-rating">⭐ {movie.rating}</p>
            <p className="movie-genre">{movie.genre}</p>
            <p>{movie.year}</p>
            {/* TODO: <button className="favorite-btn" onClick={() => toggleFavorite(movie.id)}>
                  {favorites.includes(movie.id) ? '❤️ Remove' : '🤍 Favorite'}
                </button> */}
          </div>
        ))}
      </div>

      {/* ── TODO O: Pagination ──────────────────────────────────────── */}
      {/* <button id="prev-page" disabled={currentPage === 1}  onClick={...}>Prev</button>  */}
      {/* <span   id="page-info">Page {currentPage} of {totalPages}</span>                  */}
      {/* <button id="next-page" disabled={currentPage===totalPages} onClick={...}>Next</button> */}

      {/* ── TODO P: Favorites List ──────────────────────────────────── */}
      {/* <div id="favorites-list">
            <h2>Favorites</h2>
            {favorites.map(id => { const m = movies.find(m=>m.id===id); return m ? <p key={id}>{m.title}</p> : null })}
          </div> */}

    </div>
  )
}

export default App
