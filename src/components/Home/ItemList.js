import React from 'react'
import {productsApi} from '../../APIs/productsApi';
import { useEffect, useState } from 'react';
import { Item } from './Item.js';

export const ItemList = ({ category }) => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const apiProducts = await productsApi();
        setProducts(apiProducts);
    }

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <div className='cardContainer'>
            {category ? 
                products.filter((p=>p.category.toLowerCase() === category.toLowerCase())).map((product) => (
                    <div key={product.productCode}>
                        <Item        
                            productCode={product.productCode}                    
                            title={product.title}
                            image={product.image}
                            stock={product.stock}
                        />
                    </div>
                ))
                :
                products.map((product) => (
                    <div key={product.productCode}>
                        <Item
                            productCode={product.productCode}
                            category={product.category}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            stock={product.stock}
                        />
                    </div>
                ))
            }
        </div>
    )
}
