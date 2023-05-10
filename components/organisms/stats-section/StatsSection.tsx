import React from "react";
import { SectionHeading } from "components/atoms";
import Image from "next/image";

export const stats = [
  {
    title: "800MT",
    caption: "Monthly Gas Supplied",
  },
  {
    title: "500MT",
    caption: "Storage Capacity Built",
  },
  {
    title: "8+",
    caption: "Completed projects",
  },
  {
    icon: true,
    caption: "Safety & Regulatory Compliance",
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="pb-10 md:pb-[200px]">
      <div className="h-[205px] bg-primary-500 md:h-[495px]"></div>
      <div className="px-3">
        <div className="container mx-auto -my-36 h-[694px] bg-white px-6 md:-mt-96 md:px-20 2xl:px-40">
          <div className="pt-[33px] md:pt-[97px]">
            <SectionHeading
              {...{
                title: "We are committed to shaping the future",
                pageCaption:
                  "Leading the expansion of gas infrastructure in sub- saharan Africa ",
              }}
            />
            <div className="mt-[34px] md:mt-[65px] 3xl:px-16">
              <div className="flex flex-wrap  items-center justify-center border-neutral-40 md:mb-[70px] md:h-[275px] md:border">
                {stats.map(({ title, caption, icon }) => (
                  <div
                    key={title}
                    className="mt-[0.25px] flex h-[125px] w-1/2 items-center justify-center border border-neutral-40 text-center md:h-[155px] md:w-1/4 md:border-y-0 md:border-r-[1.5px] md:border-l-0 md:last:border-r-0"
                  >
                    <div>
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
