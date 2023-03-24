import Image from "next/image";
import React from "react";
import AvatarGroup from "../avatar-group/AvatarGroup";
import Button from "../button/Button";

const AboutHeader = () => {
  return (
    <div className="h-[750px]">
      <div className="container mx-auto px-20 2xl:px-40 ">
        <div className="grid grid-cols-2 h-full">
          <div>
            <div className="mt-[112px]">
              <div className="max-w-[578px]">
                <div className="max-w-[578px]">
                  <div className="text-5.5xl text-neutral-900 font-bold leading-[68px]">
                    We build state of the art gas storage tanks
                  </div>
                  <div className="mt-6 text-neutral-500 text-4.5xl">
                    We build state of the art gas storage tanks across the world
                    starting from the grassroot and gas flares.
                  </div>
                </div>
                <div className="flex items-center mt-14 gap-x-2">
                  <Button
                    label="Our services"
                    variant="primary"
                    size="large-with-icon"
                    isWithIcon
                    iconPosition="right"
                    iconType="arrow-right-up"
                    iconColor="light"
                  />
                  <Button
                    label="View projects"
                    variant="secondary"
                    size="large-with-icon"
                    isWithIcon
                    iconPosition="right"
                    iconType="arrow-right"
                    iconColor="secondary"
                  />
                </div>
                <AvatarGroup theme="dark" />
              </div>
            </div>
          </div>
          <div className="-top-9 relative">
            <div className="float-shadow absolute w-[222px] h-[130px] bottom-[107px] bg-neutral-0 z-10 -left-20 flex justify-center items-center">
              <div className="text-center">
                <div className="font-switz text-neutral-500">
                  Completed projects
                </div>
                <div className="text-4.1xl text-neutral-900 font-bold">
                  100+
                </div>
              </div>
            </div>
            <Image
              src="/assets/images/workman.png"
              width={600}
              height={808}
              alt="Engineer at work"
              className="scale-105 relative top-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
