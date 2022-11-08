import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function CreateProject() {
  const [input, setInput] = useState({
    title: "",
    image: "",
    content: "",
    summary: "",
    researcher: "",
    imagetext: "",
    imagetextlink: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(input);
    fetch("http://localhost:3001/projects/create-project", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
    alert("Project has been added to the system!");

    // Clear input fields after submit
    setInput({
      title: "",
      image: "",
      content: "",
      summary: "",
      researcher: "",
      imagetext: "",
      imagetextlink: "",
    });
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
      <h1 className="mt-3">Create new project</h1>
      <Link to={"/projects"} className="btn btn-danger mr-2 mb-2">
          Go back
        </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            name="title"
            onChange={handleChange}
            value={input.title}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Link image</Form.Label>
          <Form.Control
            required
            name="image"
            onChange={handleChange}
            value={input.image}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            required
            name="content"
            onChange={handleChange}
            value={input.content}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Summary</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            required
            name="summary"
            onChange={handleChange}
            value={input.summary}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Researcher</Form.Label>
          <Form.Control
            required
            name="researcher"
            onChange={handleChange}
            value={input.researcher}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image text</Form.Label>
          <Form.Control
            name="imagetext"
            onChange={handleChange}
            value={input.imagetext}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image text link</Form.Label>
          <Form.Control
            name="imagetextlink"
            onChange={handleChange}
            value={input.imagetextlink}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={btnClick}>
          Submit
        </Button>
        <Link to={"/projects"} className="btn btn-danger mx-2">
          Go back
        </Link>
      </Form>
    </Container>
  );
}

export default CreateProject;
