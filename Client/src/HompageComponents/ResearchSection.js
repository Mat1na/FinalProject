import React, { useState } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { useRef } from "react";
import { useEffect } from 'react';
import {useInView} from "react-intersection-observer";

function ResearchSection() {
const {ref:myRef1, inView:myRef1IsVisible1}=useInView()
const {ref:myRef2, inView:myRef1IsVisible2}=useInView()
const {ref:myRef3, inView:myRef1IsVisible3}=useInView()
const {ref:myRef4, inView:myRef1IsVisible4}=useInView()
const {ref:myRef5, inView:myRef1IsVisible5}=useInView()
const {ref:myRef6, inView:myRef1IsVisible6}=useInView()
console.log(myRef1IsVisible1,myRef1IsVisible2,myRef1IsVisible3,myRef1IsVisible4,)



  return (
    <Container fluid className='mb-0 mt-0'>
      <h1 className="pb-0 montserrat lab-title">Research</h1>

      <Row className="d-flex align-items-center justify-content-center">

        <Col lg={6} >

          <Row className='d-flex align-items-center justify-content-center'>
            <h3 className='text-center m-5'>Topics</h3>
            <Col sm={4}>
              <div className={`research-photo-container ${myRef1IsVisible1? "divMove":""}`} ref={myRef1}>
                <img src="/MicroclimateEcology.jpg" className='jpg-research d-flex' alt='Microclimate ecology' />
                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={8}> <div ref={myRef1} className={`${myRef1IsVisible1? "divMove":""}`}><h3 className="montserrat research-title">Microclimate ecology</h3><p className='roboto research-text'>Microclimate conditions are key to understanding how organisms respond to warming, yet they are frequently neglected in ecological research. We aim to unravel the drivers and impact of microclimate conditions on species range dynamics</p></div>
            </Col>
            <Col sm={4}>
              <div className={`research-photo-container ${myRef1IsVisible2? "divMove":""}`} ref={myRef2}>
                <img src="/GlobalChangeEffects.jpg" className='jpg-research d-flex' alt='Global change effects' />
                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={8}><div ref={myRef2} className={`${myRef1IsVisible2? "divMove":""}`}><h3 className='montserrat research-title'>Global change effects</h3><p className='roboto research-text'>We aim to improve our understanding of the effects of global change on biodiversity and the functioning of terrestrial ecosystems. We focus on climate change and invasive species, as these are identified as two of the most important anthropogenic drivers of biodiversity loss</p></div>
            </Col>
            <Col sm={4}>
              <div className={`research-photo-container ${myRef1IsVisible3? "divMove":""}`} ref={myRef3}>
                <img src="/BiodiversityConservation.jpg" className='jpg-research d-flex' alt='Biodiversity conservation' />
                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={8}><div ref={myRef3} className={`${myRef1IsVisible3? "divMove":""}`}><h3 className='montserrat research-title'>Biodiversity conservation</h3><p className='roboto research-text'>Nature conservation is stuck in the detrimental paradigm of preventing community changes under changing conditions. We aim at developing global change-robust solutions for the biodiversity crisis, one of the biggest challenges in the Anthropocene</p></div>
            </Col>
          </Row>
        </Col>


        <Col lg={6}>

          <Row className='d-flex align-items-center justify-content-center '>
            <h3 className='text-center m-5'>Methods</h3>
            <Col sm={4}>
              <div className={`research-photo-container ${myRef1IsVisible4? "divMove1":""}`} ref={myRef4}>
                <img src="/Ecoinformatics.jpg" className='jpg-research d-flex' alt='Ecoinformatics' />
                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={8} ref={myRef4} className={`${myRef1IsVisible4? "divMove1":""}`}><div><h3 className='montserrat research-title'>Ecoinformatics</h3><p className='roboto research-text'>We combine big data with state-of-the-art modelling techniques (machine learning, SDM, SEM, …) to extract patterns and answer ecological questions on large spatial scales</p></div>
            </Col>
            <Col sm={4}>
              <div className={`research-photo-container ${myRef1IsVisible5? "divMove1":""}`} ref={myRef5}>
                <img src="/FieldWork.jpg" className='jpg-research d-flex' alt='Field work' />
                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={8} ref={myRef5} className={`${myRef1IsVisible5? "divMove1":""}`}><div><h3 className='montserrat research-title'>Field work</h3><p className='roboto research-text'>We collect new primary ecological data in natural and anthropogenic systems; species composition, vegetation structure, ecosystem functions, plant functional traits, etc.</p></div>
            </Col>
            <Col sm={4}>
              <div className={`research-photo-container ${myRef1IsVisible6? "divMove1":""}`} ref={myRef6}>
                <img src="/Drones.jpg" className='jpg-research d-flex' alt='Drones' />
                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={8} ref={myRef6} className={`${myRef1IsVisible6? "divMove1":""}`}><div><h3 className='montserrat research-title'>Drones</h3><p className='roboto research-text'>We fly drones to characterise how ecosystems are responding to rapid environmental change. Drones provide a unique opportunity for acquiring low-cost, high-resolution imagery at a regional scale</p></div>
            </Col>
          </Row>
        </Col>


      </Row>
    </Container>
  )
}

export default ResearchSection