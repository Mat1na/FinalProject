import React, { useEffect, useRef, useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useInView } from "react-intersection-observer";
import useNativeLazyLoading from '@charlietango/use-native-lazy-loading';

function LabmembersSection({ width, height, src, alt, ...rest }) {

  const { ref: myRow1, inView: myRow1IsVisible } = useInView({ triggerOnce: true })
  const { ref: myRow2, inView: myRow2IsVisible } = useInView({ triggerOnce: true })
  const { ref: myRow3, inView: myRow3IsVisible } = useInView({ triggerOnce: true })
  // const ref = useRef(new Array());

  console.log(myRow1IsVisible, myRow2IsVisible)

  const supportsLazyLoading = useNativeLazyLoading();
  const { ref: myImgLab, inView: myImgLabIsVisible } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
    skip: supportsLazyLoading !== false,
  });
  const { ref: myImgLab2, inView: myImgLab2IsVisible } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
    skip: supportsLazyLoading !== false,
  });




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
    // console.log("ref",myRow2.current[0]);
  }, []);



  return (
    <>
      <Container fluid className='mt-0 mb-0'>
        <h1 className={`pb-2 montserrat lab-title ${myRow1IsVisible ? "divslide" : ""}`}>Lab members</h1>
        <Row className="p-3 d-flex  text-center justify-content-center align-items-center">
          {/* Principal Investigator Section*/}
          <h2 className={`p-3 montserrat divslide-before ${myRow1IsVisible ? "divslide" : ""}`} ref={myRow1}>Principal investigator</h2>
          {labmemberList.map((member, index) => {
            return (
              <>
                {member.currentmember === "Yes" && member.functionbasic === 'Assistant Professor' ? (
                  // Grid system with shifting number of elements
                  <>
                    <Col
                      md={5}
                      className={`d-flex justify-content-center align-items-center divslide-before ${myRow1IsVisible ? "divslide" : ""}`}
                      ref={myRow1}
                    >
                      <Link to={`/labmember/${member.membername.replace(/\s/g, '-').toLowerCase()}`} className="photo-link" >
                        <div className={`members d-flex justify-content-center align-items-center`}
                        >
                          {myImgLabIsVisible || supportsLazyLoading ? (
                            <img
                              alt={member.membername}
                              src={`${member.image}`}
                              className="member-photo"
                              loading="lazy"
                              {...rest} />
                          ) : null}

                          <div ref={myImgLab} data-inview={myImgLabIsVisible} className="member-photo-overlay">

                          </div>
                          <div className="member-text-overlay">
                            <h3 className="montserrat professorname h5">
                              {member.membername}
                            </h3>
                            <h5 className="roboto professorfunction h6">
                              {member.functionbasic}
                            </h5>
                          </div>
                        </div>
                      </Link>

                    </Col>

                  </>

                ) : (
                  ""
                )}
              </>
            );
          })}
          {/* Current members Section*/}
          <h2 className={`p-3 pt-5 pb-3 montserrat divslide-before ${myRow2IsVisible ? "divslide2" : ""}`} ref={myRow2}>Current members</h2>
          {labmemberList.map((member, index) => {
            return (
              <>
                {member.currentmember === "Yes" && member.functionbasic !== 'Assistant Professor' ? (
                  // Grid system with shifting number of elements
                  <>
                    <Col

                      xs={6}
                      md={4}
                      lg={3}
                      xl={2}
                      className={`d-flex justify-content-center align-items-center memberpicturepadding divslide-before ${myRow2IsVisible ? "divslide2" : ""} `}
                    >

                      <Link to={`/labmember/${member.membername.replace(/\s/g, '-').toLowerCase()}`} className="photo-link" >
                        <div className={`members d-flex justify-content-center align-items-center memberpicturepadding `}
                        >
                          {myImgLab2IsVisible || supportsLazyLoading ? (
                            <img
                              alt={member.membername}
                              src={`${member.image}`}
                              className={`member-photo `}
                              loading="lazy"
                              {...rest} />
                          ) : null}

                          <div ref={myImgLab2} data-inview={myImgLab2IsVisible} className="member-photo-overlay">

                          </div>
                          <div className="member-text-overlay">
                            <h3 className="montserrat membername h5">
                              {member.membername}
                            </h3>
                            <h5 className="roboto memberfunction h6">
                              {member.functionbasic}
                            </h5>
                          </div>
                        </div>
                      </Link>


                    </Col>

                  </>
                ) : (
                  ""
                )}
              </>
            );
          })}
          {/* Alumni Section*/}
          <Link to={"/alumni"} className="pt-5 buttonpadding"><h3 className={`d-flex divslide-before  ${myRow3IsVisible ? "divslide" : ""} `} ref={myRow3}><Badge className="badge-icon montserrat">SEE ALUMNI <BsFillArrowRightCircleFill className="arrow-icon" /></Badge></h3></Link>
        </Row>
      </Container>
    </>
  );
}

export default LabmembersSection;
