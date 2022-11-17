import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoMail } from 'react-icons/go';
import { FaTwitter } from 'react-icons/fa';
import { FaOrcid } from 'react-icons/fa';
import { SiResearchgate } from 'react-icons/si';
import { SiGooglescholar } from 'react-icons/si';


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
                  <>
                    <Col
                      md={12}
                      className="p-3 d-flex justify-content-center align-items-center"
                    >
                      <Link to={`/labmember/${member.membername.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`} >
                        <div className="text-center">
                          <div className=" members d-flex justify-content-center align-items-center"
                          >
                            <img
                              alt={member.membername}
                              src={`${member.image}`}
                              className="member-photo" />
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
                    <Col>
                      <a href={member.googlescholar} className="d-inline p-2" target="_blank" rel="noreferrer"><SiGooglescholar /></a>
                      <a href={member.researchgate} className="d-inline p-2" target="_blank" rel="noreferrer"><SiResearchgate /></a>
                      <a href={member.orcid} className="d-inline p-2" target="_blank" rel="noreferrer"><FaOrcid /></a>
                      <a href={member.twitter} className="d-inline p-2" target="_blank" rel="noreferrer" ><FaTwitter /></a>
                      <a href={`mailto:${member.membername}`} className="d-inline p-2" target="_blank" rel="noreferrer"><GoMail /></a>
                    </Col>
                  </>

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
                  <>
                  <Col
                    sm={6}
                    md={5}
                    lg={4}
                    xl={3}
                    className="p-3 d-flex justify-content-center align-items-center"
                  >
                      <div className="text-center">
                      <Link to={`/labmember/${member.membername.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}>
                        <div className=" members d-flex justify-content-center align-items-center">
                          <img
                            src={`${member.image}`}
                            className="member-photo " alt={member.membername}
                          />
                        </div>
                      <h6 className="pt-3">
                          {member.membername}
                        </h6>
                        <p className="">
                          {member.functionbasic}
                        </p>
                        </Link>
                      {member.googlescholar !== undefined && member.googlescholar !== ""? 
                      ( <a href={member.googlescholar} className="d-inline p-2" target="_blank" rel="noreferrer"><SiGooglescholar /></a>):(" ")}
                       
                       {member.researchgate !==undefined && member.researchgate !==""?
                       (<a href={member.researchgate} className="d-inline p-2" target="_blank" rel="noreferrer"><SiResearchgate /></a>):(" ")}

                       {member.orcid !==undefined && member.orcid !==""?
                       (<a href={member.orcid} className="d-inline p-2" target="_blank" rel="noreferrer"><FaOrcid /></a>):(" ")}

                       {member.twitter !==undefined && member.twitter !==""?
                       (<a href={member.twitter} className="d-inline p-2" target="_blank" rel="noreferrer"><FaTwitter /></a>):(" ")}

                       {member.email!==undefined && member.email!==""?
                       (<a href={`mailto:${member.membername}`} className="d-inline p-2" target="_blank" rel="noreferrer"><GoMail /></a>):(" ")}
                       </div>

                  </Col>
      
                     </>
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
                    <Link to={`/labmember/${member.membername.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}>
                  <div>
                  <h5>{member.membername}</h5>
                      <p className="">
                        {member.functionbasic}
                        {member.googlescholar}
                      </p>
                  </div>
                      </Link>
                      {member.googlescholar !== undefined && member.googlescholar !== ""? 
                      ( <a href={member.googlescholar} className="d-inline p-2" target="_blank" rel="noreferrer"><SiGooglescholar /></a>):(" ")}
                       
                       {member.researchgate !==undefined && member.researchgate !==""?
                       (<a href={member.researchgate} className="d-inline p-2" target="_blank" rel="noreferrer"><SiResearchgate /></a>):(" ")}

                       {member.orcid !==undefined && member.orcid !==""?
                       (<a href={member.orcid} className="d-inline p-2" target="_blank" rel="noreferrer"><FaOrcid /></a>):(" ")}

                       {member.twitter !==undefined && member.twitter !==""?
                       (<a href={member.twitter} className="d-inline p-2" target="_blank" rel="noreferrer"><FaTwitter /></a>):(" ")}

                       {member.email!==undefined && member.email!==""?
                       (<a href={`mailto:${member.membername}`} className="d-inline p-2" target="_blank" rel="noreferrer"><GoMail /></a>):(" ")}

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
