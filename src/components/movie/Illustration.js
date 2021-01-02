import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";

function MovieIllustration({ movie, component, extraClassNames }) {
  const [source, setSource] = useState();

  // Dynamically import image.
  useEffect(() => {
    import(`../../assets/movie/${movie}.jpg`)
      .then((module) => setSource(module.default))
      .catch(console.error);
  }, [movie]);

  return (
    <>
      {component ? (
        React.cloneElement(component, { src: source, alt: movie })
      ) : (
        <Image
          fluid
          className={`d-block my-2 mx-auto ${extraClassNames}`}
          rounded
          src={source}
          alt={movie}
        />
      )}
    </>
  );
}

export default MovieIllustration;
