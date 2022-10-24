import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";

function Authors() {
  return (
    <Container>
      
      <h1>Authors</h1>
      <Link to={"/authors/create_author"} className="btn btn-secondary mb-2" > Add new Author</Link>
      <div>
        <ul>
          <li>
            Author
            <Link
              to={"/authors/editauthor/:author_id"}
              className="btn btn-primary mx-2"><AiFillEdit />
            </Link>
            <Button variant="danger" className="mx-1">
              <RiDeleteBin6Fill />
            </Button>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Authors;
