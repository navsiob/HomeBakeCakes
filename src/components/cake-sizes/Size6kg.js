import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size6kg = () => {
  return (
    <div>
      <Header />
      <h1>6 KG Cakes</h1>
      <Cake category="6kg" />;
    </div>
  );
};

export default Size6kg;
