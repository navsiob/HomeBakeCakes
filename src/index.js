import React from "react";
import reportWebVitals from "./reportWebVitals";
import { hydrate, render } from "react-dom";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Catigory from "./components/Category";
import Addproducts from "./components/Addproducts";
import { ProductsContextProvider } from "./global/ProductsContext";
//cake category
import BirthdayCakes from "./components/cake-category/BirthdayCake";
import AnniversaryCakes from "./components/cake-category/AnniversaryCake";
import KidsCakes from "./components/cake-category/KidsCake";
import BabyShowerCakes from "./components/cake-category/BabyShowerCake";
import SugarFreeCakes from "./components/cake-category/SugarFreeCake";
import CupCakes from "./components/cake-category/CupCake";
import EngagementCakes from "./components/cake-category/EngagementCake";
import HeartShapedCakes from "./components/cake-category/HeartShapedCake";
import ThemeCakes from "./components/cake-category/ThemeCake";
import SixMonthBirthdayCakes from "./components/cake-category/SixMonthCake";
import ValentinesDayCakes from "./components/cake-category/ValentinesDayCake";
import WeddingCakes from "./components/cake-category/WeddingCake";
import CustomizedChocolate from "./components/cake-category/CustomizedChocolate";
//cake Sizes
import Size250g from "./components/cake-sizes/Size250g";
import Size500g from "./components/cake-sizes/Size500g";
import Size1kg from "./components/cake-sizes/Size1kg";
import Size15kg from "./components/cake-sizes/Size1_5kg";
import Size2kg from "./components/cake-sizes/Size2kg";
import Size25kg from "./components/cake-sizes/Size2_5kg";
import Size3kg from "./components/cake-sizes/Size3kg";
import Size35kg from "./components/cake-sizes/Size3_5kg";
import Size4kg from "./components/cake-sizes/Size4kg";
import Size45kg from "./components/cake-sizes/Size4_5kg";
import Size5kg from "./components/cake-sizes/Size5kg";
import Size55kg from "./components/cake-sizes/Size5_5kg";
import Size6kg from "./components/cake-sizes/Size6kg";
import Size65kg from "./components/cake-sizes/Size6_5kg";
import Size7kg from "./components/cake-sizes/Size7kg";
import Size75kg from "./components/cake-sizes/Size7_5kg";
import Size8kg from "./components/cake-sizes/Size8kg";
import Size85kg from "./components/cake-sizes/Size8_5kg";
import Size9kg from "./components/cake-sizes/Size9kg";
import Size95kg from "./components/cake-sizes/Size9_5kg";
import Size10kg from "./components/cake-sizes/Size10kg";
import Size105kg from "./components/cake-sizes/Size10_5kg";

const App = (
  <div>
    <ProductsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Catigory />} />
          <Route path="Catigory" element={<Catigory />} />
          <Route path="addproducts" element={<Addproducts />} />
          <Route path="Birthday" element={<BirthdayCakes />} />
          <Route path="Anniversary" element={<AnniversaryCakes />} />
          <Route path="Kids" element={<KidsCakes />} />
          <Route path="Baby-Shower" element={<BabyShowerCakes />} />
          <Route path="Sugar-Free" element={<SugarFreeCakes />} />
          <Route path="Cup" element={<CupCakes />} />
          <Route path="Engagement" element={<EngagementCakes />} />
          <Route path="Heart-Shaped" element={<HeartShapedCakes />} />
          <Route path="Theme" element={<ThemeCakes />} />
          <Route path="6-Months" element={<SixMonthBirthdayCakes />} />
          <Route path="Valentines" element={<ValentinesDayCakes />} />
          <Route path="Wedding" element={<WeddingCakes />} />
          <Route path="Chocolates" element={<CustomizedChocolate />} />
          <Route path="250-gram-cakes" element={<Size250g />} />
          <Route path="500-gram-cakes" element={<Size500g />} />
          <Route path="1-KG-Cakes" element={<Size1kg />} />
          <Route path="1.5-KG-Cakes" element={<Size15kg />} />
          <Route path="2-KG-Cakes" element={<Size2kg />} />
          <Route path="2.5-KG-Cakes" element={<Size25kg />} />
          <Route path="3-KG-Cakes" element={<Size3kg />} />
          <Route path="3.5-KG-Cakes" element={<Size35kg />} />
          <Route path="4-KG-Cakes" element={<Size4kg />} />
          <Route path="4.5-KG-Cakes" element={<Size45kg />} />
          <Route path="5-KG-Cakes" element={<Size5kg />} />
          <Route path="5.5-KG-Cakes" element={<Size55kg />} />
          <Route path="6-KG-Cakes" element={<Size6kg />} />
          <Route path="6.5-KG-Cakes" element={<Size65kg />} />
          <Route path="7-KG-Cakes" element={<Size7kg />} />
          <Route path="7.5-KG-Cakes" element={<Size75kg />} />
          <Route path="8-KG-Cakes" element={<Size8kg />} />
          <Route path="8.5-KG-Cakes" element={<Size85kg />} />
          <Route path="9-KG-Cakes" element={<Size9kg />} />
          <Route path="9.5-KG-Cakes" element={<Size95kg />} />
          <Route path="10-KG-Cakes" element={<Size10kg />} />
          <Route path="10.5-KG-Cakes" element={<Size105kg />} />
        </Routes>
      </BrowserRouter>
    </ProductsContextProvider>
  </div>
);

ReactDOM.render(App, document.getElementById("root"));
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(App, rootElement);
} else {
  ReactDOM.render(App, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
