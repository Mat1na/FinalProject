import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function PublicationSection() {
  const [lastPublications, setLastPublications] = useState([]);
  const fetchLastPublications = async () => {
    let res = await fetch("http://localhost:3001/publications/fetch-publications");
    let data = await res.json();
    let filtereddata = data.slice(-5)
    console.log(filtereddata);
    setLastPublications(filtereddata)
  };
  useEffect(() => {
    fetchLastPublications();
  }, []);


  return (
    <Container>
      <Row>
        <Col className="col-lg-4"><h1>Recent Publications</h1></Col>
        <Col className="col-lg-8">
          <div><Link to={"/publicationlist"}>Check out all publications</Link></div>
          {lastPublications.length > 0 && lastPublications.map((publication, index) => {
            return <><Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g,'-').toLowerCase()}-${publication.order}`} className="stretched-link journallink">
              <div className="journalcontainer">
              
              <div>
              <h3 className="publicationtitle">{publication.publicationtitle}</h3>
              <p className="journaltitle">{publication.journal}, {publication.year}</p>
              <p className="authorslist">{publication.authors.map(author => { return author['author'] }).join(', ')}</p>
              </div>
              <div><img src={publication.image} alt={publication.title} className="journalcover ms-3"/></div>
            </div></Link>
            </>
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default PublicationSection