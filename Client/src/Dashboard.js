import React from 'react'
import { Container } from 'react-bootstrap'
import Authors from './DashboardComponents/Authors'
import LabMembers from './DashboardComponents/LabMembers'
import Projects from './DashboardComponents/Projects'
import Publications from './DashboardComponents/Publications'

function Dashboard() {
  return (
    <Container>
     <h1> Dashboard</h1>
     <section className='members-section'>
     <LabMembers/>
     </section>
     <section className='publications-section'>
      <Publications/>
     </section>
     <section className='project-section'>
      <Projects/>
     </section>
     <section className='authors-section'>
      <Authors/>
     </section>


    </Container>
  )
}

export default Dashboard