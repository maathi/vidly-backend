const getMovies = require("./moviesService");
const getGenres = require("./genreService");

function movies({ id }) {
  if (!id) return getMovies();

  return getMovies().filter((m) => m.id.toString() == id);
}

function genres({ id }) {
  if (!id) return getGenres();

  return getGenres().filter((g) => g.id == id);
}

resolver = { movies, genres };
module.exports = resolver;
