import React from "react";
import { HeadingBanner } from "components/atoms";
import { Footer, Navbar } from "components/organisms";
import { FloatSectionWrapper } from "components/molecules";
import Image from "next/image";

const TeamTemplate: React.FC = () => {
  return (
    <div>
      <Navbar theme="light" logoTheme="light" optionTheme="light" />
      <HeadingBanner
        {...{
          title: "Our Executive management team",
          caption:
            "We are a tight knit agile team of industry subject matter professionals",
          maxWidth: "max-w-[554px]",
        }}
      />
      <section className="pb-56">
        <FloatSectionWrapper>
          <div>
            <div className="flex justify-between">
              <div className="max-w-[385px] text-5xl font-bold leading-[58px] text-neutral-900">
                Over 50+ years of experience
              </div>
              <div className="max-w-[529px] font-switz text-4.5xl text-neutral-800">
                Our expert team of engineers and technicians are committed to
                delivering safe, reliable, and efficient solutions for storing
                natural gas, hydrogen, and other gases. We understand the
                critical importance of energy storage and are dedicated to
                delivering cutting-edge solutions that meet the highest
                standards of safety and sustainability.
              </div>
            </div>
            <div className="mt-[140px]">
              <div className="flex flex-wrap justify-between">
                {[...Array(16)].map((val) => (
                  <div key={val} className="mb-[82px] w-1/4">
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
                ))}
              </div>
            </div>
          </div>
        </FloatSectionWrapper>
      </section>
      <Footer />
    </div>
  );
};

export default TeamTemplate;
