import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

function ResearchSection() {
  return (
    <Container fluid className='mb-5'>
      <h1 className="pb-5 montserrat lab-title">Research</h1>

      <Row className="d-flex-box align-items-center justify-content-center">
        <Col lg={6} >
          <Row className='d-flex align-items-center justify-content-center'>
            <Col sm={5}>
              <div className="research-photo-container">
                <img src="/MicroclimateEcology.jpg" className='jpg-research d-flex' alt='Microclimate ecology' />
                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={7}> <div><h3 className='montserrat research-title'>Microclimate ecology</h3><p className='roboto research-text'>Microclimate conditions are key to understanding how organisms respond to warming, yet they are frequently neglected in ecological research. We aim to unravel the drivers and impact of microclimate conditions on species range dynamics</p></div>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <Row className='d-flex align-items-center justify-content-center'>
            <Col sm={5}>
              <div className="research-photo-container">
                <img src="/GlobalChangeEffects.jpg" className='jpg-research d-flex' alt='Global change effects' />
                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={7}><div><h3 className='montserrat research-title'>Global change effects</h3><p className='roboto research-text'>We aim to improve our understanding of the effects of global change on biodiversity and the functioning of terrestrial ecosystems. We focus on climate change and invasive species, as these are identified as two of the most important anthropogenic drivers of biodiversity loss</p></div>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <Row className='d-flex align-items-center justify-content-center'>
            <Col sm={5}>
              <div className="research-photo-container">
                <img src="/BiodiversityConservation.jpg" className='jpg-research d-flex' alt='Biodiversity conservation' />
                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={7}><div><h3 className='montserrat research-title'>Biodiversity conservation</h3><p className='roboto research-text'>Nature conservation is stuck in the detrimental paradigm of preventing community changes under changing conditions. We aim at developing global change-robust solutions for the biodiversity crisis, one of the biggest challenges in the Anthropocene</p></div>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <Row className='d-flex align-items-center justify-content-center'>
            <Col sm={5}>
              <div className="research-photo-container">
                <img src="/Ecoinformatics.jpg" className='jpg-research d-flex' alt='Ecoinformatics' />
                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={7}><div><h3 className='montserrat research-title'>Ecoinformatics</h3><p className='roboto research-text'>We combine big data with state-of-the-art modelling techniques (machine learning, SDM, SEM, …) to extract patterns and answer ecological questions on large spatial scales</p></div>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <Row className='d-flex align-items-center justify-content-center'>
            <Col sm={5}>
              <div className="research-photo-container">
                <img src="/FieldWork.jpg" className='jpg-research d-flex' alt='Field work' />
                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={7}><div><h3 className='montserrat research-title'>Field work</h3><p className='roboto research-text'>We collect new primary ecological data in natural and anthropogenic systems; species composition, vegetation structure, ecosystem functions, plant functional traits, etc.</p></div>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <Row className='d-flex align-items-center justify-content-center'>
            <Col sm={5}>
              <div className="research-photo-container">
                <img src="/Drones.jpg" className='jpg-research d-flex' alt='Drones' />
                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={7}><div><h3 className='montserrat research-title'>Drones</h3><p className='roboto research-text'>We fly drones to characterise how ecosystems are responding to rapid environmental change. Drones provide a unique opportunity for acquiring low-cost, high-resolution imagery at a regional scale</p></div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ResearchSection