import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider ({ children }){
    const [cart, setCart] = useState([]);

    const getFromCart = (code) => {
        return cart.find(ord => ord.code === code)
    };

    const isInCart = (code) => {
        return getFromCart(code);
    };

    const addToCart = (producto) => {        
        if (isInCart(producto && producto.code)) {
            alert("El producto ya se encuentra en el carrito");
        }else{
            setCart((prevState) =>[...prevState, producto])
            alert("Se agregaron " + producto.quantity + " Camisas")
        }        
    };

    const deleteItemCart = (code) =>{        
        if(isInCart(code)){
            let newArr = [];
            for(let i = 0; i<cart.length; i++){                
                if(cart[i].code !== code){
                    newArr.push(cart[i])                    
                }
            }
            setCart(newArr);
        }
    }

    const clearCart = () =>{
        let newArr = [];
        setCart(newArr);
    }

    

    return <CartContext.Provider value={{ cart, addToCart, deleteItemCart,clearCart}}>
        {children}
    </CartContext.Provider>
}