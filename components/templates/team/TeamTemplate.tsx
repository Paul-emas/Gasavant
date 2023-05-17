import React from "react";
import { HeadingBanner, SectionHeading } from "components/atoms";
import { Footer, Navbar, StatsSection } from "components/organisms";
import { FloatSectionWrapper } from "components/molecules";
import Image from "next/image";
import { partnersData } from "components/organisms/why-us/WhyUs";

const companyData = [
  {
    name: "Chukwuemeka Iheme",
    label: "CEO, Gasavant Africa",
    desc: "Chukwuemeka Iheme, is a Chemical Engineer with over 12 years of experience across the energy value chain - upstream and midstream oil and gas, project management, consulting, natural gas technology and has been an Executive Council Member of the Nigerian Gas Association from 2020-Present. He has a proven track record of delivering exceptional value across upstream gas sales agreements, OML & Marginal Field acquisition and bidding, Gas Commercialization projects, downstream gas offtake - Lean Gas & NGLs. Projects: OML 29 GSAs (3), NGFCP, Ghana Offshore Bid Rnd, Chevron OML 86&88, 2020 Marginal Field Rnd, LPG inland terminals, Gas to Power, Gas Logistics Infrastructure etc. ",
    url: "/assets/images/profiles/profile-1.jpg",
  },
  {
    name: "Jide Talabi",
    label: "Executive Director",
    desc: "Jide Talabi is a trained Supply Chain professional with over 8 years of experience in indirect procurement, contract administration and supplier management in the upstream oil and gas and FMCG space. He leads contracting & procurement coordination for the upgrade and replacement of flare stacks at Cawthorne Channel 2 and for the Cawthorne Channel Gas Plant Turbine maintenance and compressor control unit upgrade.",
    url: "/assets/images/profiles/profile-2.jpg",
  },
  {
    name: "Engr. Aboki Bala Auwalu",
    label: "Construction Manager",
    desc: "Engr. Aboki Bala Auwalu is a Civil and Structural Engineer with a Pg Cert in Project Management, an MSc in Petroleum Engineering, and a B.Eng in Civil Engineering.  He hasover 15 years of experience in downstream LPG bottling and storage facilities with a proven track record of delivering successful engineering projects across Nigeria. He led the engineering consultancy for multiple LPG bulk storage and dispensing terminals, including Eva Oil & Chemical Marketing Company, Forelight Limited and Zane Energy Limited. He managed the construction of LPG storage and dispensing plants for  Flogas Limited and Chardom Services Limited.",
    url: "/assets/images/profiles/profile-3.jpg",
  },
];

const TeamTemplate: React.FC = () => {
  return (
    <div>
      <Navbar theme="light" logoTheme="light" optionTheme="light" />
      <div className="project-banner h-[720px] w-full md:h-[750px]">
        <div className="container mx-auto px-5 md:px-20 3xl:px-40">
          <div className="pt-[278px] text-center md:pt-[143px]">
            <div className="mx-auto text-3.3xl font-bold leading-[37px] text-neutral-0 md:max-w-[554px] md:text-5.5xl md:leading-[68px]">
              Our Executive management team
            </div>
            <div className="mx-auto mt-6 font-switz text-neutral-50 md:max-w-[674px] md:text-4.5xl">
              With over 35+ years combined experience our expert team of
              engineers are committed to delivering safe, reliable, and
              efficient solutions for storing propane, hydrogen, and other
              gases.
            </div>
          </div>
        </div>
      </div>
      <section className="pb-10 md:pb-56">
        <FloatSectionWrapper>
          <div>
            {companyData.map(({ name, label, url, desc }) => (
              <div
                key={name}
                className="mb-[71px] items-center justify-center border-b pb-[72px] last:border-b-0 md:mb-[82px] md:flex md:gap-x-[124px]"
              >
                <div>
                  <Image
                    src={url}
                    width={180}
                    height={180}
                    placeholder="blur"
                    blurDataURL="/assets/images/team/avatar.jpg"
                    alt="Team profile"
                    className="mx-auto rounded-full bg-[#B0D1F7]"
                  />
                  <div className="mt-3 text-center">
                    <div className="font-switz text-4.5xl font-semibold text-neutral-900">
                      {name}
                    </div>
                    <div className="mt-2 font-switz text-base font-light text-neutral-900">
                      {label}
                    </div>
                  </div>
                </div>
                <div className="mt-10 text-center font-switz text-3.2xl leading-[18px] text-neutral-500 md:mt-0 md:max-w-[690px] md:text-left md:text-4.5xl md:leading-7">
                  {desc}
                </div>
              </div>
            ))}
          </div>
          <div>
            <SectionHeading
              {...{
                title: "Trusted by  industry leading companies",
                pageCaption:
                  "Our clients include major oil & gas companies, as well as smaller regional gas providers, we have a proven track record of delivering projects on time and within budget.",
              }}
            />
            <div className="mx-auto mt-[77px] flex max-w-[820.8px] flex-wrap items-center justify-center gap-x-14 md:gap-x-0">
              {partnersData.map(({ imageUrl, width, height, alt }) => (
                <div key={imageUrl} className="mb-10 md:mb-[60px] md:w-1/4">
                  <Image
                    src={imageUrl}
                    width={width}
                    height={height}
                    alt={alt}
                    placeholder="blur"
                    blurDataURL={imageUrl}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </FloatSectionWrapper>
      </section>
      <StatsSection />
      <Footer />
    </div>
  );
};

export default TeamTemplate;
