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
          title: "Our engineering team of experts",
          caption:
            "We are committed to being transparent, efficient in resource management , and client satisfaction",
        }}
      />
      <section className="pb-56">
        <FloatSectionWrapper>
          <div>
            <div className="flex justify-between">
              <div className="text-neutral-900 text-5xl max-w-[385px] leading-[58px] font-bold">
                Over 50+ years of experience
              </div>
              <div className="max-w-[529px] text-neutral-800 font-switz text-4.5xl">
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
                      className="rounded-full mx-auto"
                    />
                    <div className="text-center mt-6">
                      <div className="text-4.5xl text-neutral-900 font-switz font-semibold">
                        Name Surname
                      </div>
                      <div className="text-base text-neutral-900 font-switz mt-2 font-light">
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
