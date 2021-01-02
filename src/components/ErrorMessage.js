import React from "react";
import { Container, Alert } from "react-bootstrap";

function ErrorMessage({ message, children }) {
  return (
    <Container>
      <Alert variant="danger" className="mt-3">
        <Alert.Heading>Oops! An error occured...</Alert.Heading>
        <p>{message ? message : children}</p>
      </Alert>
    </Container>
  );
}

export default ErrorMessage;
