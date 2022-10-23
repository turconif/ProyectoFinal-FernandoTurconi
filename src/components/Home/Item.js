import React from 'react'
import Card from 'react-bootstrap/Card';
import '../../styles/Item.css';
import { Link } from "react-router-dom";

export const Item = ({ productCode, title, image, stock }) => {
    return (
        <Link to={`../Item/${productCode}`} className="itemLink">
            <Card className="text-center productCard">
                <img src={image} className='productImg' alt={`Foto de ${title}`} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className={stock === 0 ? 'itemWithOutStock' : ''}>Stock: {stock} </Card.Text>
                    <input type="button" className="main-border-button " value="Ver Detalle"></input>                    
                </Card.Body>
            </Card>
        </Link>
    )
}
