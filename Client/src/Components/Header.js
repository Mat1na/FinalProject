import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { MdOutlineSegment } from 'react-icons/md'
import { useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

function Header() {

  window.addEventListener('scroll', function () {
    if (window.scrollY > 200 && window.location.pathname ==='/' ) {
      document
        .querySelector('.navbar')
        .classList.add('color-nav');
      
    } else if ( window.location.pathname !=='/' ) {
      document
        .querySelector('.navbar')
        .classList.add('color-nav');
    }else {
      document
        .querySelector('.navbar')
        .classList.remove('color-nav');
        
    }
  });
  

  
  return (
    <Navbar fixed="top" expand="lg" variant="dark" className="navbar p-2" >{  console.log(window.scrollY)}
      <Navbar.Brand href="/"><img src='/Logo_final_rgba.png' className='logoheader' alt="logo sGlobe Lab"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <MdOutlineSegment size={'2em'} fill='white' className="nav-icon" />
        {/* <MdOutlineClose size={'2em'} fill='var(--Dark)'  className="social-icon" /> */}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav >
          <Link to='/#top' className='nav-link'>Home</Link>
          <Link to="/#research" className='nav-link'>Research</Link>
          <Link to="/#labmembers" className='nav-link'>Lab members</Link>
          <Link to="/#projects" className='nav-link'>Projects</Link>
          <Link to="/#publications" className='nav-link'>Publications</Link>
          <Link to="/#jointhelab" className='nav-link'>Join the lab</Link>
          <Link to='/dashboard' className='nav-link'>Dashboard</Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default Header;
