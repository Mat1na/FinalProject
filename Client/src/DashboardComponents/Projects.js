import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin6Fill } from 'react-icons/ri';


function Projects() {
  const [projectList, setProjectList] = useState([])
  const fetchProjects = async () => {
    let res = await fetch('http://localhost:3001/projects/fetch-projects')
    let data = await res.json();
    if (res.ok) {
      console.log(data)
      setProjectList(data);
    }
  };
  useEffect(() => {
    fetchProjects()
  }, []);
  return (
    <>
      <Container>
        <h1>Projects</h1>
        <div>

          <Link to={"/projects/create-project"} className="btn btn-secondary mb-2" > Add new project</Link>

        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Short summary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projectList.length > 0 && projectList.map((project, index) => {
              return <tr>
                <td>{index + 1}</td>
                <td>
                  {projectList[index].title}</td>
                  <td>
                  {projectList[index].summary}</td>
                <td>
                  <Link to={"/projects/editproject/:projectid"} className="btn btn-primary mx-2"><AiFillEdit /></Link>
                  <Button variant="danger" className='mx-1'><RiDeleteBin6Fill /></Button>
                </td>
              </tr>
            })}
            {/* <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <Link to={"/projects/editproject/:projectid"} className="btn btn-primary mx-2"><AiFillEdit /></Link>
                <Button variant="danger" className='mx-1'><RiDeleteBin6Fill /></Button>
              </td>
            </tr> */}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default Projects