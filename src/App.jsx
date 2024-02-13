/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";
import data from "../src/Components/Back/Data/Data";
import Header from "./Components/Front/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Components/Front/Products/Products";
import SignUp from "./Components/Front/SignUp/SignUp";
import Cart from "./Components/Front/Cart/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products productItems={data} />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
