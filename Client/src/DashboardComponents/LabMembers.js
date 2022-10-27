import React, { useEffect, useState }  from 'react'
import {Link} from 'react-router-dom';
import { Button, Container, Table } from 'react-bootstrap';
import { AiFillEdit} from 'react-icons/ai';
import { RiDeleteBin6Fill} from 'react-icons/ri';
import {BsFillPersonPlusFill} from 'react-icons/bs';


function LabMembers() {
  const [labmemberList, setLabmemberList] = useState([]);
  const fetchLabmembers = async () => {
    let res = await fetch('http://localhost:3001/labmembers/fetch-labmembers')
    let data = await res.json();
    if (res.ok) {
      console.log(data)
      setLabmemberList(data);
    }
  };
  useEffect(() => {
    fetchLabmembers()
  }, []);

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
        {labmemberList.length > 0 && labmemberList.map((author, index) => {
              return <tr>
                <td>{index + 1}</td>
                <td>{labmemberList[index].membername}</td>
                <td>{labmemberList[index].functionbasic}</td>
                <td>
                <Link to={"/labmembers/editlabmember/:memberid"} className="btn btn-primary mx-2"><AiFillEdit/></Link>
              <Button variant="danger" className='mx-1'><RiDeleteBin6Fill/></Button>
                </td>
              </tr>
            })}
           </tbody>
      </Table>
      </Container>
    </>
  )
}

export default LabMembers