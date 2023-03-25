import { Button } from "components/atoms";
import AvatarGroup from "components/atoms/avatar-group/AvatarGroup";
import React from "react";

const ProjectHeader = () => {
  return (
    <div className="h-[750px]">
      <div className="container mx-auto px-20 2xl:px-40 ">
        <div className="grid h-full grid-cols-2">
          <div>
            <div className="mt-[112px]">
              <div className="max-w-[578px]">
                <div className="max-w-[578px]">
                  <div className="text-5.5xl font-bold leading-[68px] text-primary-50">
                    We build state of the art gas storage tanks
                  </div>
                  <div className="mt-6 text-4.5xl text-neutral-60">
                    We build state of the art gas storage tanks across the world
                    starting from the grassroot and gas flares.
                  </div>
                </div>
                <div className="mt-14 flex items-center gap-x-2">
                  <div>
                    <Button
                      label="Our services"
                      variant="dark"
                      size="large-with-icon"
                      isWithIcon
                      iconPosition="right"
                      iconType="arrow-right-up"
                      iconColor="dark"
                    />
                  </div>
                  <div>
                    <Button
                      label="View projects"
                      variant="darker"
                      size="large-with-icon"
                      isWithIcon
                      iconPosition="right"
                      iconType="arrow-right"
                    />
                  </div>
                </div>
                <AvatarGroup />
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
