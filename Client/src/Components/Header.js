import React from 'react'
import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">LabLogo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header