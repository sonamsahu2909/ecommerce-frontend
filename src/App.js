import React from "react";
import Header from "./component/layouts/Header";
import Footer from "./component/layouts/Footer";
import Home from "./component/Home";
import CheckOut from "./component/demo/CheckOut";
import Detail from "./component/demo/Detail";
import Contact from "./component/demo/Contact";
import Shop from "./component/demo/Shop";
import {Routes, Route } from "react-router-dom";
import ProductDetail from "./component/product/ProductDetail";
import Cart from "./component/cart/Cart";
import Login from "./component/user/Login";
import Registration from "./component/user/Registration";

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/checkout" element={<CheckOut />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/productdetail/:id" element={<ProductDetail/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Registration/>} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
