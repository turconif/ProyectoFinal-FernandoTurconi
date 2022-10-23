import React from 'react'
import '../../styles/Item.css';

export const AddToCart = ({ stock, quantityRef }) => {   

    if (!stock) {
        return (
            <input type="button" className="main-border-button" value="Sin Stock"></input>        
        )
    }

    const onAdd = (e)=>{
        alert("Se agregaron " + quantityRef.current.value + " Camisas")
    }

    return (
        <input type="button" onClick={e=>onAdd()} className="main-border-button " value="Agregar al carrito"></input>        
    )
}
