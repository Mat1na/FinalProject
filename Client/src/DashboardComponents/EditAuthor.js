import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function EditAuthor() {
  const { authorid } = useParams();
  const [author, setAuthor] = useState({});

  const fetchAuthor = async () => {
    let res = await fetch("http://localhost:3001/authors/fetch-authors");
    let data = await res.json();
    if (res.ok) {
      var filtereddata = data.find((item) => item._id === authorid);
      setAuthor(filtereddata);
    }
  };
  useEffect(() => {
    fetchAuthor();
  }, []);

  return (
    <Container>
      <h1>Edit Author</h1>
      {Object.keys(author).length > 0 && (
        <Form>
          <Form.Group className="mb-3" controlId="authorname">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue={author.authorname} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
          <Link to={"/authors"} className="btn btn-danger mx-2">
            Cancel
          </Link>
        </Form>
      )}
    </Container>
  );
}

export default EditAuthor;
