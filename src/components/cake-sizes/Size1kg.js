import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size1kg = () => {
  return (
    <div>
      <Header />
      <h1>1 KG Cakes</h1>
      <Cake category="1kg" />;
    </div>
  );
};

export default Size1kg;
