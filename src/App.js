import React, { useEffect } from "react";
import Header from "./component/layouts/Header";
import Footer from "./component/layouts/Footer";
import Home from "./component/Home";
import Detail from "./component/demo/Detail";
import Contact from "./component/demo/Contact";
import Shop from "./component/demo/Shop";
import {Routes, Route } from "react-router-dom";
import ProductDetail from "./component/product/ProductDetail";
import Cart from "./component/cart/Cart";
import Login from "./component/user/Login";
import Registration from "./component/user/Registration";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/UserAction";
import Profile from "./component/user/profile/Profile";
import ChangePassword from "./component/user/profile/ChangePassword";
import UpdateProfile from "./component/user/profile/UpdateProfile";
import CheckOut from "./component/checkout/CheckOut";
import ForgetPassword from "./component/user/ForgetPassword";
import ResetPassword from "./component/user/ResetPassword";
import Shipping from "./component/cart/Shipping";
import ConfirmOrder from "./component/cart/ConfirmOrder";
import Payment from "./component/cart/Payment";
import AsusLaptop from "./component/category/categorylaptop/AsusLaptop";
import ShopPage2 from "./component/demo/ShopPage2";
import ShopPage3 from "./component/demo/ShopPage3";
import CategoryDetail from "./component/category/CategoryDetail";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch])
  return (
    <>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/asus_laptop" element={<AsusLaptop />} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/checkout" element={<CheckOut />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/categorylist" element={<CategoryDetail />} />
          <Route exact path="/productdetail/:id" element={<ProductDetail/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Registration/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/change_password" element={<ChangePassword/>} />
          <Route exact path="/update_profile" element={<UpdateProfile/>} />
          <Route exact path="/ForgetPassword" element={<ForgetPassword/>} />
          <Route exact path="/ResetPassword/:id" element={<ResetPassword/>} />
          <Route exact path="/shipping" element={<Shipping/>} />
          <Route exact path="/order/confirm" element={<ConfirmOrder/>} />
          <Route exact path="/payment" element={<Payment/>} />
          <Route exact path="/categorydetail" element={<CategoryDetail />} />
        </Routes>
      <Footer />
    </> 
  );
}

export default App;
