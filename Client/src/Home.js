import React from "react";
import LabmembersSection from "./HompageComponents/LabmembersSection";
import AuthorsSection from "./HompageComponents/AuthorsSection";
import ProjectsSction from "./HompageComponents/ProjectsSction";
import PublicationSection from "./HompageComponents/PublicationSection";

function Home() {
  return (
    <div>
      <LabmembersSection />
      <ProjectsSction />
      <PublicationSection />
    </div>
  );
}

export default Home;
