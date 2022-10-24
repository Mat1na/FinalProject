import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function CreateLabMembers() {
  return (
    <>
      <Container>
        <h1>Create new Lab Member</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Link to={'/labmembers'} className="btn btn-danger mx-2">
            Cancel
          </Link>
        </Form>
      </Container>
    </>
  )
}

export default CreateLabMembers