import React, { useEffect, useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

function LabmembersSection() {
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


  return (
    <>
      <Container fluid>
        <h1 className="pb-5 montserrat lab-title">Lab members</h1>
        <Row className="p-3 d-flex  text-center justify-content-center align-items-center">
          {/* Principal Investigator Section*/}
          <h2 className="p-3 montserrat">Principal Investigator</h2>
          {labmemberList.map((member, index) => {
            return (
              <>
                {member.currentmember === "Yes" && member.functionbasic === 'Assistant Professor' ? (
                  // Grid system with shifting number of elements
                  <>
                    <Col
                      md={5}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Link to={`/labmember/${member.membername.replace(/\s/g, '-').toLowerCase()}`} className="photo-link">
                        <div className=" members d-flex justify-content-center align-items-center"
                        >
                          <img
                            alt={member.membername}
                            src={`${member.image}`}
                            className="member-photo" />
                          <div className="member-photo-overlay">

                          </div>
                          <div className="member-text-overlay">
                            <h6 className="montserrat">
                              {member.membername}
                            </h6>
                            <p className="roboto">
                              {member.functionbasic}
                            </p>
                          </div>
                        </div>
                      </Link>

                    </Col>

                  </>

                ) : (
                  ""
                )}
              </>
            );
          })}
          {/* Current members Section*/}
          <h2 className="p-5 montserrat">Current members</h2>
          {labmemberList.map((member, index) => {
            return (
              <>
                {member.currentmember === "Yes" && member.functionbasic !== 'Assistant Professor' ? (
                  // Grid system with shifting number of elements
                  <>
                    <Col
                      sm={6}
                      md={5}
                      lg={4}
                      xl={3}
                      className="p-3 d-flex justify-content-center align-items-center"
                    >

                        <Link to={`/labmember/${member.membername.replace(/\s/g, '-').toLowerCase()}`} className="photo-link">
                        <div className=" members d-flex justify-content-center align-items-center"
                        >
                          <img
                            alt={member.membername}
                            src={`${member.image}`}
                            className="member-photo" />
                          <div className="member-photo-overlay">

                          </div>
                          <div className="member-text-overlay">
                            <h6 className="montserrat">
                              {member.membername}
                            </h6>
                            <p className="roboto">
                              {member.functionbasic}
                            </p>
                          </div>
                        </div>
                        </Link>


                    </Col>

                  </>
                ) : (
                  ""
                )}
              </>
            );
          })}
          {/* Alumni Section*/}
          <Link to={"/alumni"} className="p-5"><h3 className="d-flex"><Badge className="badge-icon">SEE ALUMNI <BsFillArrowRightCircleFill className="arrow-icon" /></Badge></h3></Link>
        </Row>
      </Container>
    </>
  );
}

export default LabmembersSection;
