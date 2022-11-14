import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function LabmembersSection() {
  const [labmemberList, setLabmemberList] = useState([]);
  // const [postDoc, setPostDoc] = useState([]);
  // const [PhDStudent, setPhDStudent] = useState([]);
  // const [masterStudent, setMasterStudent] = useState([]);
  // const [labmemberList, setLabmemberList] = useState([]);
  // const [labmemberList, setLabmemberList] = useState([]);
  const fetchLabmembers = async () => {
    let res = await fetch("http://localhost:3001/labmembers/fetch-labmembers");
    let data = await res.json();
    setLabmemberList(data);
    console.log(data);
  };
  useEffect(() => {
    fetchLabmembers();
  }, []);


  labmemberList.map((member, index) => {
console.log(labmemberList[index].functionbasic

)

  })

  return (
    <>
      <h1>Lab members</h1>
     
      <Container>
            <Row className="p-3 d-flex justify-content-center text-center">
            <h2 className="p-5">Current members</h2>
      {labmemberList.map((member, index) => {
        return (
          <>
                  
            {labmemberList[index].currentmember === "Yes" ? (
              // Grid system with shifting number of elements
                <Col sm={5} md={4} lg={3} xl={2}className="p-3 d-flex justify-content-center">
                <div className="">
                <img src={`${labmemberList[index].image}`} className="member-photo "></img>
                <h5 className="pt-3">{labmemberList[index].membername}</h5>
                </div>
              </Col>
            ) : (
           ""
            )}
       
          </>
        );
      })}
      <h2 className="p-5">Alumni</h2>
           {labmemberList.map((member, index) => {
        return (
          <>
                  
            {labmemberList[index].currentmember === "No" ? (
                <Col md={3} className="p-3 d-flex justify-content-center text-center">
                
                <div className="">
                <h5>{labmemberList[index].membername}</h5>
                </div>
              </Col>
            ) : (
           ""
            )}
       
          </>
        );
      })}
       </Row>
           </Container>
    </>
  );
}

export default LabmembersSection;
