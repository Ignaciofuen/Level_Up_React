import React from 'react'
import { useAuth } from '../auth/AuthContext'
import {Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export default function AppNavbar (){
  const { user, logout } = useAuth()

    return (
    <Navbar fixed='top' collapseOnSelect expand="lg" variant = "dark"className="bg-custom navbar-level-up" >
      <Container fluid>
        <Navbar.Brand href="#home">Level Up Gamer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Productos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Usuario" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Iniciar sesion</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Registrarce</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Administrador</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );        
    

}