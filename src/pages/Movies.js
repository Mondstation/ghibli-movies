import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import PageContainer from "./Container";
import MovieSortingForm from "../components/movie/SortingForm";
import MovieGroup from "../components/movie/Group";
import LoadingAnimation from "../components/LoadingAnimation";
import ErrorMessage from "../components/ErrorMessage";

import useApi from "../api/useApi";

function MoviesPage() {
  const query = new URLSearchParams(useLocation().search);

  const [movies, loadMovies] = useApi();
  const [error, setError] = useState();

  const [sortedMovies, setSortedMovies] = useState();
  const [sorting, setSorting] = useState(query.get("sorting"));
  const [direction, setDirection] = useState(query.get("direction"));

  // Fetch movies on mount
  useEffect(() => loadMovies(setError), [loadMovies]);

  // Copy fetched movies to sortedMovies.
  useEffect(() => {
    if (movies !== undefined) setSortedMovies(movies);
  }, [movies]);

  // Sort movies when the sorting type or direction changes.
  useEffect(() => {
    if (sorting === undefined || sortedMovies === undefined) return;

    const sortMovies = (ascending, descending) => {
      setSortedMovies((prevSortedMovies) =>
        prevSortedMovies.sort(
          direction === "Ascending" ? ascending : descending
        )
      );
    };

    switch (sorting) {
      case "Rating":
        sortMovies(
          (a, b) => a.rt_score - b.rt_score,
          (a, b) => b.rt_score - a.rt_score
        );
        break;
      case "Release":
        sortMovies(
          (a, b) => a.release_date - b.release_date,
          (a, b) => b.release_date - a.release_date
        );
        break;
      default:
      case "Title":
        sortMovies(
          (a, b) => (a.title > b.title ? 1 : -1),
          (a, b) => (a.title < b.title ? 1 : -1)
        );
        break;
    }
  }, [sorting, direction, sortedMovies]);

  // Show error if api isn't available.
  if (error)
    return (
      <>
        <ErrorMessage>
          Fetching data from the ghibli movies api failed.
        </ErrorMessage>
        <LoadingAnimation />
      </>
    );

  return (
    <PageContainer title="Movies" badge={movies != null ? movies.length : 0}>
      {movies == null ? (
        <LoadingAnimation />
      ) : (
        <>
          <MovieSortingForm
            sorting={sorting}
            setSorting={setSorting}
            direction={direction}
            setDirection={setDirection}
            options={["Title", "Rating", "Release"]}
            defaultOption="Title"
          />
          <MovieGroup movies={sortedMovies != null ? sortedMovies : movies} />
        </>
      )}
    </PageContainer>
  );
}

export default MoviesPage;
