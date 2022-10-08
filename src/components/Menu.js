import React from 'react'
import mainLogo from '../images/elegant.png'
import '../styles/Menu.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {CartWidget} from './CartWidget'




export const Menu = () => {
    return (        
        <Container>            
            <Navbar bg='white' expand='sm' collapseOnSelect>
                <Navbar.Brand>
                    <Container>
                        <img src={mainLogo} alt='Elegant Logo' className='NavBar-Logo' />{' '}
                    </Container>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Container>
                        <Nav className='justify-content-end menu-nav' defaultActiveKey="/home" >
                            <Nav.Link href='/home' >Home</Nav.Link>
                            <NavDropdown title="Hombres">
                                <NavDropdown.Item href="">Camisas</NavDropdown.Item>
                                <NavDropdown.Item href="">Camperas</NavDropdown.Item>
                                <NavDropdown.Item href="">Remeras</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Mujeres">
                                <NavDropdown.Item href="" disabled>Camisas</NavDropdown.Item>
                                <NavDropdown.Item href="" disabled>Camperas</NavDropdown.Item>
                                <NavDropdown.Item href="" disabled>Remeras</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link eventKey="Nosotros" >Nosotros</Nav.Link>
                            <Nav.Link eventKey="Contacto" >Contacto</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
                <CartWidget />
            </Navbar>
        </Container>

    )
}


/*<header className='NavBar-Header header-sticky'>
            <div className='NavBar-Logo' >
                <img src={mainLogo} alt='Company Logo'/>
            </div>
            <div>
                <ul className='NavBar-menu'>
                    <li>Hombres</li>
                    <li>Mujeres</li>
                    <li>Descontinuado</li>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <div className='NavBar-cart'>
                <img src={cart} alt="Carrito de compra" />
            </div>
        </header>*/