import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import { Badge, Card } from "react-bootstrap";
import MovieIllustration from "./Illustration";
import Rating from "./Rating";

function MovieContainer({ movie }) {
  return (
    <LinkContainer to={`movies/${movie.urlEncodedTitle}`}>
      <Card className="shadow">
        <MovieIllustration movie={movie.title} component={<Card.Img />} />
        <Card.Body>
          <Card.Title>
            <span className="align-bottom">{movie.title} </span>
            <Badge variant="dark">{movie.release_date}</Badge>
          </Card.Title>
          <Card.Text>
            <Rating value={movie.rt_score} displayStars />
          </Card.Text>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
}

export default MovieContainer;
