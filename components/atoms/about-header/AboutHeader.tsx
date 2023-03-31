import Image from "next/image";
import Link from "next/link";
import React from "react";
import AvatarGroup from "../avatar-group/AvatarGroup";
import Button from "../button/Button";

const AboutHeader = () => {
  return (
    <div className="md:h-[750px]">
      <div className="container relative mx-auto px-5 md:px-20 2xl:px-40">
        <div className="relative h-full md:grid md:grid-cols-2">
          <div className="relative top-2 block md:hidden">
            <div className="shade absolute top-36 left-0 z-10 h-[239px] w-full"></div>
            <div className="float-shadow absolute top-20 z-10 flex h-[76px] w-[125px] items-center justify-center bg-neutral-0">
              <div className="text-center">
                <div className="text-4.5xl font-bold text-neutral-900">
                  300,000
                </div>
                <div className="font-switz text-[9px] font-bold text-neutral-500">
                  Customers
                </div>
              </div>
            </div>
            <Image
              src="/assets/images/workman.png"
              width={242}
              height={326}
              alt="Engineer at work"
              className="mx-auto"
            />
          </div>
          <div>
            <div className="md:mt-[112px]">
              <div className="md:max-w-[578px]">
                <div className="relative z-20 text-center md:max-w-[578px] md:text-left">
                  <div className="text-3.3xl font-bold leading-[37px] text-neutral-900 md:text-5.5xl md:leading-[68px]">
                    We are taking engineering to the next level
                  </div>
                  <div className="mt-6 font-switz text-base text-neutral-500 md:text-4.5xl">
                    At Gasavant, we manage and enforce the highest quality and
                    safety standards with all our partners and service
                    providers.
                  </div>
                </div>
                <div className="mt-8 items-center gap-x-2 md:mt-14 md:flex">
                  <div>
                    <Link href="/services">
                      <Button
                        label="Our services"
                        variant="primary"
                        size="large-with-icon"
                        isWithIcon
                        iconPosition="right"
                        iconType="arrow-right-up"
                        iconColor="light"
                        className="w-full md:w-auto"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/projects">
                      <Button
                        label="View projects"
                        variant="secondary"
                        size="large-with-icon"
                        isWithIcon
                        iconPosition="right"
                        iconType="arrow-right"
                        iconColor="secondary"
                        className="mt-2 w-full md:mt-0 md:w-auto"
                      />
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <AvatarGroup theme="dark" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative -top-9 hidden md:block">
            <div className="float-shadow absolute bottom-[107px] -left-20 z-10 flex h-[130px] w-[222px] items-center justify-center bg-neutral-0">
              <div className="text-center">
                <div className="font-switz text-neutral-500">
                  Completed projects
                </div>
                <div className="text-4.1xl font-bold text-neutral-900">
                  100+
                </div>
              </div>
            </div>
            <Image
              src="/assets/images/workman.png"
              width={600}
              height={808}
              alt="Engineer at work"
              className="relative top-5 scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
