import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GoMail } from "react-icons/go";
import { FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

function ContactSection() {
    const { ref: myCont, inView: myContIsVisible } = useInView({ triggerOnce: true })
    const { ref: myCont2, inView: myCont2IsVisible } = useInView({ triggerOnce: true })

    return (
        <Container fluid >
            <h1 className={`pb-2 montserrat lab-title ${myContIsVisible ? "divslide" : ""}`} ref={myCont}>Contact</h1>

            <div className={`contact d-lg-flex align-items-center justify-content-center ${myCont2IsVisible ? "divslide" : ""}`} ref={myCont2}>
                <a href={`mailto:koenraad.vanmeerbeek@kuleuven.be`} className='footerlink'><div className='m-4'>
                    <p className="d-flex align-items-center justify-content-center m-3 "> <GoMail size={"2.5rem"} className="icons footer-icons me-1" /></p>
                    <p className='contact-text text-center d-flex align-items-center justify-content-center'>koenraad.vanmeerbeek@kuleuven.be</p>
                </div></a>

                {/* <div className='m-4'>
                    <a className="footerlink d-flex align-items-center justify-content-center m-3" href="tel:+3216377444"><BsTelephoneFill size={"2.5rem"} className="footer-icons icons me-1" /></a>
                    <a className="footerlink text-center d-flex align-items-center justify-content-center " href="tel:+3216377444"><p className='contact-text'>+32 16 377 444</p></a>
                </div> */}

                <a href="tel:+3216377444" className='footerlink'><div className='m-4'>
                    <p className="d-flex align-items-center justify-content-center m-3 "> <BsTelephoneFill size={"2.5rem"} className="icons footer-icons me-1" /></p>
                    <p className='contact-text text-center d-flex align-items-center justify-content-center'>+32 16 377 444</p>
                </div></a>

                <a href="https://twitter.com/K_VanMeerbeek" target="_blank" rel="noreferrer" className='footerlink'><div className='m-4'>
                    <p className="d-flex align-items-center justify-content-center m-3 "> <FaTwitter size={"2.5rem"} className="icons footer-icons me-1" /></p>
                    <p className='contact-text text-center d-flex align-items-center justify-content-center'>Follow me on Twitter</p>
                </div></a>

                {/* <div className='m-4'>
                    <a className="footerlink d-flex align-items-center justify-content-center m-3 " href="https://twitter.com/K_VanMeerbeek" target="_blank" rel="noreferrer"><FaTwitter size={"2.5rem"} className="footer-icons icons me-1" /></a>
                    <a className="footerlink text-center d-flex align-items-center justify-content-center" href="https://twitter.com/K_VanMeerbeek" target="_blank" rel="noreferrer"><p className='contact-text'> Follow me on Twitter</p></a>
                </div> */}

                <a href="https://www.google.be/maps/place/GEO-Instituut,+Celestijnenlaan+200E,+3001+Leuven/@50.8636993,4.6757642,493m/data=!3m2!1e3!4b1!4m5!3m4!1s0x47c16111ce8c3671:0x4ee0baa6fc29cae3!8m2!3d50.8636993!4d4.6757642" target="_blank" rel="noreferrer" className='footerlink'><div className='m-4'>
                    <p className="d-flex align-items-center justify-content-center m-3 "> <FaMapMarkerAlt size={"2.5rem"} className="icons footer-icons me-1" /></p>
                    <p className='contact-text text-center d-flex align-items-center justify-content-center'>Celestijnenlaan 200E, 3001 Leuven, Belgium</p>
                </div></a>

                {/* <div className='m-4'>
                    <a className="footerlink d-flex align-items-center justify-content-center m-3  " href="https://www.google.be/maps/place/GEO-Instituut,+Celestijnenlaan+200E,+3001+Leuven/@50.8636993,4.6757642,493m/data=!3m2!1e3!4b1!4m5!3m4!1s0x47c16111ce8c3671:0x4ee0baa6fc29cae3!8m2!3d50.8636993!4d4.6757642" target="_blank" rel="noreferrer"><FaMapMarkerAlt size={"2.5rem"} className="footer-icons icons me-1" /></a>
                    <a className="footerlink  text-center d-flex align-items-center justify-content-center" href="https://www.google.be/maps/place/GEO-Instituut,+Celestijnenlaan+200E,+3001+Leuven/@50.8636993,4.6757642,493m/data=!3m2!1e3!4b1!4m5!3m4!1s0x47c16111ce8c3671:0x4ee0baa6fc29cae3!8m2!3d50.8636993!4d4.6757642" target="_blank" rel="noreferrer"><p className='contact-text'> Celestijnenlaan 200E, 3001 Leuven, Belgium</p></a>
                </div> */}
            </div>



        </Container>
    )
}

export default ContactSection