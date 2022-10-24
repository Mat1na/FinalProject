import React, { useState } from 'react'
import { Container, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function CreateLabMembers() {
  const [input, setInput] = useState({
    membername: '',
    image: '',
    functionbasic: '',
    functionextra: '',
    interest1: '',
    interest2: '',
    interest3: '',
    interest4: '',
    interest5: '',
    googlescholar: '',
    researchgate: '',
    orcid: '',
    twitter: '',
    email: '',
    currentmember: ''
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
    fetch('http://localhost:3001/labmembers/create-member', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input)
    })
      .then(() => {
        alert('Lab member has been added to the system!');
      })
  }


  return (
    <>
      <Container>
        <h1>Create new Lab Member</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Naam</Form.Label>
            <Form.Control required name="membername" onChange={handleChange} value={input.name} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link image</Form.Label>
            <Form.Control required name="image" onChange={handleChange} value={input.image} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Functie</Form.Label>
            <Form.Control name="functionbasic" onChange={handleChange} value={input.functionbasic} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Functie (extra lijn)</Form.Label>
            <Form.Control onChange={handleChange} name="functionextra" value={input.functionextra} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Interesse 1</Form.Label>
            <Form.Control name="interest1" onChange={handleChange} value={input.interest1} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Interesse 2</Form.Label>
            <Form.Control name="interest2" onChange={handleChange} value={input.interest2} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Interesse 3</Form.Label>
            <Form.Control name="interest3" onChange={handleChange} value={input.interest3} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Interesse 4</Form.Label>
            <Form.Control name="interest4" onChange={handleChange} value={input.interest4} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Interesse 5</Form.Label>
            <Form.Control name="interest5" onChange={handleChange} value={input.interest5} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link Google Scholar</Form.Label>
            <Form.Control name="googlescholar" onChange={handleChange} value={input.googlescholar} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link ResearchGate</Form.Label>
            <Form.Control name="researchgate" onChange={handleChange} value={input.researchgate} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link ORCiD</Form.Label>
            <Form.Control name="orcid" onChange={handleChange} value={input.orcid} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link Twitter</Form.Label>
            <Form.Control name="twitter" onChange={handleChange} value={input.twitter} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>E-mailadres</Form.Label>
            <Form.Control type="email" name="email" onChange={handleChange} value={input.email} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="me-2">Huidig lid? </Form.Label>
            <Form.Check required inline name="currentmember" type="radio" label="Yes" value="yes" onClick={handleChange} />
            <Form.Check inline name="currentmember" type="radio" label="No" value="no" onClick={handleChange} />
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