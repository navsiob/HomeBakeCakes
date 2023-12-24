import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size2kg = () => {
  return (
    <div>
      <Header />
      <h1>2 KG Cakes</h1>
      <Cake category="2kg" />;
    </div>
  );
};

export default Size2kg;
