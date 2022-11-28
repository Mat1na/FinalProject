import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function PublicationSection() {
  const [lastPublications, setLastPublications] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  const fetchLastPublications = async () => {
    let res = await fetch("http://localhost:3001/publications/fetch-publications");
    let data = await res.json();
    let filtereddata = data.slice(-12)

    // let filtereddata = data
    console.log(filtereddata, 'pubs');
    setLastPublications(filtereddata)
  };
  useEffect(() => {
    fetchLastPublications();
  }, []);



  return (
    //     <Container>
    //       <Row>
    //         <Col className="col-lg-4"><h1 className="lab-title">Recent Publications</h1></Col>
    //         <Col className="col-lg-8">
    //           <div><Link to={"/publicationlist"} className='allpublications'><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-info-circle-fill me-2" viewBox="0 0 16 16">
    //   <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    // </svg>Check out all publications</Link></div>
    //           {lastPublications.length > 0 && lastPublications.map((publication, index) => {
    //             return <div key={publication.order} className="publicationhover mb-4"><Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="stretched-link journallink">
    //               <div className="d-flex">

    //                 <div>
    //                   <h3 className="publicationtitle">{publication.publicationtitle}</h3>
    //                   <p className="journaltitle">{publication.journal}, {publication.year}</p>
    //                   <p className="authorslist">{publication.authors.map(author => { return author['author'] }).join(', ')}</p>
    //                 </div>
    //                 <div><img src={publication.image} alt={publication.title} className="journalcover ms-3" /></div>
    //               </div></Link>
    //             </div>
    //           })}
    //         </Col>
    //       </Row>
    //     </Container>



    <Container fluid className='mt-0 mb-0'>

      <h1 className="pb-3 lab-title montserrat">Recent publications</h1>

      <div>
        <Link to={"/publicationlist"} className="buttonpadding"><h3 className="d-flex"><Badge className="badge-icon mb-5">SEE ALL PUBLICATIONS <BsFillArrowRightCircleFill className="arrow-icon" /></Badge></h3></Link>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" >
        <Carousel.Item>
          <div className="cards-wrapper d-flex">
            {lastPublications.filter((publication, index) => index < 3).map((publication, index) => {
              return <>
               <Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="stretched-link journallink"><div className=' justify-content-center align-items-center pub-title' key={index}><h5 className="publicationtitle">{publication.journal}</h5><p className="publicationtitle">{publication.publicationtitle} <br />Read more ... </p></div>
                </Link>
              </>
            })}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="cards-wrapper d-flex">
            {lastPublications.filter((publication, index) => index > 2 && index < 6).map((publication, index) => {
              return <>
                <Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="stretched-link journallink"><div className=' justify-content-center align-items-center pub-title' key={index}><h5 className="publicationtitle">{publication.journal}</h5><p className="publicationtitle">{publication.publicationtitle} <br />Read more ... </p></div>
                </Link>
              </>
            })}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="cards-wrapper d-flex">
            {lastPublications.filter((publication, index) => index > 5 && index < 9).map((publication, index) => {
              return <>

                <Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="stretched-link journallink"><div className=' justify-content-center align-items-center pub-title' key={index}><h5 className="publicationtitle">{publication.journal}</h5><p className="publicationtitle">{publication.publicationtitle} <br />Read more ... </p></div>
                </Link>

              </>
            })}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="cards-wrapper d-flex">
            {lastPublications.filter((publication, index) => index > 8).map((publication, index) => {
              return <>

                <Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="stretched-link journallink"><div className=' justify-content-center align-items-center pub-title' key={index}><h5 className="publicationtitle">{publication.journal}</h5><p className="publicationtitle">{publication.publicationtitle} <br />Read more ... </p></div>
                </Link>

              </>
            })}
          </div>
        </Carousel.Item>
      </Carousel>

    </Container>




  )
}

export default PublicationSection