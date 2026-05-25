import { useState, useEffect } from 'react'

// ────────────────────────────────────────────────────────────────────────────
//  Assignment 3 – React Movie Browser
//
//  Complete every TODO below.  Do NOT rename variables, IDs, or class names.
// ────────────────────────────────────────────────────────────────────────────

function App() {
  // TODO 1: Declare state variables using useState
  //   • movies        – array of all movies fetched from data.json  (initial: [])
  //   • searchQuery   – string for the live search filter           (initial: '')
  //   • loading       – boolean while data is being fetched         (initial: true)
  //   • error         – null or error message string                (initial: null)


  // TODO 2: Use useEffect to fetch './data.json' when the component mounts.
  //   • Set loading to true before fetching.
  //   • On success: store the parsed array in movies; set loading to false.
  //   • On failure: store the error message in error; set loading to false.


  // TODO 3: Derive filteredMovies from movies + searchQuery.
  //   Filter by title (case-insensitive substring match).
  const filteredMovies = [] // replace this line


  return (
    <div id="app">
      <h1>Movie Browser</h1>

      {/* TODO 4: Controlled search input */}
      {/* <input
            id="search-input"
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          /> */}

      {/* TODO 5: Loading indicator – render only when loading is true */}
      {/* <div id="loading">Loading...</div> */}

      {/* TODO 6: Error message – render only when error is not null */}
      {/* <div id="error">{error}</div> */}

      {/* TODO 7: Movie list */}
      <div id="movie-list">
        {filteredMovies.map(movie => (
          <div key={movie.id} className="movie-card">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-rating">Rating: {movie.rating}</p>
            <p>{movie.genre} · {movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
