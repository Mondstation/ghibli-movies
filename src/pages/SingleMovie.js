import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import { Button } from "react-bootstrap";
import ErrorMessage from "../components/ErrorMessage";
import LoadingAnimation from "../components/LoadingAnimation";
import PageContainer from "./Container";
import MovieIllustration from "../components/movie/Illustration";
import MovieRating from "../components/movie/Rating";

import useApi from "../api/useApi";

function SingleMoviePage() {
  const history = useHistory();

  const { title: encodedTitle } = useParams();
  const [movie, loadMovie] = useApi(encodedTitle);
  const [error, setError] = useState();

  useEffect(() => loadMovie(setError), [encodedTitle, loadMovie]);

  if (error)
    return (
      <>
        <ErrorMessage>
          Fetching data from the ghibli movies api failed.
        </ErrorMessage>
        <LoadingAnimation />
      </>
    );

  if (!movie) return <LoadingAnimation />;

  return (
    <PageContainer title={movie.title} badge={movie.release_date}>
      <MovieIllustration movie={movie.title} />
      <div className="mt-3">
        <MovieRating value={movie.rt_score} displayStars />
      </div>
      <div className="my-2">
        <div>Director: <span className="text-secondary">{movie.director}</span></div>
        <div>Producer: <span className="text-secondary">{movie.producer}</span></div>
      </div>
      <p>{movie.description}</p>
      <Button
        variant="outline-primary"
        className="w-100"
        onClick={() => history.goBack()}
      >
        <i className="fas fa-arrow-left" /> Go back
      </Button>
    </PageContainer>
  );
}

export default SingleMoviePage;
