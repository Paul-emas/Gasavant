import { Button } from "components/atoms";
import AvatarGroup from "components/atoms/avatar-group/AvatarGroup";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="h-[750px] overflow-hidden bg-neutral-900">
      <div className="container mx-auto h-full px-8 2xl:px-40">
        <div className="grid h-full grid-cols-2">
          <div>
            <div className="mt-[112px]">
              <div className="max-w-[592px]">
                <div className="text-5.5xl font-bold leading-[68px] text-primary-50">
                  We build high-quality gas storage facilities
                </div>
                <div className="mt-6 max-w-[560px] text-4.5xl text-neutral-60">
                  Engineering gas storage infrastructure that surpasses the
                  standard of the evolving power industry.
                </div>
              </div>
              <div className="mt-14 flex items-center gap-x-2">
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
                    />
                  </Link>
                </div>
              </div>
            </div>
            <AvatarGroup />
          </div>
          <div className="relative">
            <div className="absolute bottom-[60px] right-0 scale-[1.25] 2xl:bottom-[100px] 2xl:scale-[1.4] 3xl:bottom-[40px] 3xl:scale-[1.13]">
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
