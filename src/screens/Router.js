import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Menu} from "../components/NavBar/Menu"
import { ItemListContainer } from './Home/ItemListContainer';
import { ItemDetailContainer } from './Product/ItemDetailContainer.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/Home" element={<ItemListContainer />} />
        <Route path="/Category/:id" element={<ItemListContainer />} />
        <Route path="/Item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;