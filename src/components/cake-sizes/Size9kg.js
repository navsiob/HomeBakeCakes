import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size9kg = () => {
  return (
    <div>
      <Header />
      <h1>9 KG Cakes</h1>
      <Cake category="9kg" />;
    </div>
  );
};

export default Size9kg;
