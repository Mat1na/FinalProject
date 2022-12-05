import React from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
import { GoMail } from "react-icons/go";
import { FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Footer() {

  window.addEventListener('click', (e) => {
    if (window.location.pathname === '/login' || window.location.pathname === '/dashboard') {
      document
        .querySelector('.footer-bg')
        .classList.add('footer-bg2');

    }

  });

  window.addEventListener('load', (e) => {
    if (window.location.pathname === '/login' || window.location.pathname === '/dashboard') {
      document
        .querySelector('.footer-bg')
        .classList.add('footer-bg2');

    }

  });
  return (
    <div className="footer-bg mt-5">
      <footer>
        <div className="d-block justify-content-center">
          <Link to='/' className='nav-link'><img src='/Logo_footer.png' alt='logo sGlobelab with tagline' className='logofooter'/></Link>
        </div>
        <div className='d-block footer-icon-list'>
          <ul className="nav justify-content-center list-unstyled d-flex">
            <li className="m-3"><a className="footerlink" href={`mailto:koenraad.vanmeerbeek@kuleuven.be`}><GoMail size={"2.5rem"} className="icons footer-icons me-1" /></a></li>
            <li className="m-3"><a className="footerlink" href="tel:+32%2016%20377444%20"><BsTelephoneFill size={"2.5rem"} className="footer-icons icons me-1" /></a></li>
            <li className="m-3"><a className="footerlink" href="https://twitter.com/K_VanMeerbeek" target="_blank" rel="noreferrer"><FaTwitter size={"2.5rem"} className="footer-icons icons me-1" /></a></li>
            <li className="m-3"><a className="footerlink" href="https://www.google.be/maps/place/GEO-Instituut,+Celestijnenlaan+200E,+3001+Leuven/@50.8636993,4.6757642,493m/data=!3m2!1e3!4b1!4m5!3m4!1s0x47c16111ce8c3671:0x4ee0baa6fc29cae3!8m2!3d50.8636993!4d4.6757642" target="_blank" rel="noreferrer"><FaMapMarkerAlt size={"2.5rem"} className="footer-icons icons me-1" /></a></li>
          </ul>
        </div>
        <div className='d-block text-center'>
          <span className="roboto footer-copyright">&copy; 2022 <a href='https://www.linkedin.com/in/matinabampa/' target="_blank" rel="noreferrer" className='footerlink'>Stamatia Bampa</a> and <a href='https://www.linkedin.com/in/winandvanmeerbeek/' target="_blank" rel="noreferrer" className='footerlink'>Winand Van Meerbeek</a></span>
        </div>
      </footer>
    </div>


    //     <div className="footer-bg">
    //       <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
    //         <div className="col-md-4 align-items-center">
    //         <Link to='/' className='nav-link'><img src='/Logo_footer.png' alt='logo sGlobelab with tagline' className='logofooter mb-2' /></Link>
    //           <span className="mb-3 mb-md-0 roboto d-block">&copy; 2022 <a href='https://www.linkedin.com/in/matinabampa/' target="_blank" rel="noreferrer" className='footerlink'>Stamatia Bampa</a> and <a href='https://www.linkedin.com/in/winandvanmeerbeek/' target="_blank" rel="noreferrer" className='footerlink'>Winand Van Meerbeek</a></span>
    //         </div>
    // <div className='col-md-8'>
    //         <ul className="nav justify-content-end list-unstyled d-flex">
    //           <li className="ms-3"><GoMail size={"1rem"} className="icons me-1" /><a className="roboto footerlink" href={`mailto:koenraad.vanmeerbeek@kuleuven.be`}>koenraad.vanmeerbeek@kuleuven.be</a></li>
    //           <li className="ms-3"><BsTelephoneFill size={"1rem"} className="icons me-1" /><a className="roboto footerlink" href="tel:+32%2016%20377444%20">+32 16 377 444</a></li>
    //         </ul>
    //         <ul className="nav justify-content-end list-unstyled d-flex">
    //           <li className="ms-3"><FaTwitter size={"1rem"} className="icons me-1" /><a className="roboto footerlink" href="https://twitter.com/K_VanMeerbeek" target="_blank" rel="noreferrer">Follow me on Twitter</a></li>
    //           <li className="ms-3"><FaMapMarkerAlt size={"1rem"} className="icons me-1" /><a className="roboto footerlink" href="https://www.google.be/maps/place/GEO-Instituut,+Celestijnenlaan+200E,+3001+Leuven/@50.8636993,4.6757642,493m/data=!3m2!1e3!4b1!4m5!3m4!1s0x47c16111ce8c3671:0x4ee0baa6fc29cae3!8m2!3d50.8636993!4d4.6757642" target="_blank" rel="noreferrer">GEO-Instituut, Celestijnenlaan 200E, 3001 Leuven</a></li>
    //         </ul>
    //         </div>
    //       </footer>
    //     </div>


    // <div className="footer-bg mt-5 pt-0">
    //   <Row >

    //     <Col md={8}></Col>
    //     <Col md={4}>
    //       <div>
    //         <p><a href={`mailto:koenraad.vanmeerbeek@kuleuven.be`}
    //           className="d-inline p-2"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           <GoMail size={"1rem"} className="icons" /> koenraad.vanmeerbeek@kuleuven.be
    //         </a></p>
    //       </div>
    //       <div>
    //         <p>
    //           <a
    //             href=""
    //             className="d-inline p-2"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <BsTelephoneFill size={"1rem"} className="icons" />
    //             +32 16 377 444</a></p>
    //       </div>
    //       <div>
    //         <p>
    //           <a
    //             href="https://twitter.com/K_VanMeerbeek"
    //             className="d-inline p-2"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <FaTwitter size={"1rem"} className="icons" />
    //             Follow me on twitter</a></p>
    //       </div>
    //       <div>
    //         <p>
    //           <a
    //             href="https://www.google.be/maps/place/GEO-Instituut,+Celestijnenlaan+200E,+3001+Leuven/@50.8636993,4.6757642,493m/data=!3m2!1e3!4b1!4m5!3m4!1s0x47c16111ce8c3671:0x4ee0baa6fc29cae3!8m2!3d50.8636993!4d4.6757642"
    //             className="d-inline p-2"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <FaMapMarkerAlt size={"1rem"} className="icons" />
    //             GEO-Instituut, Celestijnenlaan 200E, 3001 Leuven</a></p>
    //       </div>

    //     </Col>

    //   </Row>
    // </div>

  )
}

export default Footer