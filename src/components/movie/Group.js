import React from "react";
import MovieContainer from "./Container";
import { Row, Col } from "react-bootstrap";

function MovieGroup({ movies }) {
  const rows = [];

  // Split movies to rows with three items.
  for (let i = 0; i < movies.length; i += 3) {
    rows.push(
      movies.slice(i, i + 3)
    );
  }

  return (
    <>
      {rows.map((row, index) => (
        <Row key={index}>
          {row.map((movie) => (
            <Col xs={12} md={true} key={movie.title} className="my-3">
              <MovieContainer movie={movie} />
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
}

export default MovieGroup;
