import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size500g = () => {
  return (
    <div>
      <Header />
      <h1>500 Grams Cakes</h1>
      <Cake category="500g" />;
    </div>
  );
};

export default Size500g;
