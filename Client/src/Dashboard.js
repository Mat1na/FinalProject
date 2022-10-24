import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Authors from './DashboardComponents/Authors'
import LabMembers from './DashboardComponents/LabMembers'
import Projects from './DashboardComponents/Projects'
import Publications from './DashboardComponents/Publications'

function Dashboard() {
  return (
    <Container>
     <h1> Dashboard</h1>
     <section className='members-section'>
     <Link to={"/labmembers"} className="btn btn-secondary mb-2" >Go to Labmebers List</Link>
     </section>
     <section className='publications-section'>
     <Link to={"/publications"} className="btn btn-secondary mb-2" >Go to Labmebers List</Link>
     </section>
     <section className='project-section'>
     <Link to={"/projects"} className="btn btn-secondary mb-2" >Go to Labmebers List</Link>
     </section>
     <section className='authors-section'>
     <Link to={"/authors"} className="btn btn-secondary mb-2" >Go to Labmebers List</Link>
     </section>


    </Container>
  )
}

export default Dashboard