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
          <Link className="nav-link" to="/">Home</Link>
          <NavDropdown  title="Dashboard" id="basic-nav-dropdown">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
              <NavDropdown.Divider />
              <Link className="nav-link" to="/labmembers">
                Lab Members
              </Link>
              <Link className="nav-link" to="/publications">Publications</Link>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
              <Link className="nav-link" to="/authors">
                Authors
              </Link>
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