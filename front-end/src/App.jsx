import React from "react";
import {Route, Routes, Outlet} from "react-router-dom";
import "./App.css";
import "./normalize.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
    return(
        <>
        <Routes>
            <Route index path="/" element={<Home />}/>
            <Route path="/products/:category" element={<ProductList />}/>
            <Route path="/productPage/:id" element={<ProductPage />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/cart" element={<Cart />}/>
        </Routes>
        <Outlet />
        </>
    )
}

export default App;