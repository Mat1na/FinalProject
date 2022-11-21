import React from "react";
import LabmembersSection from "./HompageComponents/LabmembersSection";
import ProjectsSction from "./HompageComponents/ProjectsSction";
import PublicationSection from "./HompageComponents/PublicationSection";
import ResearchSection from "./HompageComponents/ResearchSection";
import VideoSection from "./HompageComponents/VideoSection";

function Home() {
  return (
    <>
      <VideoSection/>
   
      <ResearchSection/>
      <LabmembersSection/>
      <ProjectsSction />
      <PublicationSection />
    
    </>
  );
}

export default Home;
