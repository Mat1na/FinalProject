import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function LabmembersSection(index) {
  const [labmemberList, setLabmemberList] = useState([]);
  const fetchLabmembers = async () => {
    var sortOrder = ["Assistant Professor", "Postdoc", "PhD student", "visiting PhD student", "Master student"];
    let res = await fetch("http://localhost:3001/labmembers/fetch-labmembers");
    let data = await res.json();
    setLabmemberList(data);
    console.log(data);
    var sorted = data.sort((a, b) => sortOrder.indexOf(a.functionbasic
    ) - sortOrder.indexOf(b.functionbasic
    ));

    console.log(sorted);
  };
  useEffect(() => {
    fetchLabmembers();
  }, []);


  // let basicFunctions=labmemberList.map((item)=>item.functionbasic)
  // console.log(basicFunctions)

  //     // console.log(labmemberList[index].functionbasic); 
  //  if(labmemberList.functionbasic==="Postdoc"){
  //   console.log("Postdoc:",labmemberList.membername);

  //   }
  //   else if(labmemberList.functionbasic==="PhD student"){
  //     console.log("PhD student:",labmemberList.membername)}



  return (
    <>
      <Container>
        <Row className="p-3 d-flex  text-center justify-content-center align-items-center">
          <h1 className="pb-5">Lab members</h1>
          <h2 className="p-3">Principal Investigator</h2>
          {labmemberList.map((member, index) => {
            return (
              <>
                {member.currentmember === "Yes" && member.functionbasic === 'Assistant Professor' ? (
                  // Grid system with shifting number of elements
                  <Col
                    md={12}
                    className="p-3 d-flex justify-content-center align-items-center"
                  >
                    <Link>
                      <div className="text-center" key={index}>
                        <div className=" members d-flex justify-content-center align-items-center">
                          <img
                            src={`${member.image}`}
                            className="member-photo "
                          ></img>
                        </div>

                        <h6 className="pt-3">
                          {member.membername}
                        </h6>
                        <p className="">
                          {member.functionbasic}
                        </p>
                      </div>
                    </Link>
                  </Col>
                ) : (
                  ""
                )}
              </>
            );
          })}
          <h2 className="p-5">Current members</h2>
          {labmemberList.map((member, index) => {
            return (
              <>
                {member.currentmember === "Yes" && member.functionbasic !== 'Assistant Professor' ? (
                  // Grid system with shifting number of elements
                  <Col
                    sm={6}
                    md={5}
                    lg={4}
                    xl={3}
                    className="p-3 d-flex justify-content-center align-items-center"
                  >
                    <Link>
                      <div className="text-center" key={index}>
                        <div className=" members d-flex justify-content-center align-items-center">
                          <img
                            src={`${member.image}`}
                            className="member-photo "
                          ></img>

                        </div>

                        <h6 className="pt-3">
                          {member.membername}
                        </h6>
                        <p className="">
                          {member.functionbasic}
                        </p>
                      </div>
                    </Link>
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
                {member.currentmember === "No" ? (
                  <Col
                    md={3}
                    className="p-3 d-flex justify-content-center text-center"

                  >
                    <div className="" key={index}>
                      <h5>{member.membername}</h5>
                      <p className="">
                        {member.functionbasic}
                      </p>
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
