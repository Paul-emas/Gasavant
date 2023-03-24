import { Button } from "components/atoms";
import AvatarGroup from "components/atoms/avatar-group/AvatarGroup";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="h-[750px] bg-neutral-900 overflow-hidden">
      <div className="container px-8 2xl:px-40 mx-auto h-full">
        <div className="grid grid-cols-2 h-full">
          <div>
            <div className="mt-[112px]">
              <div className="max-w-[578px]">
                <div className="text-5.5xl text-primary-50 font-bold leading-[68px]">
                  We build state of the art gas storage tanks
                </div>
                <div className="mt-6 text-neutral-60 text-4.5xl">
                  We build state of the art gas storage tanks across the world
                  starting from the grassroot and gas flares.
                </div>
              </div>
              <div className="flex items-center mt-14 gap-x-2">
                <Button
                  label="Our services"
                  variant="dark"
                  size="large-with-icon"
                  isWithIcon
                  iconPosition="right"
                  iconType="arrow-right-up"
                  iconColor="dark"
                />
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
          <div className="relative">
            <div className="absolute bottom-[60px] 2xl:bottom-[100px] 3xl:bottom-[40px] 3xl:scale-[1.13] right-0 scale-[1.25] 2xl:scale-[1.4]">
              <Image
                src="/assets/images/tank.png"
                width={795}
                height={674}
                loading="lazy"
                placeholder="blur"
                blurDataURL="/assets/images/tank.png"
                alt="header avatar 1"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
