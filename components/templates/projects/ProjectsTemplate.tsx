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
      <div className="project-banner h-[764px] overflow-hidden bg-neutral-900 md:h-[872px] md:bg-transparent">
        <Navbar theme="transparent" logoTheme="dark" optionTheme="dark" />
        <ProjectHeader />
      </div>
      <Slider
        title="Take a look at our recent projects"
        maxWidth="md:max-w-[475px]"
        showOverlay
      />
      <div className="py-12 md:pb-56 md:pt-[191px]">
        <ProjectList />
      </div>
      <StatsSection />
      <Footer />
    </div>
  );
};

export default ProjectsTemplate;
