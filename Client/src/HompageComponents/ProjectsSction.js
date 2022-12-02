import React, { useEffect, useState, useRef } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import useNativeLazyLoading from '@charlietango/use-native-lazy-loading';

function ProjectsSction({ width, height, src, alt, ...rest }) {
  const [projects, setProjects] = useState([]);


  const { ref: myRow1, inView: myRow1IsVisible } = useInView({ triggerOnce: true })
  const { ref: myRow2, inView: myRow2IsVisible } = useInView({ triggerOnce: true })

  // const ref = useRef(new Array());

  console.log(myRow1IsVisible, myRow2IsVisible)

  const supportsLazyLoading = useNativeLazyLoading();
  const { ref: myImg, inView: myImgIsVisible } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
    skip: supportsLazyLoading !== false,
  });




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
        <h1 className={`text-left lab-title montserrat pb-5 divslide-before ${myRow1IsVisible ? "divslide" : ""}`} ref={myRow1}>Research projects</h1>
        <div className="d-flex flex-wrap justify-content-center">
          <Row>
            {projects.map((project, e) => (
              <>
                <Col md={4} className={`row-elem divslide-before  ${myRow1IsVisible ? "divslide2" : ""}`} ref={myImg} data-inview={myImgIsVisible} >
                  <Link to={`/project/${project.title.replace(/\s/g, '-').toLowerCase()}`} className="project-link">
                    <div className=" projects d-flex justify-content-center" >
                      {myImgIsVisible || supportsLazyLoading ? (
                        <img
                          src={project.image}
                          className="project-photo" alt={project.title}
                          loading="lazy"
                          {...rest}
                        />
                      ) : null}

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

export default ProjectsSction;
