import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size7_5kg = () => {
  return (
    <div>
      <Header />
      <h1>7.5 KG Cakes</h1>
      <Cake category="7.5kg" />;
    </div>
  );
};

export default Size7_5kg;
