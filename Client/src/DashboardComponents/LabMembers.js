import React, { useEffect, useState }  from 'react'
import {Link} from 'react-router-dom';
import { Button, Container, Table } from 'react-bootstrap';
import { AiFillEdit} from 'react-icons/ai';
import { RiDeleteBin6Fill} from 'react-icons/ri';
import {BsFillPersonPlusFill} from 'react-icons/bs';
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css


function LabMembers() {
  const [labmemberList, setLabmemberList] = useState([]);
  const fetchLabmembers = async () => {
    let res = await fetch('http://localhost:3001/labmembers/fetch-labmembers')
    let data = await res.json();
    if (res.ok) {
      console.log(data)
      data.sort(function(a,b){
        var textA = a.membername.toUpperCase()
        var textB = b.membername.toUpperCase()
        return (textA < textB) ? -1:(textA>textB)?1:0
      })
      setLabmemberList(data);
    }
  };
  useEffect(() => {
    fetchLabmembers()
  }, []);

    // Delete button
    const Delete = (_id) => {
      console.log("deleted:", _id);
      fetch(`http://localhost:3001/labmembers/${_id}`, {
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
          alert(`labmember has been deleted!`);
          fetchLabmembers();
        });
    };
    const handleDeleteBtn = (_id) => {
      confirmAlert({
        title: "Confirm to submit",
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
    <>
    <Container>
      <h1>Lab Members List </h1>
      <div>
        
      <Link to={"/labmembers/create-member"} className="btn btn-secondary mb-2" ><BsFillPersonPlusFill></BsFillPersonPlusFill> Add new member</Link>
      
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Lab member</th>
            <th>Function</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {labmemberList.length > 0 && labmemberList.map((labmember, index) => {
              return (
              <tr key={labmember._id} id={labmember._id}>
                <td>{index + 1}</td>
                <td>{labmemberList[index].membername}</td>
                <td>{labmemberList[index].functionbasic}</td>
                <td>
                <Link to={"/labmembers/edit-labmember/:memberid"} className="btn btn-primary mx-2"><AiFillEdit/></Link>
              <Button variant="danger" className='mx-1' onClick={() => handleDeleteBtn(labmember._id)}><RiDeleteBin6Fill/></Button>
                </td>
              </tr>
              )
            })}
           </tbody>
      </Table>
      </Container>
    </>
  )
}

export default LabMembers