import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function EditPubList() {
  return (
    <Container>
      <h1>Edit Publication</h1>
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="journal">
          <Form.Label>Journal</Form.Label>
          <Form.Control type="text" placeholder="Enter journal name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="year">
          <Form.Label>Year</Form.Label>
          <Form.Control type="text" placeholder="Enter year of issue" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="issue">
          <Form.Label>Issue & page No</Form.Label>
          <Form.Control type="text" placeholder="Issue & page No" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="authors">
          <Form.Label>Authors</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Author1 name"
            className=""
          />
          <Form.Control
            type="text"
            placeholder="Enter Author2 name"
            className="mt-2"
          />
          <Form.Control
            type="text"
            placeholder="Enter Author3 name"
            className="mt-2"
          />
          <Form.Control
            type="text"
            placeholder="Enter Author4 name"
            className="mt-2"
          />
          <Form.Control
            type="text"
            placeholder="Enter Author5 name"
            className="mt-2"
          />
          <Form.Control
            type="text"
            placeholder="Enter Author6 name"
            className="mt-2"
          />
          <Form.Control
            type="text"
            placeholder="Enter Author7 name"
            className="mt-2"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="abstract">
          <Form.Label>Abstract</Form.Label>
          <Form.Control type="text" placeholder="Abstract" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="link">
          <Form.Label>Link</Form.Label>
          <Form.Control type="text" placeholder="Enter journal link" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imageLink">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="Enter image link" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Link to={"/publications"} className="btn btn-danger mx-2">
          Cancel
        </Link>
      </Form>
    </Container>
  );
}

export default EditPubList;
