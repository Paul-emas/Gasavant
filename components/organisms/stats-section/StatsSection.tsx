import React from "react";
import { SectionHeading } from "components/atoms";

export const stats = [
  {
    title: "$1.5bn",
    caption: "Project value",
  },
  {
    title: "2,345",
    caption: "Project value",
  },
  {
    title: "8.5M",
    caption: "Project value",
  },
  {
    title: "44+",
    caption: "Project value",
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="pb-[90px]">
      <div className="h-[495px] bg-primary-500"></div>
      <div className="container mx-auto px-20 2xl:px-40 h-[694px] bg-white -mt-96">
        <div className="pt-[97px]">
          <SectionHeading
            {...{
              title: "Join the community, change the future",
              pageCaption:
                "Transparency, efficient management of resources, Advancement of society",
            }}
          />
          <div className="3xl:px-16 mt-[65px]">
            <div className="h-[275px] border border-neutral-40 flex justify-center items-center mb-[70px]">
              {stats.map(({ title, caption }) => (
                <div
                  key={title}
                  className="h-[155px] border-r-[1.5px] border-neutral-40 w-1/4 flex items-center justify-center text-center last:border-r-0"
                >
                  <div>
                    <div className="text-5.5xl text-neutral-900 font-bold">
                      {title}
                    </div>
                    <div className="text-neutral-500 text-base">{caption}</div>
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
