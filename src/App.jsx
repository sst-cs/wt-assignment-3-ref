import { useState, useEffect } from 'react'

// ═══════════════════════════════════════════════════════════════════════════════
//  Assignment 3 – React Movie Browser
//
//  Build the WHOLE UI yourself inside the App component's return().
//  See README.md for the EXACT ids and classNames the autograder requires.
//  Do NOT rename the useMovies hook, the localStorage key, or any id/className.
// ═══════════════════════════════════════════════════════════════════════════════


// ── TODO A: Custom Hook ────────────────────────────────────────────────────────
// Define a hook named useMovies that accepts (movies, query, sortBy, genre) and
// returns the filtered + sorted array.
//   • query  – case-insensitive substring match on movie.title
//   • genre  – if genre !== 'All', keep only that genre
//   • sortBy – 'rating' (desc) | 'title' (asc) | 'year' (desc)   [apply after filtering]
//
//   function useMovies(movies, query, sortBy, genre) { ... return result }


function App() {

  // ── TODO B: State (useState) ──────────────────────────────────────────────
  //   movies([]) · loading(true) · error(null) · searchQuery('') ·
  //   sortBy('rating') · filterGenre('All') · favorites([]) · currentPage(1)
  //   Initialise favorites from localStorage:
  //     JSON.parse(localStorage.getItem('wt3_favorites') || '[]')

  // ── TODO C: Fetch on mount (useEffect, empty deps) ────────────────────────
  //   fetch('./data.json') → setMovies, setLoading(false); on error setError(...)

  // ── TODO D: Persist favorites (useEffect on [favorites]) ──────────────────
  //   localStorage.setItem('wt3_favorites', JSON.stringify(favorites))

  // ── TODO E: Derived data ──────────────────────────────────────────────────
  //   const filteredMovies = useMovies(movies, searchQuery, sortBy, filterGenre)
  //   pagination: 5 per page → pageMovies, totalPages
  //   genres list: ['All', ...new Set(movies.map(m => m.genre))]
  //   stats: count, average rating (toFixed(1)), most common genre

  // ── TODO F: render EVERYTHING below ───────────────────────────────────────
  // Required ids:      app, search-input, sort-select, genre-filter, movie-list,
  //                    loading, error, favorites-list, stats-panel,
  //                    prev-page, next-page, page-info
  // Required classes:  movie-card, movie-title, movie-rating, movie-genre, favorite-btn

  return (
    <div id="app">
      <h1>Movie Browser</h1>
      {/* TODO: build search input, sort + genre selects, stats panel,
          loading / error states, the movie list of cards, pagination
          controls, and the favorites list. */}
    </div>
  )
}

export default App
