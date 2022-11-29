import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function ProjectDetails() {
  const { proj } = useParams();
  const [project, setProject] = useState([]);
  const [researchersList, setResearchersList] = useState([]);
  const fetchProject = async () => {
    let res = await fetch("http://localhost:3001/projects/fetch-projects");
    let data = await res.json();
    let projectParam = proj.split("-").toString();
    if (res.ok) {
      var filtereddata = data.find(
        (item) =>
          item.title
            .toLowerCase()
            .split(/[\s-]+/)
            .toString() === projectParam
      );
      console.log("param:", proj);
      console.log(filtereddata.researchers);
      setProject(filtereddata);
      setResearchersList(filtereddata.researchers);
    }
  };
  useEffect(() => {
    fetchProject();
  }, [proj]);

  return (
    <Container fluid className='project-container'>
      <div className="">
        <Row className="d-flex align-items-center">
          <Col md={4}><div className="research-photo-container ">
            <img src={project.image} alt={project.title} className='project-details' />
            <div className="project-photo-container-overlay"></div>
            { project.imagetext!==''&&<figcaption className='roboto'>{project.imagetext}</figcaption>}
          </div>
          </Col>
          <Col md={8} className="project-details-text">
            <h3 className='montserrat project-title pt-4 ps-4 pe-5'>{project.title}</h3>
            <p className='roboto project-text ps-4 pe-5'>{project.content}</p>
            <h6 className="ps-4 pb-4 pe-5 roboto">Researchers: {researchersList.map((researcher, index, array) => {
              if (index + 1 === array.length) {
                return <Link
                  to={`/labmember/${researcher.researcher
                    .replace(/\s/g, "-")
                    .toLowerCase()}`}
                >
                  <p className="d-inline project-labmember roboto">{researcher.researcher}</p>
                </Link>
              }
              else {
                return <Link
                  to={`/labmember/${researcher.researcher
                    .replace(/\s/g, "-")
                    .toLowerCase()}`}
                >
                  <p className="d-inline project-labmember roboto">{researcher.researcher}, </p>
                </Link>
              }
            })}
            </h6>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ProjectDetails;
