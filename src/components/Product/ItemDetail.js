import React, { useRef } from 'react'
import { ItemCount } from './ItemCount';
import '../../styles/Item.css';
import { AddToCart } from './AddToCart';
import { productDetailApi } from '../../APIs/productsApi';
import { useEffect, useState } from 'react';


export const ItemDetail = ({ code }) => {

  const inputRef = useRef(1);

  const [product, setProducts] = useState([]);

  const getProductDetail = async (dcode) => {
    const apiProducts = await productDetailApi(dcode);
    setProducts(apiProducts);
  }


  useEffect(() => {
    getProductDetail(code);
  }, [code]);

  return (
    <div className='max-width'>
      {product.map((p) => (
        <div className='itemDetail-Container' key={p.productCode}>
          <div className='left-content'>
            <img src={p.image} className='itemDetail-img' alt={`Foto de ${p.title}`} />
          </div>
          <div className='right-content'>
            <div>
              <h2>{p.title}</h2>
              <span className='price'> ${p.price} </span>
              <span> {p.detail} </span>
              <div className='quantity-content'>
                <ItemCount stock={p.stock} quantityRef={inputRef} />
              </div>
              <div className='itemDetail-footer'>                
                <AddToCart stock={p.stock !== 0} quantityRef={inputRef} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}
