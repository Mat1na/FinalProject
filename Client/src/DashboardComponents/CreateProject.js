import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function CreateProject() {
  const [input, setInput] = useState({
    title: '',
    image: '',
    content: '',
    summary: '',
    researcher: '',
    imagetext: '',
    imagetextlink: ''
  })

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
    fetch('http://localhost:3001/projects/create-project', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input)
    })
      .then(() => {
        alert('Project has been added to the system!');
      })
  }

  return (
    <Container>
    <h1>Create new project</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Titel</Form.Label>
        <Form.Control required name="title" onChange={handleChange} value={input.title} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Link image</Form.Label>
        <Form.Control required name="image" onChange={handleChange} value={input.image} />
      </Form.Group>
  
      <Form.Group className="mb-3">
        <Form.Label>Inhoud</Form.Label>
        <Form.Control required name="content" onChange={handleChange} value={input.content}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Samenvatting</Form.Label>
        <Form.Control required name="summary" onChange={handleChange} value={input.summary}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Onderzoeker</Form.Label>
        <Form.Control required name="researcher" onChange={handleChange} value={input.researcher}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image text</Form.Label>
        <Form.Control name="imagetext" onChange={handleChange} value={input.imagetext} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image text link</Form.Label>
        <Form.Control name="imagetextlink" onChange={handleChange} value={input.imagetextlink} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link to={"/projects"} className="btn btn-danger mx-2">
        Cancel
      </Link>
    </Form>
  </Container>
  )
}

export default CreateProject