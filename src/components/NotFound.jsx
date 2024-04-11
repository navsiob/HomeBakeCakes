import React from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <h1>404 - Page Not Found</h1>
      <p>
        Try these products: <a href="/">Home Bake Cakes </a>
      </p>
    </div>
  );
};

export default NotFound;
