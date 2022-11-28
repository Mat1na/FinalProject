import React, { useEffect, useRef, useState } from "react";
import { Badge, Button, Card, Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSpringCarousel } from 'react-spring-carousel'
import { GrPrevious, GrNext } from "react-icons/gr";

function PublicationSection() {
  const [lastPublications, setLastPublications] = useState([]);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  const fetchLastPublications = async () => {
    let res = await fetch("http://localhost:3001/publications/fetch-publications");
    let data = await res.json();
    let filtereddata = data.slice(-6)

    // let filtereddata = data
    console.log(filtereddata, 'pubs');
    setLastPublications(filtereddata)
  };
  useEffect(() => {
    fetchLastPublications();
  }, []);


  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    itemsPerSlide: 3,

    items: [
      {
        id: 'item-1',
        renderItem: <div>{lastPublications.filter((publication, index) => index === 0).map((publication, index) => {
          return <>
            <Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="journallink"><div className=' justify-content-center align-items-center pub-title' key={index}><h5 className="publicationtitle">{publication.journal}</h5><p className="publicationtitle">{publication.publicationtitle} <br />Read more ... </p></div>
            </Link>
          </>
        })}</div>,
      },
      {
        id: 'item-2',
        renderItem: <div>{lastPublications.filter((publication, index) => index === 1).map((publication, index) => {
          return <>
            <Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="journallink"><div className=' justify-content-center align-items-center pub-title' key={index}><h5 className="publicationtitle">{publication.journal}</h5><p className="publicationtitle">{publication.publicationtitle} <br />Read more ... </p></div>
            </Link>
          </>
        })}</div>,
      },
      {
        id: 'item-3',
        renderItem: <div>{lastPublications.filter((publication, index) => index === 2).map((publication, index) => {
          return <>
            <Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="journallink"><div className=' justify-content-center align-items-center pub-title' key={index}><h5 className="publicationtitle">{publication.journal}</h5><p className="publicationtitle">{publication.publicationtitle} <br />Read more ... </p></div>
            </Link>
          </>
        })}</div>,
      },
      {
        id: 'item-4',
        renderItem: <div>{lastPublications.filter((publication, index) => index === 3).map((publication, index) => {
          return <>
            <Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="journallink"><div className=' justify-content-center align-items-center pub-title' key={index}><h5 className="publicationtitle">{publication.journal}</h5><p className="publicationtitle">{publication.publicationtitle} <br />Read more ... </p></div>
            </Link>
          </>
        })}</div>,
      },
      {
        id: 'item-5',
        renderItem: <div>{lastPublications.filter((publication, index) => index === 4).map((publication, index) => {
          return <>
            <Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="journallink"><div className=' justify-content-center align-items-center pub-title' key={index}><h5 className="publicationtitle">{publication.journal}</h5><p className="publicationtitle">{publication.publicationtitle} <br />Read more ... </p></div>
            </Link>
          </>
        })}</div>,
      },
      {
        id: 'item-6',
        renderItem: <div>{lastPublications.filter((publication, index) => index === 5).map((publication, index) => {
          return <>
            <Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="journallink"><div className=' justify-content-center align-items-center pub-title' key={index}><h5 className="publicationtitle">{publication.journal}</h5><p className="publicationtitle">{publication.publicationtitle} <br />Read more ... </p></div>
            </Link>
          </>
        })}</div>,
      },
      {
        id: 'item-7',
        renderItem: <div>{lastPublications.filter((publication, index) => index === 6).map((publication, index) => {
          return <>
            <Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="journallink"><div className=' justify-content-center align-items-center pub-title' key={index}><h5 className="publicationtitle">{publication.journal}</h5><p className="publicationtitle">{publication.publicationtitle} <br />Read more ... </p></div>
            </Link>
          </>
        })}</div>,
      },
    ],
  })






  return (
    <Container fluid>
      <h1 className="pb-3 lab-title montserrat">Recent publications</h1>

      <div className="carousel-bg">
        <div className="carousel-fragment">
          {carouselFragment}
          <div className="d-flex justify-content-between">
            <span onClick={slideToPrevItem}><GrPrevious size={"2rem"} className="car-icons" /></span>
            <span onClick={slideToNextItem}><GrNext size={"2rem"} className="car-icons" /></span></div>
          <div className="p-2 d-flex justify-content-center">
            <Link to={"/publicationlist"} className="buttonpadding"><Button className="pub-icon">ALL PUBLICATIONS </Button>
            </Link>
          </div>
        </div>

      </div>
    </Container>
  )
}

export default PublicationSection