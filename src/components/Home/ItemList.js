import React from 'react'
import { getProductsApi, getProductsByCategoryApi } from '../../APIs/productsApi';
import { useEffect, useState } from 'react';
import { Item } from './Item.js';

export const ItemList = ({ category }) => {

    const [productsBD, setproductsBD] = useState([]);

    const getproductsBD = async () => {
        try {
            setproductsBD(await getProductsApi());
        } catch (error) {

        }
    }

    const getBdCategoryProducts = async () => {
        try {
            setproductsBD(await getProductsByCategoryApi(category));
        } catch (error) {

        }
    }

    const showProduct = ()=>{
        if (!category) {
            getproductsBD();
        }else{
            getBdCategoryProducts();
        }
    }

    useEffect(() => {
        showProduct();        
    },[category]);


    return (
        <div className='cardContainer'>
            {productsBD.map((product) => (
                    <div key={product.id}>
                        <Item
                            collId={product.id}
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
