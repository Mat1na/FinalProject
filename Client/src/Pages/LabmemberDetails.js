import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function LabmemberDetails() {
  const { lab } = useParams()
  const [member, setMember] = useState([]);
  const [interestsList, setInterestList] = useState([]);

  const fetchLabmember = async () => {

    let res = await fetch("http://localhost:3001/labmembers/fetch-labmembers");
    let data = await res.json();
    let labmeberParam = lab.split("-").toString()
    if (res.ok) {
      var filtereddata = data.find(item => item.membername.toLowerCase().split(" ").toString() === labmeberParam);
      setMember(filtereddata);
      setInterestList(filtereddata.interests)
      console.log(labmeberParam);
      console.log(filtereddata)
      console.log(filtereddata.interests)
        ;
    }

  };
  useEffect(() => {
    fetchLabmember();
  }, [lab]);

  return (
    <>
      <Container>
        <div className="member-details pt-5">
          <img
            src={`${member.image}`}
            className="member-details"
          />
        </div>
        <div className="text-center ">
          <h2 className="pt-3">
            {member.membername}
          </h2>
          <p className="">
            {member.functionbasic}
          </p>
          <p className="">
            {member.functionextra}
          </p>
        </div>
        <div className="w">
  {interestsList.map(item => (
    <li>
      {item.interest}
    </li>
  ))}
        </div>

      </Container>

    </>

  )
}

export default LabmemberDetails