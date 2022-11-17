import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

function ResearchSection() {
  return (
    <Container>
        <h1 className="text-center">Research</h1>
        <Row className="text-center justify-content-center align-items-top">
            <Col md={4}><img src="/MicroclimateEcology.svg" className='svg-research' alt='Microclimate ecology'/>
            <h3>Microclimate ecology</h3><p>Microclimate conditions are key to understanding how organisms respond to warming, yet they are frequently neglected in ecological research. We aim to unravel the drivers and impact of microclimate conditions on species range dynamics</p></Col>
            <Col md={4}><img src="/GlobalChangeEffects.svg" className='svg-research' alt='Global change effects'/>
            <h3>Global change effects</h3><p>We aim to improve our understanding of the effects of global change on biodiversity and the functioning of terrestrial ecosystems. We focus on climate change and invasive species, as these are identified as two of the most important anthropogenic drivers of biodiversity loss</p></Col>
            <Col md={4}><img src="/BiodiversityConservation.svg" className='svg-research' alt='Biodiversity conservation'/>
            <h3>Biodiversity conservation</h3><p>Nature conservation is stuck in the detrimental paradigm of preventing community changes under changing conditions. We aim at developing global change-robust solutions for the biodiversity crisis, one of the biggest challenges in the Anthropocene</p></Col>
        </Row>
        <Row className="text-center justify-content-center align-items-top">
            <Col md={4}><img src="/Ecoinformatics.svg" className='svg-research' alt='Ecoinformatics'/>
            <h3>Ecoinformatics</h3><p>We combine big data with state-of-the-art modelling techniques (machine learning, SDM, SEM, …) to extract patterns and answer ecological questions on large spatial scales</p></Col>
            <Col md={4}><img src="/FieldWork.svg" className='svg-research' alt='Field work'/>
            <h3>Field work</h3><p>We collect new primary ecological data in natural and anthropogenic systems; species composition, vegetation structure, ecosystem functions, plant functional traits, etc.</p></Col>
            <Col md={4}><img src="/Drones.svg" className='svg-research' alt='Drones'/>
            <h3>Drones</h3><p>We fly drones to characterise how ecosystems are responding to rapid environmental change. Drones provide a unique opportunity for acquiring low-cost, high-resolution imagery at a regional scale</p></Col>
        </Row>
    </Container>
  )
}

export default ResearchSection