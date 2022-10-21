import React from 'react'
import {Link} from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { AiFillEdit} from 'react-icons/ai';
import { RiDeleteBin6Fill} from 'react-icons/ri';
import {BsFillPersonPlusFill} from 'react-icons/bs';

function LabMembers() {
  return (
    <>
      <h1>Lab Members List </h1>
      <div>
        <Link to={"/labmembers/create"}>
      <Button variant="secondary"><BsFillPersonPlusFill></BsFillPersonPlusFill> Add new member</Button>
      </Link>
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
              <Button variant="primary"><AiFillEdit/></Button>
              <Button variant="danger"><RiDeleteBin6Fill/></Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default LabMembers