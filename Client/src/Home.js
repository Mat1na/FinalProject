import React from "react";
import LabmembersSection from "./HompageComponents/LabmembersSection";
import ProjectsSction from "./HompageComponents/ProjectsSction";
import PublicationSection from "./HompageComponents/PublicationSection";
import ResearchSection from "./HompageComponents/ResearchSection";

function Home() {
  return (
    <div>
      <ResearchSection/>
      <LabmembersSection/>
      <ProjectsSction />
      <PublicationSection />
    </div>
  );
}

export default Home;
