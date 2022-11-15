import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

function PublicationList() {
  const [publication2022, setPublication2022] = useState([]);
  const [publication2021, setPublication2021] = useState([]);
  const [publication2020, setPublication2020] = useState([]);
  const [publication2019, setPublication2019] = useState([]);
  const [publication2018, setPublication2018] = useState([]);
  const [publication2017, setPublication2017] = useState([]);
  const [publication2016, setPublication2016] = useState([]);
  const [publication2015, setPublication2015] = useState([]);
  const [publication2014, setPublication2014] = useState([]);
  const [publication2011, setPublication2011] = useState([]);


  const fetchPublications = async () => {
    let res = await fetch("http://localhost:3001/publications/fetch-publications");
    let data = await res.json();
    if (res.ok) {

      const data2022 = data.filter(obj => {
        return obj.year === "2022";
      });
      setPublication2022(data2022.reverse())

      const data2021 = data.filter(obj => {
        return obj.year === "2021";
      });
      setPublication2021(data2021.reverse())

      const data2020 = data.filter(obj => {
        return obj.year === "2020";
      });
      setPublication2020(data2020.reverse())

      const data2019 = data.filter(obj => {
        return obj.year === "2019";
      });
      setPublication2019(data2019.reverse())

      const data2018 = data.filter(obj => {
        return obj.year === "2018";
      });
      setPublication2018(data2018.reverse())

      const data2017 = data.filter(obj => {
        return obj.year === "2017";
      });
      setPublication2017(data2017.reverse())

      const data2016 = data.filter(obj => {
        return obj.year === "2016";
      });
      setPublication2016(data2016.reverse())

      const data2015 = data.filter(obj => {
        return obj.year === "2015";
      });
      setPublication2015(data2015.reverse())

      const data2014 = data.filter(obj => {
        return obj.year === "2014";
      });
      setPublication2014(data2014.reverse())

      const data2011 = data.filter(obj => {
        return obj.year === "2011";
      });
      setPublication2011(data2011.reverse())
    }
  };
  useEffect(() => {
    fetchPublications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <h1>Peer reviewed publications</h1>
      <p>Researchers from the sGlobe lab are indicated in bold</p>
      {publication2022.length>0 && <div>
        <b className='publicationyear'>2022</b>
        <ul>
          {publication2022.map((item, index)=>{
            return <li>{publication2022[index].order} - {publication2022[index].authors.map(author => { return author['author'] }).join(', ')} {publication2022[index].publicationtitle} {publication2022[index].journal}, {publication2022[index].issue} [<a href={publication2022[index].link} target="_blank">Link</a>]</li>
          })}
        </ul>
        </div>}
        {publication2021.length>0 && <div>
        <b>2021</b>
        <ul>
          {publication2021.map((item, index)=>{
            return <li>{publication2021[index].order} - {publication2021[index].authors.map(author => { return author['author'] }).join(', ')} {publication2021[index].publicationtitle} {publication2021[index].journal}, {publication2021[index].issue} [<a href={publication2021[index].link} target="_blank">Link</a>]</li>
          })}
        </ul>
        </div>}
        {publication2020.length>0 && <div>
        <b>2020</b>
        <ul>
          {publication2020.map((item, index)=>{
            return <li>{publication2020[index].order} - {publication2020[index].authors.map(author => { return author['author'] }).join(', ')} {publication2020[index].publicationtitle} {publication2020[index].journal}, {publication2020[index].issue} [<a href={publication2020[index].link} target="_blank">Link</a>]</li>
          })}
        </ul>
        </div>}
        {publication2019.length>0 && <div>
        <b>2019</b>
        <ul>
          {publication2019.map((item, index)=>{
            return <li>{publication2019[index].order} - {publication2019[index].authors.map(author => { return author['author'] }).join(', ')} {publication2019[index].publicationtitle} {publication2019[index].journal}, {publication2019[index].issue} [<a href={publication2019[index].link} target="_blank">Link</a>]</li>
          })}
        </ul>
        </div>}
        {publication2018.length>0 && <div>
        <b>2018</b>
        <ul>
          {publication2018.map((item, index)=>{
            return <li>{publication2018[index].order} - {publication2018[index].authors.map(author => { return author['author'] }).join(', ')} {publication2018[index].publicationtitle} {publication2018[index].journal}, {publication2018[index].issue} [<a href={publication2018[index].link} target="_blank">Link</a>]</li>
          })}
        </ul>
        </div>}
        {publication2017.length>0 && <div>
        <b>2017</b>
        <ul>
          {publication2017.map((item, index)=>{
            return <li>{publication2017[index].order} - {publication2017[index].authors.map(author => { return author['author'] }).join(', ')} {publication2017[index].publicationtitle} {publication2017[index].journal}, {publication2017[index].issue} [<a href={publication2017[index].link} target="_blank">Link</a>]</li>
          })}
        </ul>
        </div>}
        {publication2016.length>0 && <div>
        <b>2016</b>
        <ul>
          {publication2016.map((item, index)=>{
            return <li>{publication2016[index].order} - {publication2016[index].authors.map(author => { return author['author'] }).join(', ')} {publication2016[index].publicationtitle} {publication2016[index].journal}, {publication2016[index].issue} [<a href={publication2016[index].link} target="_blank">Link</a>]</li>
          })}
        </ul>
        </div>}
        {publication2015.length>0 && <div>
        <b>2015</b>
        <ul>
          {publication2015.map((item, index)=>{
            return <li>{publication2015[index].order} - {publication2015[index].authors.map(author => { return author['author'] }).join(', ')} {publication2015[index].publicationtitle} {publication2015[index].journal}, {publication2015[index].issue} [<a href={publication2015[index].link} target="_blank">Link</a>]</li>
          })}
        </ul>
        </div>}
        {publication2014.length>0 && <div>
        <b>2014</b>
        <ul>
          {publication2014.map((item, index)=>{
            return <li>{publication2014[index].order} - {publication2014[index].authors.map(author => { return author['author'] }).join(', ')} {publication2014[index].publicationtitle} {publication2014[index].journal}, {publication2014[index].issue} [<a href={publication2014[index].link} target="_blank">Link</a>]</li>
          })}
        </ul>
        </div>}
        {publication2011.length>0 && <div>
        <b>2011</b>
        <ul>
          {publication2011.map((item, index)=>{
            return <li>{publication2011[index].order} - {publication2011[index].authors.map(author => { return author['author'] }).join(', ')} {publication2011[index].publicationtitle} {publication2011[index].journal}, {publication2011[index].issue} [<a href={publication2011[index].link} target="_blank">Link</a>]</li>
          })}
        </ul>
        </div>}
    </Container>
  )
}

export default PublicationList