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
  title: "We are utilizing gas as a transition fuel for industrilization",
  data: [
    {
      title: "Our Vision",
      caption:
        "To be at the forefront of Gas infrastructure and development  in Africa’s energy industry",
      iconUrl: "/assets/images/section-icons/flag.jpg",
    },
    {
      title: "Our Values",
      caption:
        "We prioritize client satisfaction, environmental stewardship, and societal advancement",
      iconUrl: "/assets/images/section-icons/diamond.jpg",
    },
    {
      title: "Our Mission",
      caption:
        "To close the Gas Infrastructure gap and accelerate economic development in Nigeria and Africa at large",
      iconUrl: "/assets/images/section-icons/vision.jpg",
    },
  ],
};

export const pageData2 = {
  data: [
    {
      title: "Engineering Design",
      caption:
        "We adhere to relevant design codes including API2510, ASME Process piping B31.3,ASME VIII Div 1&2 for pressure vessel design, BS8110,BS5950 for civil structures",
      iconUrl: "/assets/images/section-icons/design.jpg",
    },
    {
      title: "Construction",
      caption:
        "We provide construction services for gas infrastructure and storage tanks. We are reliable and experienced in provision of high-quality construction services for gas infrastructure.",
      iconUrl: "/assets/images/section-icons/construction.jpg",
    },
    {
      title: "Maintenance",
      caption:
        "We provide maintenance services, including tank cleaning, inspection, repair, and painting. We ensure that tanks are properly maintained and meet all regulatory and safety requirements",
      iconUrl: "/assets/images/section-icons/maintainance.jpg",
    },
    {
      title: "Procurement",
      caption:
        "End to end execution of engineering procurement Construction and Installation (EPCI) Scope for the development of inland LPG storage/bottling facilities ranging from 5 MT to 300 MT",
      iconUrl: "/assets/images/section-icons/procurement.jpg",
    },
    {
      title: "Storage tanks",
      caption:
        "We offer a comprehensive range of storage solutions, including underground and aboveground storage tanks, as well as specialized storage for liquefied gases",
      iconUrl: "/assets/images/section-icons/storage.jpg",
    },
    {
      title: "LPG",
      caption:
        "Facilities Front End Engineering Design (FEED) LPG Financial Models LPG Business Plans and consultancy.",
      iconUrl: "/assets/images/section-icons/lgp.jpg",
    },
  ],
};

const HomepageTemplate: React.FC = () => {
  const [isFirstTimeUser, setIsFirstimeUser] = useState<boolean>(false);

  useEffect(() => {
    if (!localStorage.getItem("first-time-user-33")) {
      setIsFirstimeUser(true);
      localStorage.setItem("first-time-user-33", JSON.stringify(true));
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
      <ServiceSection {...{ ...pageData, maxWidth: "max-w-[795px]" }} />
      <EnergySection />
      <ServiceSection
        {...{
          headingLayout: "flex",
          title: "We provide EPCI and Gas supply services.",
          pageCaption:
            "Our team of experienced professionals is dedicated to providing the highest level of service and safety for our clients. We adhere to the strictest regulatory standards and employ the latest technologies and best practices to ensure the safe and efficient storage of your gas products.",
          maxWidth: "max-w-full",
          ...pageData2,
          headingAlign: "left",
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
