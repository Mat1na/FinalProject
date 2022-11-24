import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
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
    <Container fluid className='mb-5'>
      <div className="m-5">
        <Row>
          <Col sm={4}><div className="research-photo-container">
            <img src={project.image} alt={project.title} className='project-details' />
            <div className="project-photo-container-overlay"></div>
          </div>
          </Col>
          <Col>
          <h3 className='montserrat research-title'>{project.title}</h3>
          <p className='roboto research-text'>{project.content}</p>
          </Col>
        </Row>
        <Card className="">
          <Card.Title>
            <h1 className="text-center m-5">{project.title}</h1>
          </Card.Title>
          <Card.Img variant="top-details p-4" src={project.image} />
          <p className="text-end px-4">{project.imagetext}</p>
          <a
            href={project.imagetextlink}
            className="text-end px-4"
            target="_blank"
            rel="noreferrer"
          >
            {project.imagetextlink}
          </a>
          <Card.Body>
            <Card.Text className="px-5">{project.content}</Card.Text>
            <h6 className="px-5">Researchers: {researchersList.map((researcher, index, array) => {
              if (index + 1 === array.length) {
                return <Link
                  to={`/labmember/${researcher.researcher
                    .replace(/\s/g, "-")
                    .toLowerCase()}`}
                >
                  <p className="d-inline">{researcher.researcher}</p>
                </Link>
              }
              else {
                return <Link
                  to={`/labmember/${researcher.researcher
                    .replace(/\s/g, "-")
                    .toLowerCase()}`}
                >
                  <p className="d-inline">{researcher.researcher}, </p>
                </Link>
              }
            })}
            </h6>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default ProjectDetails;
