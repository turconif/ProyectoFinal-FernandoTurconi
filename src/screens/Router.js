import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from '../components/Cart/Cart';
import { Menu } from "../components/NavBar/Menu"
import { CartProvider } from '../Context/CartContext';
import { ItemListContainer } from './Home/ItemListContainer';
import { ItemDetailContainer } from './Product/ItemDetailContainer.js';

const Ruta = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Home" element={<ItemListContainer />} />
          <Route path="/Category/:id" element={<ItemListContainer />} />
          <Route path="/Item/:id" element={<ItemDetailContainer />} />
          <Route path="/Carrito" element={<Cart />} />
          <Route path="/*" element={<div>404 not found</div>}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default Ruta;