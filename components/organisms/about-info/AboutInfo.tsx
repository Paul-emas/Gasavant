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
    "We engineer end‑to‑end solutions to bridge infrastructure gaps that hamper the anticipated growth in the Natural Gas and LPG value chain in Nigeria. With one aligned vision, we work hand in hand to bridge gaps between resources and end‑user markets as Nigerian begins actualize the ambitions of The Decade of Gas.",
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
            title: "Bridging the gas infrastructure gap in sub- Saharan Africa",
            pageCaption:
              "We are committed to providing our clients with peace of mind and the assurance that their gas storage needs are being met with the highest level of quality and safety",
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
