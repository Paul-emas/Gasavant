import React from "react";
import Image from "next/image";
import { stats } from "../stats-section/StatsSection";

const AboutCounter: React.FC = () => {
  return (
    <section className="relative h-[225px] bg-neutral-0 md:h-[648px]">
      <div className="relative h-[225px] w-full md:h-[648px]">
        <Image
          src="/assets/images/oil-mil.jpg"
          fill
          alt="Oil storage factory"
          className="object-cover"
        />
      </div>
      <div className="absolute -bottom-32 z-10 w-full">
        <div className="container mx-auto px-5 md:px-20 2xl:px-40">
          <div className="3xl:px-16">
            <div className="float-shadow flex flex-wrap items-center justify-center border-neutral-40 bg-neutral-0 md:h-[275px] md:border">
              {stats.map(({ title, caption, icon }) => (
                <div
                  key={title}
                  className="flex h-[125px] w-1/2 items-center justify-center border border-neutral-40 text-center md:mt-[0.25px] md:h-[155px] md:w-1/4 md:border-y-0 md:border-r-[1.5px] md:border-l-0 md:last:border-r-0"
                >
                  {icon ? (
                    <div className="text-center">
                      <Image
                        src="/assets/images/check.jpg"
                        width={48}
                        height={48}
                        alt="checklist icon image"
                        className="mx-auto hidden md:block"
                      />
                      <Image
                        src="/assets/images/check.jpg"
                        width={24}
                        height={24}
                        alt="checklist icon image"
                        className="mx-auto block md:hidden"
                      />
                      <div className="mx-auto mt-3 max-w-[130px] text-center font-switz text-[11px] text-neutral-500 md:mt-5 md:max-w-[180px] md:text-base">
                        {caption}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-2xl font-bold leading-normal text-neutral-900 md:text-5.5xl">
                        {title}
                      </div>
                      <div className="mt-2 text-[11px] text-neutral-500 md:mt-3.5 md:text-base">
                        {caption}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCounter;
