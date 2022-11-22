import React, { useEffect, useState } from "react";
import { Badge, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GoMail } from "react-icons/go";
import { FaTwitter } from "react-icons/fa";
import { FaOrcid } from "react-icons/fa";
import { SiResearchgate } from "react-icons/si";
import { SiGooglescholar } from "react-icons/si";

function LabmemberDetails() {
  const { lab } = useParams();
  const [member, setMember] = useState([]);
  const [interestsList, setInterestList] = useState([]);

  const fetchLabmember = async () => {
    let res = await fetch("http://localhost:3001/labmembers/fetch-labmembers");
    let data = await res.json();
    let labmeberParam = lab.split("-").toString();
    if (res.ok) {
      var filtereddata = data.find(
        (item) =>
          item.membername.toLowerCase().split(" ").toString() === labmeberParam
      );
      setMember(filtereddata);
      setInterestList(filtereddata.interests)
      console.log("param:",labmeberParam);
      console.log(filtereddata)
      // item => item.membername.toLowerCase().split(" ").toString() === labmeberParam
        ;
    }
  };
  useEffect(() => {
    fetchLabmember();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lab]);

  return (
    <>
      <Container>
        <div className="member-details pt-5">
          {member.image !== undefined && member.image !== " " ? (
            <img
              src={`${member.image}`}
              className="member-details"
              alt={member.membername}
            />
          ) : (
            " "
          )}
        </div>
        <div className="d-block text-center">
          <h2 className="pt-3 montserrat">{member.membername}</h2>
          <p className="roboto">{member.functionbasic}</p>
          <p className="roboto">{member.functionextra}</p>

          <div className="">
            <hr></hr>
            <h3 className='montserrat'>Interests</h3>
            {interestsList.map((item) => (
             <p><Badge bg="secondary" className="">{item.interest}</Badge></p>
            ))}
          </div>
          <div>
            {member.googlescholar !== undefined &&
            member.googlescholar !== "" ? (
              <a
                href={member.googlescholar}
                className="d-inline p-2"
                target="_blank"
                rel="noreferrer"
              >
                <SiGooglescholar size={"2rem"}  className="icons"/>
              </a>
            ) : (
              " "
            )}

            {member.researchgate !== undefined && member.researchgate !== "" ? (
              <a
                href={member.researchgate}
                className="d-inline p-2"
                target="_blank"
                rel="noreferrer"
              >
                <SiResearchgate size={"2rem"}  className="icons"/>
              </a>
            ) : (
              " "
            )}

            {member.orcid !== undefined && member.orcid !== "" ? (
              <a
                href={member.orcid}
                className="d-inline p-2"
                target="_blank"
                rel="noreferrer"
              >
                <FaOrcid size={"2rem"} className="icons" />
              </a>
            ) : (
              " "
            )}

            {member.twitter !== undefined && member.twitter !== "" ? (
              <a
                href={member.twitter}
                className="d-inline p-2"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={"2rem"}  className="icons"/>
              </a>
            ) : (
              " "
            )}

            {member.email !== undefined && member.email !== "" ? (
              <a
                href={`mailto:${member.membername}`}
                className="d-inline p-2"
                target="_blank"
                rel="noreferrer"
              >
                <GoMail size={"2rem"}  className="icons"/>
              </a>
            ) : (
              " "
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

export default LabmemberDetails;
