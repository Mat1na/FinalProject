import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

function ResearchSection() {
  return (
    <Container fluid>
      <h1 className="pb-5 montserrat lab-title">Research</h1>
      <Row className="text-left justify-content-center align-items-center">
        <Col className='d-inline-flex align-items-center' md={6}><img src="/MicroclimateEcology.jpg" className='jpg-research' alt='Microclimate ecology' />
          <div className='ps-4'><h3 className='montserrat'>Microclimate ecology</h3><p className='roboto'>Microclimate conditions are key to understanding how organisms respond to warming, yet they are frequently neglected in ecological research. We aim to unravel the drivers and impact of microclimate conditions on species range dynamics</p></div></Col>
        <Col className='d-inline-flex align-items-center' md={6}><img src="/GlobalChangeEffects.jpg" className='jpg-research d-flex' alt='Global change effects' />
          <div className='ps-4'><h3 className='montserrat'>Global change effects</h3><p className='roboto'>We aim to improve our understanding of the effects of global change on biodiversity and the functioning of terrestrial ecosystems. We focus on climate change and invasive species, as these are identified as two of the most important anthropogenic drivers of biodiversity loss</p></div></Col>

      </Row>
      <Row className="text-left justify-content-center align-items-center">
        <Col className='d-inline-flex align-items-center' md={6}><img src="/BiodiversityConservation.jpg" className='jpg-research d-flex' alt='Biodiversity conservation' />
          <div className='ps-4'><h3 className='montserrat'>Biodiversity conservation</h3><p className='roboto'>Nature conservation is stuck in the detrimental paradigm of preventing community changes under changing conditions. We aim at developing global change-robust solutions for the biodiversity crisis, one of the biggest challenges in the Anthropocene</p></div></Col>
        <Col className='d-inline-flex align-items-center' md={6}><img src="/Ecoinformatics.jpg" className='jpg-research d-flex' alt='Ecoinformatics' />
          <div className='ps-4'><h3 className='montserrat'>Ecoinformatics</h3><p className='roboto'>We combine big data with state-of-the-art modelling techniques (machine learning, SDM, SEM, …) to extract patterns and answer ecological questions on large spatial scales</p></div></Col>
      </Row>
      <Row className="text-left justify-content-center align-items-center">

        <Col className='d-inline-flex align-items-center' md={6}><img src="/FieldWork.jpg" className='jpg-research d-flex' alt='Field work' />
          <div className='ps-4 '><h3 className='montserrat'>Field work</h3><p className='roboto'>We collect new primary ecological data in natural and anthropogenic systems; species composition, vegetation structure, ecosystem functions, plant functional traits, etc.</p></div></Col>
        <Col className='d-inline-flex align-items-center' md={6}><img src="/Drones.jpg" className='jpg-research d-flex' alt='Drones' />
          <div className='ps-4'><h3 className='montserrat'>Drones</h3><p className='roboto'>We fly drones to characterise how ecosystems are responding to rapid environmental change. Drones provide a unique opportunity for acquiring low-cost, high-resolution imagery at a regional scale</p></div></Col>
      </Row>
    </Container>
  )
}

export default ResearchSection