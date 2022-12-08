import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';


function Headermodified() {
  const [expanded, setExpanded] =useState(false);

  return (
    <Navbar collapseOnSelect fixed="top" expand={expanded} variant="dark" className="navbar p-2 color-nav" >
    <Navbar.Brand href="/"><img src='/Logo_final_rgba.png' className='logoheader' alt="logo sGlobe Lab"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='d-flex d-lg-none flex-column justify-content-around'>
      <span className='toggler-icon top-bar'></span>
      <span className='toggler-icon middle-bar'></span>
      <span className='toggler-icon bottom-bar'></span>
    </Navbar.Toggle>
    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
      <Nav >
        <Link to='/#top' className='nav-link' onClick={() => setExpanded(false)}>Home</Link>
        <Link to="/#research" className='nav-link' onClick={() => setExpanded(false)}>Research</Link>
        <Link to="/#labmembers" className='nav-link' onClick={() => setExpanded(false)}>Lab members</Link>
        <Link to="/#projects" className='nav-link' onClick={() => setExpanded(false)}>Projects</Link>
        <Link to="/#publications" className='nav-link' onClick={() => setExpanded(false)}>Publications</Link>
        <Link to="/#jointhelab" className='nav-link' onClick={() => setExpanded(false)}>Join the lab</Link>
        <Link to="/#contact" className='nav-link'onClick={() => setExpanded(false)}>Contact</Link>
      </Nav>
    </Navbar.Collapse>

  </Navbar>
  );
}

export default Headermodified;
