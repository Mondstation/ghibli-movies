import React from "react";
import { Container, Badge } from "react-bootstrap";

function PageContainer({ title, children, badge }) {
  return (
    <Container className="my-3">
      {title && (
        <h1 className="text-center my-5">
          {title}{" "}
          {badge && (
            <Badge pill variant="dark">
              {badge}
            </Badge>
          )}
        </h1>
      )}
      {children}
    </Container>
  );
}

export default PageContainer;
