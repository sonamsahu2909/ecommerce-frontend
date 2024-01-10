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
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/checkout" element={<CheckOut />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/shop" element={<Shop />} />
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
        </Routes>
      <Footer />
    </> 
  );
}

export default App;
