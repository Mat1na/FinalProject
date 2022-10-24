import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function CreateAuthor() {
  return (
    <Container>
    <h1>Create new Author</h1>
    <Form>
      <Form.Group className="mb-3" controlId="authorname">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name, F." />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link to={"/authors"} className="btn btn-danger mx-2">
        Cancel
      </Link>
    </Form>
  </Container>
  )
}

export default CreateAuthor