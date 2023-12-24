import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size6_5kg = () => {
  return (
    <div>
      <Header />
      <h1>6.5 KG Cakes</h1>
      <Cake category="6.5kg" />;
    </div>
  );
};

export default Size6_5kg;
