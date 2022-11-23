import React, { useEffect, useState, useRef } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProjectsSction() {
  const [projects, setProjects] = useState([]);
  const selectedProject = useRef(null)





  const fetchProjectList = async () => {
    let res = await fetch("http://localhost:3001/projects/fetch-projects");
    let data = await res.json();
    console.log(data);
    setProjects(data);

  };
  useEffect(() => {
    fetchProjectList();
  }, [selectedProject]);


  return (
    <>
      <Container>
        <h1 className="text-left lab-title">Research projects</h1>
        <div className="d-flex flex-wrap justify-content-center">
          <Row>
             {projects.map((project, e) => (
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
                <Col md={4} className='row-elem' ref={selectedProject} onClick={() => console.log(selectedProject.current)}>
                <Link to={`/project/${project.title.replace(/\s/g, '-').toLowerCase()}`} className="project-link">
                  <div className=" projects d-flex justify-content-center" >
                    <img
                      src={project.image}
                      className="project-photo" alt={project.title}
                    />
                    <div className="project-photo-overlay"></div>
                    <div className="project-text-overlay">
                      <p className="roboto">
                        {project.title}
                      </p>
                    </div>
                    <div className="project-summary-container" >
                    <p className="roboto project-summary">
                        {project.summary}.<br/> Read more ...
                    </p>
                    </div>
                  </div>
   </Link>
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
