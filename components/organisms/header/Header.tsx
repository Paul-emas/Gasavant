import React from "react";
import { Button } from "components/atoms";
import AvatarGroup from "components/atoms/avatar-group/AvatarGroup";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="h-[764px] overflow-hidden bg-neutral-900 md:h-[750px]">
      <div className="container mx-auto h-full px-5 md:px-8 2xl:px-40">
        <div className="grid h-full md:grid-cols-2">
          <div>
            <div className="mt-[71px] md:mt-[112px]">
              <div className="text-center md:max-w-[592px] md:text-left">
                <div className="text-3.3xl font-bold leading-[37px] text-primary-50 md:text-5.5xl md:leading-[68px]">
                  We build high-quality gas storage facilities
                </div>
                <div className="mt-6 font-switz text-neutral-60 md:max-w-[560px] md:text-4.5xl">
                  Provinding Engineering gas storage infrastructure that meets
                  all your gas infrastructure needs.
                </div>
              </div>
              <div className="mt-14 items-center space-y-2 md:flex md:gap-x-2 md:space-y-0">
                <div>
                  <Link href="/services">
                    <Button
                      className="w-full md:w-auto"
                      label="Our services"
                      variant="dark"
                      size="large-with-icon"
                      isWithIcon
                      iconPosition="right"
                      iconType="arrow-right-up"
                      iconColor="dark"
                    />
                  </Link>
                </div>
                <div>
                  <Link href="/team">
                    <Button
                      className="w-full md:w-auto"
                      label="Our team"
                      variant="darker"
                      size="large-with-icon"
                      isWithIcon
                      iconPosition="right"
                      iconType="arrow-right"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <AvatarGroup />
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 right-0 md:bottom-[60px] md:scale-[1.25] 2xl:bottom-[100px] 2xl:scale-[1.4] 3xl:bottom-[40px] 3xl:scale-[1.13]">
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
