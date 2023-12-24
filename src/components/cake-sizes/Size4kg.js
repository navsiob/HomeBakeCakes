import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size4kg = () => {
  return (
    <div>
      <Header />
      <h1>4 KG Cakes</h1>
      <Cake category="4kg" />;
    </div>
  );
};

export default Size4kg;
