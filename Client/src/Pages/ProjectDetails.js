import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function ProjectDetails() {
const {proj}= useParams()
const [project, setProject]=useState([])
const [researchersList,setResearchersList]=useState([])
const fetchProject = async () => {
  let res = await fetch("http://localhost:3001/projects/fetch-projects");
  let data = await res.json();
  let projectParam = proj.split("-").toString();
  if (res.ok) {
    var filtereddata = data.find(
      (item) =>
console.log(item.title.toLowerCase().split(" ").toString()) 
    );
  console.log(projectParam);
  console.log(filtereddata );
  console.log(filtereddata .researchers);
  // setProject(data);
  // setResearchersList(data.researchers)
    }
};
useEffect(() => {
  fetchProject();
}, [proj]);

  return (
    <div>Projects</div>
  )
}

export default ProjectDetails