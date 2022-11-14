import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function LabmembersSection(index) {
  const [labmemberList, setLabmemberList] = useState([]);
  const [functions, setFunctions] = useState([]);
  const [postDoc, setPostDoc] = useState([]);
  const [phDStudent, setPhDStudent] = useState([]);
  const [masterStudent, setMasterStudent] = useState([]);
  const [visitingPhd, setVisitingPhd] = useState([]);
  const [assistantProf, setAssistantProf] = useState([]);
  const fetchLabmembers = async () => {
    
    let res = await fetch("http://localhost:3001/labmembers/fetch-labmembers");
    let data = await res.json();
    setLabmemberList(data);
    console.log(data);
  };
  useEffect(() => {
    fetchLabmembers();
  }, []);

 
  let basicFunctions=labmemberList.map((item,index)=>item.functionbasic)
  console.log(basicFunctions)
 
//     // console.log(labmemberList[index].functionbasic); 
//  if(labmemberList.functionbasic==="Postdoc"){
//   console.log("Postdoc:",labmemberList.membername);
  
//   }
//   else if(labmemberList.functionbasic==="PhD student"){
//     console.log("PhD student:",labmemberList.membername)}



  return (
    <>
      <h1>Lab members</h1>

      <Container>
        <Row className="p-3 d-flex  text-center justify-content-center align-items-center">
          <h2 className="p-5">Current members</h2>
          {labmemberList.map((member, index) => {
            return (
              <>
                {labmemberList[index].currentmember === "Yes" ? (
                  // Grid system with shifting number of elements
                  <Col
                    sm={6}
                    md={5}
                    lg={4}
                    xl={3}
                    className="p-3 d-flex justify-content-center align-items-center"
                  >
                    <div  className="text-center">
                      <div className=" members d-flex justify-content-center align-items-center">
                        <img
                          src={`${labmemberList[index].image}`}
                          className="member-photo "
                        ></img>
                      </div>

                      <h6 className="pt-3">
                        {labmemberList[index].membername}
                      </h6>
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
                  <Col
                    md={3}
                    className="p-3 d-flex justify-content-center text-center"
                  >
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
