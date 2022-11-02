import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

function Publications() {
  const [publicationList, setPublicationList] = useState([]);
  const fetchPublications = async () => {
    let res = await fetch(
      "http://localhost:3001/publications/fetch-publications"
    );
    let data = await res.json();
    if (res.ok) {
      console.log(data);
      data.sort(function (a, b) {
        var textA = a.publicationtitle.toUpperCase();
        var textB = b.publicationtitle.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      setPublicationList(data);
    }
  };
  useEffect(() => {
    fetchPublications();
  }, []);

  // Delete button
  const Delete = (_id) => {
    console.log("deleted:", _id);
    fetch(`http://localhost:3001/publications/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .catch((error) => {
        window.alert(error);
        return;
      })
      .then(() => {
        alert(`Publication has been deleted!`);
        fetchPublications();
      });
  };
  const handleDeleteBtn = (_id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => Delete(_id),
        },
        {
          label: "No",
          // onClick: () => alert('Click No')
        },
      ],
    });
  };

  return (
    <>
      <Container>
        <h1>Publications List </h1>
        <div>
          <Link
            to={"/publications/create-pub"}
            className="btn btn-secondary m-2"
          >
           <BsFillPersonPlusFill/> Add new publication
          </Link>
          <Link to={"/dashboard"} className="btn btn-danger m-2">
          Go to Dashboard
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
            {publicationList.length > 0 &&
              publicationList.map((publication, index) => {
                return (
                  <tr key={publication._id} id={publication._id}>
                    <td>{index + 1}</td>
                    <td>{publicationList[index].publicationtitle}</td>
                    <td>{publicationList[index].journal}</td>
                    <td>
                      <Link
                        to={`/publications/edit-pub/${publication._id}`}
                        className="btn btn-primary mx-2"
                      >
                        <AiFillEdit />
                      </Link>
                      <Button
                        variant="danger"
                        className="mx-1"
                        onClick={() => handleDeleteBtn(publication._id)}
                      >
                        <RiDeleteBin6Fill />
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Publications;
