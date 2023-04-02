import React from "react";
import {
  AboutProject,
  Footer,
  Navbar,
  ProjectList,
} from "components/organisms";
import { Slider } from "components/atoms";

const ProjectsTemplate: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Navbar theme="light" logoTheme="light" optionTheme="light" />
      <Slider title="Northwest Petroleum & Gas Limited" />
      <AboutProject />
      <div className="py-16 md:pt-96 md:pb-56">
        <ProjectList />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsTemplate;
