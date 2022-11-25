import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { MdOutlineSegment } from 'react-icons/md'

function Header() {
  console.log(document.querySelector('.navbar'))
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      document
        .querySelector('.navbar')
        .classList.add('color-nav');

    } else {
      document
        .querySelector('.navbar')
        .classList.remove('color-nav');

    }
  });
  return (
    <Navbar fixed="top" expand="lg" variant="dark" className="navbar p-2" >

      <Navbar.Brand href="/">LabLogo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <MdOutlineSegment size={'2em'} fill='white' className="nav-icon" />
        {/* <MdOutlineClose size={'2em'} fill='var(--Dark)'  className="social-icon" /> */}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Research</Nav.Link>
          <Nav.Link href="/">Lab members</Nav.Link>
          <Nav.Link href="/">Projects</Nav.Link>
          <Nav.Link href="/">Publications</Nav.Link>
          <Nav.Link href="/">Join the lab</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          {/* <NavDropdown title="Dashboard" id="basic-nav-dropdown">
              <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/labmembers">
                Lab Members
              </NavDropdown.Item>
              <NavDropdown.Item href="/publications">
                Publications
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
              <NavDropdown.Item href="/authors">Authors</NavDropdown.Item>
            </NavDropdown> */}
          {/* {
              sessionStorage.getItem("token") === null && (
                <Link className="nav-link" to="/login">Login</Link>
              )
            } */}
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default Header;
