import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";
import OrderTracking from "./pages/OrderTracking";
import './App.css'

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/seguimiento" element={<OrderTracking />} />
      </Routes>
      
      
    </>
  )
}

export default App
