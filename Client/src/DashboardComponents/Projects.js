import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiFillEdit} from 'react-icons/ai';
import { RiDeleteBin6Fill} from 'react-icons/ri';


function Projects() {
  return (
    <>
    <Container>
      <h1>Projects</h1>
      <div>
        
      <Link to={"/projects/create_project"} className="btn btn-secondary mb-2" > Add new project</Link>
      
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Content</th>
            <th>Sort summary</th>
            <th>Image</th>
            <th>Researcher</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
              <td>
              <Link to={"/projects/editproject/:project_id"} className="btn btn-primary mx-2"><AiFillEdit/></Link>
              <Button variant="danger" className='mx-1'><RiDeleteBin6Fill/></Button>
            </td>
          </tr>
        </tbody>
      </Table>
      </Container>
    </>
  )
}

export default Projects