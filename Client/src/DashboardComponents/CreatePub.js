import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function CreatePub() {
  const [input, setInput] = useState({
    publicationtitle: '',
    journal: '',
    year: '',
    issue: '',
    author1: '',
    author2: '',
    author3: '',
    author4: '',
    author5: '',
    author6: '',
    author7: '',
    author8: '',
    author9: '',
    author10: '',
    author11: '',
    author12: '',
    author13: '',
    author14: '',
    author15: '',
    abstract: '',
    link: '',
    image: ''
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
    fetch('http://localhost:3001/publications/create-pub', {
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

  // Requierd field alert
  function btnClick() {
    if (input.publicationtitle === undefined || input.publicationtitle === "") {
      alert("Title is required")
    }
    if (input.journal === undefined || input.journal === "") {
      alert("Journal is required")
    }


  }

  return (
    <Container>
      <h1>Create new publication</h1>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" >
          <Form.Label>Title</Form.Label>
          <Form.Control required name="publicationtitle" onChange={handleChange} value={input.publicationtitle} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Journal</Form.Label>
          <Form.Control required name="journal" onChange={handleChange} value={input.journal} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Control name="year" onChange={handleChange} value={input.year} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="issue">
          <Form.Label>Issue & page number</Form.Label>
          <Form.Control type="text" name="issue" onChange={handleChange} value={input.issue} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="authors">
          <Form.Label>Authors</Form.Label>
          <Form.Control
            placeholder="Enter first author name"
            required
            onChange={handleChange}
            name="author1"
            value={input.author1}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter second author name"
            className="mt-2"
            name="author2"
            value={input.author2}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter third author name"
            className="mt-2"
            name="author3"
            value={input.author3}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter fourth author name"
            className="mt-2"
            name="author4"
            value={input.author4}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter fifth author name"
            className="mt-2"
            name="author5"
            value={input.author5}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter sixth author name"
            className="mt-2"
            name="author6"
            value={input.author6}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter seventh author name"
            className="mt-2"
            name="author7"
            value={input.author7}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter eighth author name"
            className="mt-2"
            name="author8"
            value={input.author8}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter ninth author name"
            className="mt-2"
            name="author9"
            value={input.author9}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter tenth author name"
            className="mt-2"
            name="author10"
            value={input.author10}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter eleventh author name"
            className="mt-2"
            name="author11"
            value={input.author11}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter twelfth author name"
            className="mt-2"
            name="author12"
            value={input.author12}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter thirteenth author name"
            className="mt-2"
            name="author13"
            value={input.author13}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter fourteenth author name"
            className="mt-2"
            name="author14"
            value={input.author14}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter fifteenth author name"
            className="mt-2"
            name="author15"
            value={input.author15}
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Abstract</Form.Label>
          <Form.Control name="abstract" onChange={handleChange} value={input.abstract} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Link</Form.Label>
          <Form.Control name="link" onChange={handleChange} value={input.link} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Link image</Form.Label>
          <Form.Control name="image" placeholder="Enter the link of the image you uploaded" onChange={handleChange} value={input.image} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={btnClick}>
          Submit
        </Button>
        <Link to={"/publications"} className="btn btn-danger mx-2">
          Cancel
        </Link>
      </Form>
    </Container>
  );
}

export default CreatePub;