import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GoMail } from "react-icons/go";
import { FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

function Footer() {

  window.addEventListener('click', function () {
    if ( window.location.pathname ==='/login'|| window.location.pathname ==='/dashboard') {
      document
        .querySelector('.footer-bg')
        .classList.add('footer-bg2');
      
    } 

  });
  
  window.addEventListener('load', function () {
    if ( window.location.pathname ==='/login'|| window.location.pathname ==='/dashboard') {
      document
        .querySelector('.footer-bg')
        .classList.add('footer-bg2');
      
    } 

  });
  return (
  
      <div className="footer-bg mt-5">
      <Row >
      
        <Col md={4}> Logo</Col>
        <Col md={8}>
          <div>
            <p><a href={`mailto:koenraad.vanmeerbeek@kuleuven.be`}
              className="d-inline p-2"
              target="_blank"
              rel="noreferrer"
            >
              <GoMail size={"1rem"} className="icons" /> koenraad.vanmeerbeek@kuleuven.be
            </a></p>
          </div>
          <div>
            <p>
              <a
                href=""
                className="d-inline p-2"
                target="_blank"
                rel="noreferrer"
              >
                <BsTelephoneFill size={"1rem"} className="icons" />
                 +32 16 377 444</a></p>
          </div>
          <div>
            <p>
              <a
                href="https://twitter.com/K_VanMeerbeek"
                className="d-inline p-2"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={"1rem"}  className="icons" />
                 Follow me on twitter</a></p>
          </div>
          <div>
            <p>
              <a
                href="https://www.google.be/maps/place/GEO-Instituut,+Celestijnenlaan+200E,+3001+Leuven/@50.8636993,4.6757642,493m/data=!3m2!1e3!4b1!4m5!3m4!1s0x47c16111ce8c3671:0x4ee0baa6fc29cae3!8m2!3d50.8636993!4d4.6757642"
                className="d-inline p-2"
                target="_blank"
                rel="noreferrer"
              >
                <FaMapMarkerAlt size={"1rem"}  className="icons" />
                 GEO-Instituut, Celestijnenlaan 200E, 3001 Leuven</a></p>
          </div>

        </Col>
       
      </Row>
      </div>
   
  )
}

export default Footer