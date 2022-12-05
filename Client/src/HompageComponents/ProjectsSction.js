import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';


function ProjectsSction({scrollPosition }) {
  const [projects, setProjects] = useState([]);
  const { ref: myProj, inView: myProjIsVisible } = useInView({ triggerOnce: true })
  

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
      <Container fluid className='mt-0 mb-0'>
        <h1 className={`text-left lab-title montserrat pb-5 divslide-before ${myProjIsVisible ? "divslide" : ""}`} ref={myProj}>Research projects</h1>
        <div className="d-flex flex-wrap justify-content-center">
          <Row>
            {projects.map((project, e) => (
              <>
                <Col md={4} className={`row-elem divslide-before  ${myProjIsVisible ? "divslide2" : ""}`}  >
                  <Link to={`/project/${project.title.replace(/\s/g, '-').toLowerCase()}`} className="project-link">
                    <div className=" projects d-flex justify-content-center" >
                          <LazyLoadImage
                          src={project.image}
                          className="project-photo" alt={project.title}
                          loading="lazy"
                          effect="blur"
                          scrollPosition={scrollPosition}
                        
                        />
                     <div className="project-photo-overlay" ></div>
                      <div className="project-text-overlay">
                        <h3 className="montserrat projecttitle">
                          {project.title}
                        </h3>
                      </div>
                      <div className="project-summary-container" >
                        <p className="roboto project-summary mb-1">
                          {project.summary}.</p><p className='roboto project-summary readmore'> Read more ...
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

export default trackWindowScroll (ProjectsSction);
