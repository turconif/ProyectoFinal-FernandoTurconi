import React from 'react'
import cart from '../../images/cart.svg'
import '../../styles/NavBar/CartWidget.css'

export const CartWidget = () => {
  return (
    <div className='cart-image'>
        <img src={cart} alt='Carrito de compra'/>
    </div>
  )
}
