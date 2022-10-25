import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CreateLabMembers() {
  const [val, setVal] = useState([]);
  const [input, setInput] = useState({
    membername: "",
    image: "",
    functionbasic: "",
    functionextra: "",
    interest1: "",
    interest2: "",
    interest3: "",
    interest4: "",
    interest5: "",
    googlescholar: "",
    researchgate: "",
    orcid: "",
    twitter: "",
    email: "",
    currentmember: "",
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

  // Requierd field alert
  function btnClick() {
    if (input.membername == undefined || input.membername == "") {
      alert("Name isrequired");
    }
    if (input.image == undefined || input.image == "") {
      alert("Image is required");
    }
    if (input.functionbasic == undefined || input.functionbasic == "") {
      alert("function is required");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(input);
    fetch("http://localhost:3001/labmembers/create-member", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    }).then(() => {
      alert("Lab member has been added to the system!");
    });
  }

  return (
    <>
      <Container>
        <h1>Create new lab member</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Naam</Form.Label>
            <Form.Control
              required="This is required."
              name="membername"
              onChange={handleChange}
              value={input.membername}
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
            <Form.Label>Functie</Form.Label>
            <Form.Control
              required
              name="functionbasic"
              onChange={handleChange}
              value={input.functionbasic}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Functie (extra lijn)</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="functionextra"
              value={input.functionextra}
            />
          </Form.Group>

          <Form.Group className="mb-3"></Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Interesses</Form.Label>

            <Form.Control
              name="interest1"
              onChange={handleChange}
              value={input.interest1}
              
            />

            <Form.Control
              name="interest2"
              onChange={handleChange}
              value={input.interest2}
              className="mt-2"
            />

            <Form.Control
              name="interest3"
              onChange={handleChange}
              value={input.interest3}
              className="mt-2"
            />

            <Form.Control
              name="interest4"
              onChange={handleChange}
              value={input.interest4}
              className="mt-2"
            />

            <Form.Control
              name="interest5"
              onChange={handleChange}
              value={input.interest5}
              className="mt-2"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link Google Scholar</Form.Label>
            <Form.Control
              name="googlescholar"
              onChange={handleChange}
              value={input.googlescholar}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link ResearchGate</Form.Label>
            <Form.Control
              name="researchgate"
              onChange={handleChange}
              value={input.researchgate}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link ORCiD</Form.Label>
            <Form.Control
              name="orcid"
              onChange={handleChange}
              value={input.orcid}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link Twitter</Form.Label>
            <Form.Control
              name="twitter"
              onChange={handleChange}
              value={input.twitter}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>E-mailadres</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              value={input.email}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="me-2">Huidig lid?</Form.Label>
            <Form.Check
              required
              inline
              name="currentmember"
              type="radio"
              label="Yes"
              value="yes"
              onClick={handleChange}
            />
            <Form.Check
              inline
              name="currentmember"
              type="radio"
              label="No"
              value="no"
              onClick={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={(e) => btnClick()}>
            Submit
          </Button>
          <Link to={"/labmembers"} className="btn btn-danger mx-2">
            Cancel
          </Link>
        </Form>
      </Container>
    </>
  );
}

export default CreateLabMembers;
