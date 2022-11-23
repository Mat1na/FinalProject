import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProjectsSction() {
  const [projects, setProjects] = useState([]);
  const fetchProjectList = async () => {
    let res = await fetch("http://localhost:3001/projects/fetch-projects");
    let data = await res.json();
    console.log(data);
    setProjects(data);
  };
  useEffect(() => {
    fetchProjectList();
  }, []);

  return (
    <>
      <Container>
        <h1 className="text-center p-5 lab-title">Research projects</h1>
        <div className="d-flex flex-wrap justify-content-center">
          <Row>
          {projects.map((project) => (
            <>
             {/* <div className="m-3">
             <Card  className="project-card">
              <Link to={`/project/${project.title.replace(/\s/g, '-').toLowerCase()}`}>
              <Card.Img variant="top" className="" src={project.image} />
             </Link>
              <Card.Body>
             <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.summary}</Card.Text>
                <Card.Link href={`/project/${project.title.replace(/\s/g, '-').toLowerCase()}`} >Read more</Card.Link>
              </Card.Body>
            </Card> 
            </div> */}
            <Col md={4}>
   
              <div className=" projects d-flex justify-content-center align-items-center">
                <img
                  src={project.image}
                  className="project-photo" alt={project.title}
                />
                <div className="project-photo-overlay">
          
                  <p className="roboto">
                  {project.title}
                  </p>
                </div>
              </div>
      
            </Col>
            </>
          ))}
          </Row>
        </div>
        
      </Container>
    </>
  );
}

export default ProjectsSction;
