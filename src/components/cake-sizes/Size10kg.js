import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size10kg = () => {
  return (
    <div>
      <Header />
      <h1>10 KG Cakes</h1>
      <Cake category="10kg" />;
    </div>
  );
};

export default Size10kg;
