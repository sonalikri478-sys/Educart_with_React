import { Routes, Route , Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";
import Products from "../pages/Products";
import useCart from "../pages/CartContext";
import Profile from "../pages/Profile";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import CategoryPage from "../pages/Categories";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Deals from "../pages/Deals";
import ProductDetail from "../pages/ProductDetail";



function AppRoutes() {
  return (
      <Routes>

        <Route path="/" element={<Navigate to="/Login" replace />} />

        {/* Authentication */}

  <Route element={<AuthLayout />}>
    <Route part="/"  element={<Login />} />

    <Route path="/login" element={<Login />} />

    <Route path="/register" element={<Register />} />

    
  </Route>

  {/* Main Website */}

  <Route element={<MainLayout />}>

    <Route path="/home" element={<Home />} />
   
    <Route path="/products" element={<Products />} />

    <Route path="/Cart" element={<Cart />} />

    <Route path="/deals" element={<Deals />} />

    <Route path="/products/:id" element={<ProductDetail />} />



    <Route path="/Wishlist" element={<Wishlist />} />

      <Route path="/categories" element={<CategoryPage />} />     

    <Route path="/checkout" element={<Checkout />} />

    <Route path="/profile" element={<Profile />} />

     <Route path="/categories/:slug" element={<CategoryPage />} />


  </Route>

  

</Routes>

  );
}

export default AppRoutes;