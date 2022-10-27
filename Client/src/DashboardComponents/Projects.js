import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css


function Projects() {
  const [projectList, setProjectList] = useState([])
  const fetchProjects = async () => {
    let res = await fetch('http://localhost:3001/projects/fetch-projects')
    let data = await res.json();
    if (res.ok) {
      console.log(data)
      data.sort(function(a,b){
        var textA = a.title.toUpperCase()
        var textB = b.title.toUpperCase()
        return (textA < textB) ? -1:(textA>textB)?1:0
      })
      setProjectList(data);
    }
  };
  useEffect(() => {
    fetchProjects()
  }, []);

  // Delete button
  const Delete = (_id) => {
    console.log("deleted:", _id);
    fetch(`http://localhost:3001/projects/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .catch((error) => {
        window.alert(error);
        return;
      })
      .then(() => {
        alert(`Publication has been deleted!`);
        fetchProjects()
      });
  };
  const handleDeleteBtn = (_id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => Delete(_id),
        },
        {
          label: "No",
          // onClick: () => alert('Click No')
        },
      ],
    });
  };
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
              return <tr key={project._id} id={project._id}>
                <td>{index + 1}</td>
                <td>
                  {projectList[index].title}</td>
                  <td>
                  {projectList[index].summary}</td>
                <td>
                  <Link to={"/projects/edit-project/:projectid"} className="btn btn-primary mx-2"><AiFillEdit /></Link>
                  <Button variant="danger" className='mx-1' onClick={() => handleDeleteBtn(project._id)}><RiDeleteBin6Fill /></Button>
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