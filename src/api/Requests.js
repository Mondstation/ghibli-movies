const BASE_URL = "https://ghibliapi.herokuapp.com";

const encodeSpaces = (text) => text.replace(/ /g, "%20");

let cache;

function getMovies() {
  if (cache !== undefined) return Promise.resolve(cache);

  return fetch(`${BASE_URL}/films`)
    .then((response) => response.json())
    .then((movies) =>
      movies.map((movie) => {
        movie.urlEncodedTitle = encodeSpaces(movie.title);
        return movie;
      })
    )
    .then((movies) => {
      cache = movies;
      return movies;
    });
}

function getMovieByTitle(title) {
  if (cache !== undefined)
    return Promise.resolve(cache.find((movie) => movie.title === title));

  title = encodeSpaces(title);

  return fetch(`${BASE_URL}/films?title=${title}`)
    .then((response) => response.json())
    .then((data) => data[0])
    .then((movie) => {
      movie.urlEncodedTitle = encodeSpaces(title);
      return movie;
    });
}

export { BASE_URL, getMovies, getMovieByTitle };
