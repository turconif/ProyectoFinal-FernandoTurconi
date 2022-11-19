import React, { useContext, useEffect, useState } from 'react'
import cartSVG from '../../images/cart.svg'
import '../../styles/NavBar/CartWidget.css'
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom";

export const CartWidget = () => {

  const [total, setTotal] = useState(0);
  const { cart } = useContext(CartContext);

  const setCartTotal = (items) => {
    let totalProd = 0
    items.forEach(element => {
      totalProd += element.quantity;
    })
    setTotal(totalProd)
  }

  useEffect(() => {
    setCartTotal(cart);
  }, [cart]);

  return (
    <Link to={`/Carrito`} className='navStyles' >
      <div className='cart-image'>
        <img src={cartSVG} alt='Carrito de compra' />
        <span>{total}</span>
      </div>
    </Link>
  )
}
