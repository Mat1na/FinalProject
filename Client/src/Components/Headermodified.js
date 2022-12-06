import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';

function Headermodified() {

  return (
    <Navbar fixed="top" expand="lg" variant="dark" className="navbar p-2 color-nav" >
      <Navbar.Brand href="/"><img src='/Logo_final_rgba.png' className='logoheader' alt="logo sGlobe Lab"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='d-flex d-lg-none flex-column justify-content-around'>
        <span className='toggler-icon top-bar'></span>
        <span className='toggler-icon middle-bar'></span>
        <span className='toggler-icon bottom-bar'></span>
        {/* <MdOutlineSegment size={'2em'} fill='white' className="nav-icon" /> */}
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
          <Link to="/#contact" className='nav-link'>Contact</Link>
          <Link to='/dashboard' className='nav-link'>Dashboard</Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default Headermodified;
