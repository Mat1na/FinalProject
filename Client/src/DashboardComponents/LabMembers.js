import React from 'react'
import {Link} from 'react-router-dom';
import { Button, Container, Table } from 'react-bootstrap';
import { AiFillEdit} from 'react-icons/ai';
import { RiDeleteBin6Fill} from 'react-icons/ri';
import {BsFillPersonPlusFill} from 'react-icons/bs';


function LabMembers() {
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <Link to={"/labmembers/editlabmembers/:memberid"} className="btn btn-primary mx-2"><AiFillEdit/></Link>
              <Button variant="danger" className='mx-1'><RiDeleteBin6Fill/></Button>
            </td>
          </tr>
        </tbody>
      </Table>
      </Container>
    </>
  )
}

export default LabMembers