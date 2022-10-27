import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function EditLabMember() {
  return (
    <Container>
      <h1>Edit Lab Member</h1>
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
          Edit
        </Button>
        <Link to={"/labmembers"} className="btn btn-danger mx-2">
          Cancel
        </Link>
      </Form>
    </Container>
  );
}

export default EditLabMember;
