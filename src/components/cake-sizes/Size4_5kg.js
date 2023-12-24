import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Sized4_5kg = () => {
  return (
    <div>
      <Header />
      <h1>d4.5 KG Cakes</h1>
      <Cake category="d4.5kg" />;
    </div>
  );
};

export default Sized4_5kg;
