import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size250g = () => {
  return (
    <div>
      <Header />
      <h1>250 Grams Cakes</h1>
      <Cake category="250g" />;
    </div>
  );
};

export default Size250g;
