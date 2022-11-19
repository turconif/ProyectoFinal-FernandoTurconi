import React, { useRef } from 'react'
import { ItemCount } from './ItemCount';
import '../../styles/Item.css';
import { AddToCart } from './AddToCart';
import { productBdDetailApi } from '../../APIs/productsApi';
import { useEffect, useState } from 'react';



export const ItemDetail = ({ code }) => {

  const inputRef = useRef(1);

  const [productDetail, setProductDetail] = useState([]);



  const getProductDetailBd = async (dcode) => {
    try {      
      setProductDetail(await productBdDetailApi(dcode));
    } catch (error) {

    }    
  }
  

  useEffect(() => {
    getProductDetailBd(code);
  }, [code]);

  return (
    <div className='max-width'>      
        <div className='itemDetail-Container' key={productDetail.productCode}>
          <div className='left-content'>
            <img src={productDetail.image} className='itemDetail-img' alt={`Foto de ${productDetail.title}`} />
          </div>
          <div className='right-content'>
            <div>
              <h2>{productDetail.title}</h2>
              <span className='price'> ${productDetail.price} </span>
              <span> {productDetail.detail} </span>
              <div className='quantity-content'>
                <ItemCount stock={productDetail.stock} quantityRef={inputRef} />
              </div>
              <div className='itemDetail-footer'>
                  <AddToCart productId={code} stock={productDetail.stock} quantityRef={inputRef} title={productDetail.title} price = {productDetail.price} />
              </div>
            </div>
          </div>
        </div>
    </div>

  )
}
