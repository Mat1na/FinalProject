import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

function Authors() {
  const [authorList, setAuthorList] = useState([]);
  const fetchAuthors = async () => {
    let res = await fetch("http://localhost:3001/authors/fetch-authors");
    let data = await res.json();
    if (res.ok) {
      console.log(data);
      data.sort(function (a, b) {
        var textA = a.authorname.toUpperCase();
        var textB = b.authorname.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      setAuthorList(data);
    }
  };
  useEffect(() => {
    fetchAuthors();
  }, []);

  // Delete button
  const Delete = (_id) => {
    console.log("deleted:", _id);
    fetch(`http://localhost:3001/authors/${_id}`, {
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
        alert(`Author has been deleted!`);
        fetchAuthors();
      });
  };

  const handleDeleteBtn = (_id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do this.",
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
    <Container>
      <h1>Authors</h1>
      <Link to={"/authors/create-author"} className="btn btn-secondary mb-2">
        {" "}
        Add new Author
      </Link>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {authorList.length > 0 &&
              authorList.map((author, index) => {
                return (
                  <tr key={author._id}>
                    <td>{index + 1}</td>
                    <td id={author._id}>{authorList[index].authorname}</td>
                    <td>
                      <Link
                        to={`/authors/edit-author/${author._id}`}
                        className="btn btn-primary mx-2"
                      >
                        <AiFillEdit />
                      </Link>
                      <Button
                        variant="danger"
                        className="mx-1"
                        onClick={() => handleDeleteBtn(author._id)}
                      >
                        <RiDeleteBin6Fill />
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Authors;
