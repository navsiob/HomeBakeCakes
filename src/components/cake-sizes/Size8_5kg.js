import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size8_5kg = () => {
  return (
    <div>
      <Header />
      <h1>8.5 KG Cakes</h1>
      <Cake category="8.5kg" />;
    </div>
  );
};

export default Size8_5kg;
