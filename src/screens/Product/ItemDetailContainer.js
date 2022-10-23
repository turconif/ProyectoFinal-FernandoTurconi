import React from 'react'
import { ItemDetail } from '../../components/Product/ItemDetail'
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

  const { id } = useParams();

  return (    
      <ItemDetail
        code={id}
      />   
  )
}
