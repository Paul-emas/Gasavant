import React from "react";
import { AboutContentCard, SectionHeading } from "components/atoms";

const content1 = {
  title: "We guide our clients from ideation to implementation",
  caption:
    "We work with our clients to understand the rapidly evolving  energy landscape, policies, development trends and implications for their respective investments in the resource- dense African countries who aspire to be the next exporters of energy.",
  imageUrl: "/assets/images/workman-1.jpg",
  alt: "worker image 1",
};

const content2 = {
  title: "We are focused on delivering top class projects",
  caption:
    "We work with our clients to understand the rapidly evolving  energy landscape, policies, development trends and implications for their respective investments in the resource- dense African countries who aspire to be the next exporters of energy.",
  imageUrl: "/assets/images/workman-2.jpg",
  alt: "worker image 2",
  align: "right",
};

const AboutInfo: React.FC = () => {
  return (
    <section className="mt-[260px] mb-[132px] bg-white">
      <div className="container mx-auto px-20 2xl:px-40">
        <SectionHeading
          {...{
            title:
              "Bringing Africa to the forefront of the global Gas Industry",
            pageCaption:
              "Transparency, efficient management of resources, Advancement of society",
            maxWidth: "max-w-[750px]",
          }}
        />
        <div className="mt-[135px]">
          <AboutContentCard {...content1} align="left" />
          <AboutContentCard {...content2} align="right" />
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
