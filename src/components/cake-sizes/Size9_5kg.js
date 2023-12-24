import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size9_5kg = () => {
  return (
    <div>
      <Header />
      <h1>9.5 KG Cakes</h1>
      <Cake category="9.5kg" />;
    </div>
  );
};

export default Size9_5kg;
