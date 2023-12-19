import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
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
import Size1_5kg from "./components/cake-sizes/Size1_5kg";
import Size2kg from "./components/cake-sizes/Size2kg";
import Size2_5kg from "./components/cake-sizes/Size2_5kg";
import Size3kg from "./components/cake-sizes/Size3kg";
import Size3_5kg from "./components/cake-sizes/Size3_5kg";
import Size4kg from "./components/cake-sizes/Size4kg";
import Size4_5kg from "./components/cake-sizes/Size4_5kg";
import Size5kg from "./components/cake-sizes/Size5kg";
import Size5_5kg from "./components/cake-sizes/Size5_5kg";
import Size6kg from "./components/cake-sizes/Size6kg";
import Size6_5kg from "./components/cake-sizes/Size6_5kg";
import Size7kg from "./components/cake-sizes/Size7kg";
import Size7_5kg from "./components/cake-sizes/Size7_5kg";
import Size8kg from "./components/cake-sizes/Size8kg";
import Size8_5kg from "./components/cake-sizes/Size8_5kg";
import Size9kg from "./components/cake-sizes/Size9kg";
import Size9_5kg from "./components/cake-sizes/Size9_5kg";
import Size10kg from "./components/cake-sizes/Size10kg";
import Size10_5kg from "./components/cake-sizes/Size10_5kg";

const App = () => {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addproducts" element={<Addproducts />} />
          <Route path="/Birthday" element={<BirthdayCakes />} />
          <Route path="/Anniversary" element={<AnniversaryCakes />} />
          <Route path="/Kids" element={<KidsCakes />} />
          <Route path="/Baby-Shower" element={<BabyShowerCakes />} />
          <Route path="/Sugar-Free" element={<SugarFreeCakes />} />
          <Route path="/Cup" element={<CupCakes />} />
          <Route path="/Engagement" element={<EngagementCakes />} />
          <Route path="/Heart-Shaped" element={<HeartShapedCakes />} />
          <Route path="/Theme" element={<ThemeCakes />} />
          <Route path="/6-Months" element={<SixMonthBirthdayCakes />} />
          <Route path="/Valentines" element={<ValentinesDayCakes />} />
          <Route path="/Wedding" element={<WeddingCakes />} />
          <Route path="/Chocolates" element={<CustomizedChocolate />} />
          <Route path="250g" element={<Size250g />} />
          <Route path="500g" element={<Size500g />} />
          <Route path="1kg" element={<Size1kg />} />
          <Route path="1.5kg" element={<Size1_5kg />} />
          <Route path="2kg" element={<Size2kg />} />
          <Route path="2.5kg" element={<Size2_5kg />} />
          <Route path="3kg" element={<Size3kg />} />
          <Route path="3.5kg" element={<Size3_5kg />} />
          <Route path="4kg" element={<Size4kg />} />
          <Route path="4.5kg" element={<Size4_5kg />} />
          <Route path="5kg" element={<Size5kg />} />
          <Route path="5.5kg" element={<Size5_5kg />} />
          <Route path="6kg" element={<Size6kg />} />
          <Route path="6.5kg" element={<Size6_5kg />} />
          <Route path="7kg" element={<Size7kg />} />
          <Route path="7.5kg" element={<Size7_5kg />} />
          <Route path="8kg" element={<Size8kg />} />
          <Route path="8.5kg" element={<Size8_5kg />} />
          <Route path="9kg" element={<Size9kg />} />
          <Route path="9.5kg" element={<Size9_5kg />} />
          <Route path="10kg" element={<Size10kg />} />
          <Route path="10.5kg" element={<Size10_5kg />} />
        </Routes>
      </BrowserRouter>
    </ProductsContextProvider>
  );
};

export default App;
