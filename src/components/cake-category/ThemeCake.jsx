import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const ThemeCake = () => {
  return (
    <div>
      <Header />
      <h1>Theme Cakes</h1>
      <Cake category="Theme-Cakes" />;
    </div>
  );
};

export default ThemeCake;
