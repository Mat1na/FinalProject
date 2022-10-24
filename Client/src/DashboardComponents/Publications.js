import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsFillPersonPlusFill } from "react-icons/bs";

function Publications() {
  return (
    <>
      <Container>
        <h1>Publications List </h1>
        <div>
          <Link
            to={"/publications/create-pub"}
            className="btn btn-secondary mb-2"
          >
            <BsFillPersonPlusFill></BsFillPersonPlusFill> Add new publication
          </Link>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Journal name</th>
              <th>Issue & page No</th>
              <th>Year</th>
              <th>Abstract</th>
              <th>Authors</th>
              <th>Link</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>

              <td>
                <Link
                  to={"/publications/editpub/:pubid"}
                  className="btn btn-primary mx-2"
                >
                  <AiFillEdit />
                </Link>
                <Button variant="danger" className="mx-1">
                  <RiDeleteBin6Fill />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Publications;
