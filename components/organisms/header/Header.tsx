import { Button } from "components/atoms";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="h-[783px] bg-neutral-900 overflow-hidden">
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
            <div className="mt-[142px] flex items-center">
              <div className="flex items-center">
                <Image
                  src="/assets/images/avatar-1.jpg"
                  width={56}
                  height={56}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/assets/images/avatar-1.jpg"
                  alt="header avatar 1"
                  className="rounded-full -ml-4"
                />
                <Image
                  src="/assets/images/avatar-2.jpg"
                  width={56}
                  height={56}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/assets/images/avatar-2.jpg"
                  alt="header avatar 2"
                  className="rounded-full -ml-4"
                />
                <Image
                  src="/assets/images/angle-up.jpg"
                  width={56}
                  height={56}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/assets/images/angle-up.jpg"
                  alt="header arrow up image"
                  className="rounded-full -ml-4"
                />
              </div>
              <div className="ml-4 text-neutral-20 font-switz">
                <div className="font-semibold">Senior staff</div>
                <div className="font-light">ready to assist you</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-[58px] right-0 scale-125">
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
