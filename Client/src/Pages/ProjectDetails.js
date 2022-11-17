import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Container } from "react-bootstrap";
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
    <Container>
      <div className="m-5">
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
            <h6 className="px-5">Researchers: {researchersList.map((researcher) => (
                <Link
                  to={`/labmember/${researcher.researcher
                    .replace(/\s/g, "-")
                    .toLowerCase()}`}
                >
                  <p className="d-inline">{researcher.researcher},</p>
                </Link>
              ))}
            </h6>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default ProjectDetails;
