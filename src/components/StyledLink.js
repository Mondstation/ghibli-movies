import React from "react";

function StyledLink({ to = "/", extraClasses = "", children, ...rest }) {
  return (
    <a
      {...rest}
      href={to}
      className={`btn btn-outline-primary w-100 ${extraClasses}`}
    >
      {children}
    </a>
  );
}

export default StyledLink;
