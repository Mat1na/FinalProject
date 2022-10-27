import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";

function Authors() {
  const [authorList, setAuthorList] = useState([]);
  const fetchAuthors = async () => {
    let res = await fetch('http://localhost:3001/authors/fetch-authors')
    let data = await res.json();
    if (res.ok) {
      console.log(data)
      setAuthorList(data);
    }
  };
  useEffect(() => {
    fetchAuthors()
  }, []);

  // Delete button
  const handleDeleteBtn = (_id) => {
  
    
    console.log(_id)
  
// authorList.map(selectedAuthor=>fetch(`http://localhost:3001/authors/author/${selectedAuthor.id}`,{
//       method: "DELETE",
//       headers: {
//           'Content-type': 'application/json'
//       }
//   }).catch((error) => {
//     window.alert(error);
//     return;
//   }) 
//   )
 
//   const newAuthList = authorList.filter((author) => author._id !== selectedAuthor._id);
//    setAuthorlist(newAuthList);
  
  
  };

  return (
    <Container>

      <h1>Authors</h1>
      <Link to={"/authors/create-author"} className="btn btn-secondary mb-2" > Add new Author</Link>
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
            {authorList.length > 0 && authorList.map((author, index) => {
              return <tr>
                <td>{index + 1}</td>
                <td   
                key={author._id}
                 id={author._id}>{authorList[index].authorname}</td>
                <td>
                  <Link
                    to={"/authors/author/:authorid"}
                    className="btn btn-primary mx-2"><AiFillEdit />
                  </Link>
                  <Button variant="danger" className="mx-1" onClick={()=>handleDeleteBtn(author._id)}>
                    <RiDeleteBin6Fill />
                  </Button>
                </td>
              </tr>
            })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Authors;
