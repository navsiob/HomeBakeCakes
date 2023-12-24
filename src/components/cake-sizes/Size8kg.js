import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size8kg = () => {
  return (
    <div>
      <Header />
      <h1>8 KG Cakes</h1>
      <Cake category="8kg" />;
    </div>
  );
};

export default Size8kg;
