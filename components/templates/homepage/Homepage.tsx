import React, { useEffect, useState } from "react";
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
import { Loader } from "components/atoms";

const pageData = {
  title: "We believe in delivering the best quality possible",
  data: [
    {
      title: "Our Vision",
      caption:
        "To be at the forefront of Gas infrastructure and development  in Africa’s energy industry.",
      iconUrl: "/assets/images/section-icons/flag.jpg",
    },
    {
      title: "Our Values",
      caption:
        "We prioritize client satisfaction, environmental stewardship, and societal advancement.",
      iconUrl: "/assets/images/section-icons/diamond.jpg",
    },
    {
      title: "Our Vision",
      caption:
        "To close the Gas Infrastructure gap and accelerate economic development in Nigeria and Africa at large.",
      iconUrl: "/assets/images/section-icons/vision.jpg",
    },
  ],
};

export const pageData2 = {
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
  const [isFirstTimeUser, setIsFirstimeUser] = useState<boolean>(false);

  useEffect(() => {
    if (!localStorage.getItem("first-time-user")) {
      setIsFirstimeUser(true);
      localStorage.setItem("first-time-user", JSON.stringify(true));
    } else {
      setIsFirstimeUser(false);
    }
  }, []);

  return (
    <div>
      {isFirstTimeUser ? <Loader /> : null}
      <Navbar theme="dark" logoTheme="dark" optionTheme="dark" />
      <Header />
      <HomepageLogo />
      <ServiceSection {...pageData} />
      <EnergySection />
      <ServiceSection
        {...{
          title: "Join the community, Services we offer",
          pageCaption:
            "Transparency, efficient management of resources, Advancement of society",
          ...pageData2,
        }}
      />
      <ProjectsSlider />
      <QualitySection />
      <HomepageFaq />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default HomepageTemplate;
