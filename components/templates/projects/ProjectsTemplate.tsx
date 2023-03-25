import React from "react";
import {
  Footer,
  Navbar,
  ProjectHeader,
  ProjectList,
  StatsSection,
} from "components/organisms";
import { Slider } from "components/atoms";

const ProjectsTemplate: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div className="project-banner h-[872px] overflow-hidden">
        <Navbar theme="transparent" logoTheme="dark" optionTheme="dark" />
        <ProjectHeader />
      </div>
      <Slider
        title="Take a look at our recent projects"
        maxWidth="max-w-[475px]"
        showOverlay
      />
      <div className="pt-[191px] pb-56">
        <ProjectList />
      </div>
      <StatsSection />
      <Footer />
    </div>
  );
};

export default ProjectsTemplate;
