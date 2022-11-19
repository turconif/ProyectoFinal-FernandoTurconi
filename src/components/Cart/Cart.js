import React, { useContext, useState, useEffect } from 'react'
import '../../styles/Item.css';
import { CartContext } from "../../Context/CartContext"
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import { sendProductsOrder,updateProductStock } from '../../APIs/productsApi';

export const Cart = () => {

    const { cart, deleteItemCart,clearCart } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    const setCartTotal = (items) => {
        let totalProd = 0
        items.forEach(element => {
            totalProd += element.price * element.quantity;
        })
        setTotal(totalProd)
    }

    const deleteItem = (code) => {
        deleteItemCart(code)
    }

    const sendItems = () => {
        let totalProd = 0
        cart.forEach(element => {
            totalProd += element.price * element.quantity;
        })
        let d = new Date()
        let newDate = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();

        const order = {
            buyer: { name: "Fernando", phone: 11222324, mail: "Fernando@gmail.com" },
            items: cart,
            date: newDate,
            total: totalProd
        }
        sendOrder(order);
    }
    
    const sendOrder = async(order)=>{
        try {      
            await sendProductsOrder(order);
            await updateProductStock(cart);
            clearCart();
          } catch (error) {
      
          } 
    }

    useEffect(() => {
        setCartTotal(cart);
    }, [cart]);

    if (cart && cart.length !== 0) {
        return (
            <div className='max-width'>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Cantidad</th>
                            <th>Titulo</th>
                            <th>Valor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product) => (
                            <tr key={product.code}>
                                <td>{product.quantity}</td>
                                <td>{product.title}</td>
                                <td>${product.price}</td>
                                <td className='deleteBtn'><button onClick={() => { deleteItem(product.code) }}>Quitar</button></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </Table>

                <div className='totalContainer'>
                    <div className='totalStyle'>Total: {' '} ${total} </div>
                </div>
                <div className='totalContainer'>
                    <button className='buyStyle' onClick={() => { sendItems() }}>Comprar</button>
                </div>

            </div>
        )
    }

    return (
        <div className='max-width txt-align-center'>
            <Alert variant='dark'>
                El carrito se encuentra vacio {' '}
                <Alert.Link href="/Home">Ir de compras</Alert.Link>.
            </Alert>
        </div>
    )

}
