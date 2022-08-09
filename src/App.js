import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import Homepage from "./pages/Home/Homepage";
import {  HashRouter, Router, Route, Routes ,Switch, BrowserRouter} from "react-router-dom";
import CartPage from "./pages/Cart/Cart";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/CheckoutPage";
import Login from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignupPage/SignupPage";
import AuthProvider from "./Providers/AuthProvider";
import ProfilePage from "./pages/Profilepage/ProfilePage";
import Navbar from "./component/Navigation/Navbar.jsx";
import ProductPage from "./pages/Product/ProductPage.js";
import DetailProductPage from "./pages/DetailProductPage/DetailProductPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import ServicesPage from "./pages/ServicesPage/Services.jsx";
import ContactUsPage from "./pages/ContactUsPage/ContactusPage";

function App() {
  return (
    <BrowserRouter basename='/react'>

      <AuthProvider>
        <CartProvider>
          <ToastContainer />
          <Navbar />
          <Routes>           
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/productdetail" element={<DetailProductPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contactus" element={<ContactUsPage />} />
            <Route path="/" element={<Homepage />} exact />
            <Route path="*" element={<NotFoundPage />} />
            
          </Routes>
        </CartProvider>
      </AuthProvider>
    
    </BrowserRouter>
  );
}

export default App;
