import React from "react";
import { HeadingBanner, SectionHeading } from "components/atoms";
import { Footer, Navbar, StatsSection } from "components/organisms";
import { FloatSectionWrapper } from "components/molecules";
import Image from "next/image";
import { partnersData } from "components/organisms/why-us/WhyUs";

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
            {[...Array(4)].map((val) => (
              <div
                key={val}
                className="mb-[71px] items-center justify-center border-b pb-[72px] last:border-b-0 md:mb-[82px] md:flex md:gap-x-[124px]"
              >
                <div>
                  <Image
                    src="/assets/images/team/avatar.jpg"
                    width={180}
                    height={180}
                    placeholder="blur"
                    blurDataURL="/assets/images/team/avatar.jpg"
                    alt="Team profile"
                    className="mx-auto rounded-full"
                  />
                  <div className="mt-6 text-center">
                    <div className="font-switz text-4.5xl font-semibold text-neutral-900">
                      Name Surname
                    </div>
                    <div className="mt-2 font-switz text-base font-light text-neutral-900">
                      Position
                    </div>
                  </div>
                </div>
                <div className="mt-10 text-center font-switz text-3.2xl leading-[18px] text-neutral-500 md:mt-0 md:max-w-[690px] md:text-left md:text-4.5xl md:leading-7">
                  Chemical Engineer with 10+ years of international oil & gas
                  experience across the energy value chain. Delivered consistent
                  value in LPG & Propane Trading, Gas Infrastructure
                  Construction, crude handling, upstream gas commercialization
                  and downstream gas distribution, project development,
                  management consulting, compressor and turbine engineering,
                  supply chain and supplier quality management for Nigerian and
                  U.S. organizations.
                </div>
              </div>
            ))}
          </div>
          <div>
            <SectionHeading
              {...{
                title: "Trusted by 10+ industry leading companies",
                pageCaption:
                  "Our clients include major oil & gas companies, as well as smaller regional gas providers, we have a proven track record of delivering projects on time and within budget.",
              }}
            />
            <div className="mx-auto mt-[77px] flex max-w-[820.8px] flex-wrap items-center justify-center">
              {partnersData.map(({ imageUrl, width, height, alt }) => (
                <div
                  key={imageUrl}
                  className="mb-10 flex w-1/2 justify-center md:mb-[60px] md:w-1/4"
                >
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
