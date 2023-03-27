import React from "react";
import { SectionHeading } from "components/atoms";

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
    title: "99.9%",
    caption: "Safety Compliant",
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="pb-[90px]">
      <div className="h-[495px] bg-primary-500"></div>
      <div className="container mx-auto -mt-96 h-[694px] bg-white px-20 2xl:px-40">
        <div className="pt-[97px]">
          <SectionHeading
            {...{
              title: "We are committed to shaping the future",
              pageCaption:
                "Leading the expansion of gas infrastructure in sub- saharan Africa ",
            }}
          />
          <div className="mt-[65px] 3xl:px-16">
            <div className="mb-[70px] flex h-[275px] items-center justify-center border border-neutral-40">
              {stats.map(({ title, caption }) => (
                <div
                  key={title}
                  className="flex h-[155px] w-1/4 items-center justify-center border-r-[1.5px] border-neutral-40 text-center last:border-r-0"
                >
                  <div>
                    <div className="text-5.5xl font-bold text-neutral-900">
                      {title}
                    </div>
                    <div className="text-base text-neutral-500">{caption}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
