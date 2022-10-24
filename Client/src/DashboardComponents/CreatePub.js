import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Form } from 'react-router-dom'

function CreatePub() {
  return (
    <Container>
        <h1>Create new Publication</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formGridTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridJournal">
            <Form.Label>Journal</Form.Label>
            <Form.Control type="text" placeholder="Enter journal name" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Link to={'/dashboard'} className="btn btn-danger mx-2">
            Cancel
          </Link>
        </Form>
      </Container>
  )
}

export default CreatePub
