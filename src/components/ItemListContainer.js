import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import '../styles/ItemListContainer.css'

export const ItemListContainer = ({ greeting, greetP }) => {
    return (
        <div className='itemList-Container'>
            <div className='itemList-bars'>
                <Container>
                    <div className='itemList-content'>
                        <div className='itemList-Tittle'>
                            <h1>{greeting}</h1>
                        </div>
                        <div className='itemList-P'>
                            <p>{greetP}</p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

