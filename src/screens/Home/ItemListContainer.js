import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import '../../styles/Home/ItemListContainer.css'
import { ItemList } from '../../components/Home/ItemList'
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const {id} = useParams();
    
    return (
        <Container>
            <ItemList 
                category={id}
            />
        </Container>
    )
}

