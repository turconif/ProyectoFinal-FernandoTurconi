import React, { useState} from 'react'
import '../../styles/ItemCount.css';


export const ItemCount = ({stock, quantityRef}) => {

    const [quantity, setQuantity] = useState(1);

    const addQuantity = (e) => {
        
        if(stock !== 0){
            setQuantity(quantity === stock ? quantity : quantity+1);
        }        
    }

    const removeQuantity = (e) => {
        if(stock !== 0){
            setQuantity(quantity >1 ? quantity-1 : quantity)
        }
        
    }

    return (
        <div className='itemCountContainer'>
            <input type="button" value="-" className="itemCountSignal" onClick={e => removeQuantity(e)} />
            <input type="number" step="1" min="1" max="" name="quantity" value={quantity} title="Qty" className="itemCountQuantity" size="4" readOnly ref={quantityRef}/>
            <input type="button" value="+" className="itemCountSignal" onClick={e => addQuantity(e)} />
        </div>
    )
}
