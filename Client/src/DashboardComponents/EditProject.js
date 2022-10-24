import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function EditProject() {
  return (
    <Container>
    <h1>Edit Project</h1>
    <Form>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Content</Form.Label>
        <Form.Control type="text" placeholder="Enter content" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="summary">
        <Form.Label>Sort summary</Form.Label>
        <Form.Control type="text" placeholder="Enter summary" />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control  placeholder="Enter image link" className='mb-2'/>
        <Form.Control  placeholder="Enter image source" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="researcher">
        <Form.Label>Researcher</Form.Label>
        <Form.Control type="text" placeholder="Enter researcher" />
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

export default EditProject