import React from 'react'
import mainLogo from '../../images/elegant.png'
import '../../styles/NavBar/Menu.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { CartWidget } from '../NavBar/CartWidget'
import { Link } from "react-router-dom";




export const Menu = () => {
    return (
        <div className='shadow'>
            <Container>
                <Navbar bg='white' expand='sm' collapseOnSelect>
                    <Navbar.Brand>
                        <Container>
                            <Link to="/"><img src={mainLogo} alt='Elegant Logo' className='NavBar-Logo' />{' '}</Link>
                        </Container>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Container>
                            <Nav className='justify-content-end menu-nav' defaultActiveKey="/home" >
                                <Nav.Link href='/Home' eventKey="Home" >Home</Nav.Link>
                                <Nav.Link href='/Category/Hombre' >Hombre</Nav.Link>
                                <Nav.Link href='/Category/Mujer' >Mujer</Nav.Link>
                                <Nav.Link eventKey="Nosotros" >Nosotros</Nav.Link>
                                <Nav.Link eventKey="Contacto" >Contacto</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar.Collapse>
                    <CartWidget />
                </Navbar>
            </Container>
        </div>
    )
}