import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoMail } from "react-icons/go";
import { FaTwitter } from "react-icons/fa";
import { FaOrcid } from "react-icons/fa";
import { SiResearchgate } from "react-icons/si";
import { SiGooglescholar } from "react-icons/si";

function Alumni() {
  const [labmemberList, setLabmemberList] = useState([]);
  const fetchLabmembers = async () => {
    var sortOrder = [
      "Assistant Professor",
      "Postdoc",
      "PhD student",
      "visiting PhD student",
      "Master student",
    ];
    let res = await fetch("http://localhost:3001/labmembers/fetch-labmembers");
    let data = await res.json();
    setLabmemberList(data);
    console.log(data);
    var sorted = data.sort(
      (a, b) =>
        sortOrder.indexOf(a.functionbasic) - sortOrder.indexOf(b.functionbasic)
    );
    // console.log(sorted);
  };
  useEffect(() => {
    fetchLabmembers();
  }, []);
  return (
    <Row className="p-5 text-center ">
      <h1 className="p-5">Alumni</h1>
      {labmemberList.map((member, index) => {
        return (
          <>
            {member.currentmember === "No" ? (
              <Col md={2} className="m-2">
                <Link
                  to={`/labmember/${member.membername
                    .replace(/\s/g, "-")
                    .toLowerCase()}`}
                >
                  <h5>{member.membername}</h5>
                  <p className="">
                    {member.functionbasic}
                    {member.functionextra}
                  </p>
                </Link>
                {member.googlescholar !== undefined &&
                member.googlescholar !== "" ? (
                  <a
                    href={member.googlescholar}
                    className="d-inline p-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiGooglescholar />
                  </a>
                ) : (
                  " "
                )}

                {member.researchgate !== undefined &&
                member.researchgate !== "" ? (
                  <a
                    href={member.researchgate}
                    className="d-inline p-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiResearchgate />
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
                    <FaOrcid />
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
                    <FaTwitter />
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
                    <GoMail />
                  </a>
                ) : (
                  " "
                )}
              </Col>
            ) : (
              ""
            )}
          </>
        );
      })}
    </Row>
  );
}

export default Alumni;
