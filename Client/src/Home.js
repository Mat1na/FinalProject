import React from "react";
import LabmembersSection from "./HompageComponents/LabmembersSection";
import ProjectsSction from "./HompageComponents/ProjectsSction";
import PublicationSection from "./HompageComponents/PublicationSection";
import ResearchSection from "./HompageComponents/ResearchSection";
import VideoSection from "./HompageComponents/VideoSection";
import JoinSection from "./HompageComponents/JoinSection";

function Home() {
  return (
    <>
      <section id="top"><VideoSection /></section>
      <section id="research" className='containerpaddings'><ResearchSection /></section>
      <section id="labmembers" className='containerpaddings'><LabmembersSection /></section>
      <section id="projects" className='containerpaddings'><ProjectsSction /></section>
      <section id="publications" className='containerpaddings'><PublicationSection/></section>
      <section id="jointhelab" className='containerpaddings'><JoinSection /></section>

    </>
  );
}

export default Home;
