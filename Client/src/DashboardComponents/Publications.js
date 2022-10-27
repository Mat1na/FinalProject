import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsFillPersonPlusFill } from "react-icons/bs";

function Publications() {
  const [publicationList, setPublicationList] = useState([]);
  const fetchPublications = async () => {
    let res = await fetch('http://localhost:3001/publications/fetch-publications')
    let data = await res.json();
    if (res.ok) {
      console.log(data)
      setPublicationList(data);
    }
  };
  useEffect(() => {
    fetchPublications()
  }, []);
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {publicationList.length > 0 && publicationList.map((publication, index) => {
              return <tr>
                <td>{index + 1}</td>
                <td>{publicationList[index].publicationtitle}</td>
                <td>{publicationList[index].journal}</td>
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
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Publications;
