import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size3kg = () => {
  return (
    <div>
      <Header />
      <h1>3 KG Cakes</h1>
      <Cake category="3kg" />;
    </div>
  );
};

export default Size3kg;
