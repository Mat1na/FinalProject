import React from 'react'
import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">LabLogo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown  title="Dashboard" id="basic-nav-dropdown">
              <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/labmembers">
                Lab Members
              </NavDropdown.Item>
              <NavDropdown.Item href="/publications">Publications</NavDropdown.Item>
              <NavDropdown.Item href="/projects">
                Projects
              </NavDropdown.Item>
              <NavDropdown.Item href="/authors">
                Authors
              </NavDropdown.Item>
            </NavDropdown>
            {/* {
              sessionStorage.getItem("token") === null && (
                <Link className="nav-link" to="/login">Login</Link>
              )
            } */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header