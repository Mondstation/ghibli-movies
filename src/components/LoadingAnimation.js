import React from "react";
import { Container, Spinner } from "react-bootstrap";

function LoadingAnimation() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div style={{ margin: "35vh 0 35vh 0" }}>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    </Container>
  );
}

export default LoadingAnimation;
