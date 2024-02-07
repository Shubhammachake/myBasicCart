// App.js

import React, { useState, useEffect } from "react";
import Bar from "./component/Bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./component/Cart";
import Home from "./component/Home";
import SignUpModal from "./component/SignUpModal";
import Login from "./component/Login";
import Products from "./component/Products";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Bar />
        <Routes>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="/SignUpModal" element={<SignUpModal />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
