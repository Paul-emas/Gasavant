import {
  EnergySection,
  Footer,
  Header,
  HomepageFaq,
  HomepageLogo,
  Navbar,
  ProjectsSlider,
  QualitySection,
  ServiceSection,
  StatsSection,
} from "components/organisms";
import React from "react";

const pageData = {
  title: "We believe in delivering the best quality possible",
  data: [
    {
      title: "Our Mission",
      caption:
        "To build innovative gas storage facilities that close the infrastructure gaps, enabling the efficient and secure storage of natural gas.",
      iconUrl: "/assets/images/section-icons/flag.jpg",
    },
    {
      title: "Our Values",
      caption:
        "We are committed to transparency, resource management, Customer Satisfaction, Quality assurance, and Environmental stewardship.",
      iconUrl: "/assets/images/section-icons/diamond.jpg",
    },
    {
      title: "Our Vision",
      caption:
        "To become globally recognized and a trusted partner of choice for Gas Infrastructure Development, leading the way in the energy space across the world.",
      iconUrl: "/assets/images/section-icons/vision.jpg",
    },
  ],
};

const pageData2 = {
  title: "Join the community, Services we offer",
  pageCaption:
    "Transparency, efficient management of resources, Advancement of society",
  data: [
    {
      title: "Engineering Design",
      caption:
        "Transparency, efficient management of resources, Advancement of society for tomorrows greatness.",
      iconUrl: "/assets/images/section-icons/design.jpg",
    },
    {
      title: "Construction",
      caption:
        "Transparency, efficient management of resources, Advancement of society for tomorrows greatness.",
      iconUrl: "/assets/images/section-icons/construction.jpg",
    },
    {
      title: "Maintenance",
      caption:
        "Transparency, efficient management of resources, Advancement of society for tomorrows greatness.",
      iconUrl: "/assets/images/section-icons/maintainance.jpg",
    },
    {
      title: "Procurement",
      caption:
        "Transparency, efficient management of resources, Advancement of society for tomorrows greatness.",
      iconUrl: "/assets/images/section-icons/procurement.jpg",
    },
    {
      title: "Storage tanks",
      caption:
        "Transparency, efficient management of resources, Advancement of society for tomorrows greatness.",
      iconUrl: "/assets/images/section-icons/storage.jpg",
    },
    {
      title: "LGP",
      caption:
        "Transparency, efficient management of resources, Advancement of society for tomorrows greatness.",
      iconUrl: "/assets/images/section-icons/lgp.jpg",
    },
  ],
};

const HomepageTemplate: React.FC = () => {
  return (
    <div>
      <Navbar theme="dark" />
      <Header />
      <HomepageLogo />
      <ServiceSection {...pageData} />
      <EnergySection />
      <ServiceSection {...pageData2} />
      <ProjectsSlider />
      <QualitySection />
      <HomepageFaq />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default HomepageTemplate;
