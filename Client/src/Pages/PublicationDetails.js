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
        <h1>{publication.publicationtitle}</h1>
        <p className="journaltitle">{publication.journal}, {publication.year}</p>
        <p className="authorslist">{authorsList.length>0 && authorsList.map(author => { return author['author'] }).join(', ')}</p>
        <h3 className="publicationtitle">Abstract</h3>
        <p>{publication.abstract}</p>
        <p><strong>Link: </strong><a href={publication.link} target="_blank" rel="noreferrer">{`${publication.link}`}</a></p>
      </Container>
    </>
  )
}

export default PublicationDetails