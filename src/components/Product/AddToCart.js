import React,{useContext} from 'react'
import '../../styles/Item.css';
import { CartContext } from "../../Context/CartContext"

export const AddToCart = ({ productId, stock, quantityRef, title, price }) => {   
    const {addToCart} = useContext(CartContext);

    //--------------------- NO TIENE STOCK ---------------------
    if (stock === 0) {        
        return (
            <input type="button" className="main-border-button" value="Sin Stock"></input>        
        )
    }    
    
    //--------------------- TIENE STOCK ---------------------
    const onAdd = (e)=>{
        addToCart({code:productId, quantity:parseInt(quantityRef.current.value), title:title, price:price, stock:stock});
    }

    return (        
        <input type="button" onClick={e=>onAdd()} className="main-border-button " value="Agregar al carrito"></input>        
    )
}
