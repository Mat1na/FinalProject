import React, { useEffect, useState } from "react";
import { Button, Container, Form } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

function EditProject() {
  const { projectid } = useParams();
  const [project, setProject] = useState({});
  const [input, setInput] = useState({
    title: "",
    image: "",
    content: "",
    summary: "",
    researcher: "",
    imagetext: "",
    imagetextlink: ""
  })

  const fetchProject = async () => {
    let res = await fetch("http://localhost:3001/projects/fetch-projects");
    let data = await res.json();
    if (res.ok) {
      var filtereddata = data.find(item => item._id === projectid)
      setProject(filtereddata);
      setInput({ title: filtereddata.title, image: filtereddata.image, content: filtereddata.content, summary: filtereddata.summary, researcher: filtereddata.researcher, imagetext: filtereddata.imagetext, imagetextlink: filtereddata.imagetextlink })
    }
  };
  useEffect(() => {
    fetchProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectid]);

  function handleChange(event) {
    const { name, value } = event.target

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(input);
    fetch(`http://localhost:3001/projects/edit-project/${projectid}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input)
    })
    alert('Project has been updated in the system!')
  }

  // Required field alert
  function btnClick() {
    if (input.title === undefined || input.title === "") {
      alert("Title is required");
    }
    if (input.image === undefined || input.image === "") {
      alert("Image link is required");
    }
    if (input.content === undefined || input.content === "") {
      alert("Content is required");
    }
    if (input.researcher === undefined || input.researcher === "") {
      alert("Researcher is required");
    }

    if (input.summary === undefined || input.summary === "") {
      alert("Summary is required");
    }
  }

  return (
    <Container>
      <h1 className="mt-3">Edit Project</h1>
      <Link to={"/projects"} className="btn btn-danger mr-2 mb-2">
          Go back
        </Link>
      {Object.keys(project).length > 0 && <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" defaultValue={project.title} required name='title' onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Link image</Form.Label>
          <Form.Control type="text" defaultValue={project.image} required name='image' onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="content">
          <Form.Label>Content</Form.Label>
          <Form.Control type="text" defaultValue={project.content} required name='content' onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="summary">
          <Form.Label>Summary</Form.Label>
          <Form.Control type="text" defaultValue={project.summary} required name='summary' onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="researcher">
          <Form.Label>Researcher</Form.Label>
          <Form.Control type="text" defaultValue={project.researcher} required name='researcher' onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagetext">
          <Form.Label>Image text</Form.Label>
          <Form.Control type="text" defaultValue={project.imagetext} name='imagetext' onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagetextlink">
          <Form.Label>Image text link</Form.Label>
          <Form.Control type="text" defaultValue={project.imagetextlink} name='imagetextlink' onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={btnClick}>
          Update
        </Button>
        <Link to={"/projects"} className="btn btn-danger mx-2">
          Go back
        </Link>
      </Form>}
    </Container>
  )
}

export default EditProject