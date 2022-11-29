import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

function PublicationDetails() {
  const { pub } = useParams()
  const [publication, setPublication] = useState({})
  const [authorsList,setAuthorsList]=useState([])

  const fetchPublication = async () => {
    let res = await fetch("http://localhost:3001/publications/fetch-publications");
    let data = await res.json();
    if (res.ok) {
      var filtereddata = data.find(item => item.order === pub.split("-").slice(-1).toString());
      setPublication(filtereddata);
      setAuthorsList(filtereddata.authors)
      console.log(pub.split("-").slice(-1).toString());
      console.log(filtereddata)
    }
  };
  useEffect(() => {
    fetchPublication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pub]);
  return (
    <>
<Container fluid className='pt-5'>
<div className='pub-container-div'>
<h1 className='montserrat publicationdetailtitle'>{publication.publicationtitle}</h1>
        <p className="journaltitle roboto project-summary">{publication.journal}, {publication.year}</p>
        <p className="authorslist roboto project-summary">{authorsList.length>0 && authorsList.map(author => { return author['author'] }).join(', ')}</p>
        <h4 className="montserrat roboto">Abstract</h4>
        <p className='roboto project-summary'>{publication.abstract}</p>
        <h6 className='roboto'>Link: <a href={publication.link} target="_blank" rel="noreferrer" className='roboto project-labmember'>{`${publication.link}`}</a></h6>
</div>
      </Container>
    </>
  )
}

export default PublicationDetails