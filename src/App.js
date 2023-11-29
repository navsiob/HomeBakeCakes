import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Addproducts from "./components/Addproducts";
import { ProductsContextProvider } from "./global/ProductsContext";

class App extends Component {
  render() {
    return (
      <ProductsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/addproducts" Component={Addproducts} />
          </Routes>
        </BrowserRouter>
      </ProductsContextProvider>
    );
  }
}

export default App;
