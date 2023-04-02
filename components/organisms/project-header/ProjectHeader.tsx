import { Button } from "components/atoms";
import AvatarGroup from "components/atoms/avatar-group/AvatarGroup";
import Link from "next/link";
import React from "react";

const ProjectHeader = () => {
  return (
    <div className="md:h-[750px]">
      <div className="container mx-auto px-5 md:px-20 2xl:px-40">
        <div className="h-full md:grid md:grid-cols-2">
          <div>
            <div className="mt-80 md:mt-[112px]">
              <div className="md:max-w-[578px]">
                <div className="text-center md:max-w-[578px] md:text-left">
                  <div className="text-3.3xl font-bold leading-[37px] text-primary-50 md:text-5.5xl md:leading-[68px]">
                    If you can imagine it, we can create it
                  </div>
                  <div className="mt-6 font-switz text-base text-neutral-60 md:text-4.5xl">
                    We engineer and build innovative storage gas facilities that
                    meet the evolving energy needs of today and tomorrow.
                  </div>
                </div>
                <div className="mt-14 items-center md:flex md:gap-x-2">
                  <div>
                    <Link href="/services">
                      <Button
                        label="Our services"
                        variant="dark"
                        size="large-with-icon"
                        isWithIcon
                        iconPosition="right"
                        iconType="arrow-right-up"
                        iconColor="dark"
                        className="w-full md:w-auto"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/projects">
                      <Button
                        label="View projects"
                        variant="darker"
                        size="large-with-icon"
                        isWithIcon
                        iconPosition="right"
                        iconType="arrow-right"
                        className="mt-2 w-full md:mt-0 md:w-auto"
                      />
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <AvatarGroup />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
