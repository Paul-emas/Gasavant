import React from "react";
import { AboutHeader } from "components/atoms";
import {
  AboutCounter,
  AboutEnergy,
  AboutInfo,
  Footer,
  HomepageFaq,
  Navbar,
  ProjectsSlider,
  WhyUs,
} from "components/organisms";

const AboutTemplate: React.FC = () => {
  return (
    <div>
      <div className="h-[872px] bg-primary-50 overflow-hidden">
        <Navbar logoTheme="light" theme="transparent" optionTheme="light" />
        <AboutHeader />
      </div>
      <AboutCounter />
      <AboutInfo />
      <AboutEnergy />
      <WhyUs />
      <ProjectsSlider />
      <HomepageFaq />
      <Footer />
    </div>
  );
};

export default AboutTemplate;
