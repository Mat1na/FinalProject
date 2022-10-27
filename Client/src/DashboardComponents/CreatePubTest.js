import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function CreatePub() {
  const [inputList, setInputList] = useState([{ author: "" }]);
  const [input, setInput] = useState({
    title: "",
    journal: "",
    year: "",
    issue: "",
    author1: "",
    author2: "",
    author3: "",
    author4: "",
    author5: "",
    author6: "",
    author7: "",
    author8: "",
    author9: "",
    author10: "",
    author11: "",
    author12: "",
    author13: "",
    author14: "",
    author15: "",
    abstract: "",
    link: "",
    image: "",
  });

  function handleChange(event, index) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });

    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  }

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { author: "" }]);
  };

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
    }).then(() => {
      alert("Project has been added to the system!");
    });
  }

  // Requierd field alert
  function btnClick() {
    if (input.title == undefined || input.title == "") {
      alert("Title is required");
    }
    if (input.journal == undefined || input.journal == "") {
      alert("Journal is required");
    }
  }

  return (
    <Container>
      <h1>Create new publication</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Titel</Form.Label>
          <Form.Control
            required
            name="title"
            placeholder="Title goes here"
            onChange={handleChange}
            value={input.title}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Journal</Form.Label>
          <Form.Control
            required
            name="journal"
            placeholder="Enter journal name"
            onChange={handleChange}
            value={input.journal}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Control
            name="year"
            placeholder="Enter year of issue"
            onChange={handleChange}
            value={input.year}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="issue">
          <Form.Label>Issue & page No</Form.Label>
          <Form.Control
            type="text"
            name="issue"
            placeholder="Issue & page No"
            onChange={handleChange}
            value={input.issue}
          />
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

        <Form.Group className="mb-3">
          <Form.Label>Abstract</Form.Label>
          <Form.Control
            name="abstract"
            onChange={handleChange}
            value={input.abstract}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Link</Form.Label>
          <Form.Control
            name="link"
            onChange={handleChange}
            value={input.link}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Link image</Form.Label>
          <Form.Control
            name="image"
            onChange={handleChange}
            value={input.image}
          />
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
