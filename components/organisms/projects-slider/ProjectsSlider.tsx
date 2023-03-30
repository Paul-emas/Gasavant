import { SectionHeading } from "components/atoms";
import Image from "next/image";
import React from "react";

const ProjectsSlider = () => {
  return (
    <section className="overflow-hidden md:pt-[74px] md:pb-10">
      <div className="w-[4079px] overflow-auto whitespace-nowrap">
        <div className="flex gap-x-1 md:gap-x-3.5">
          {[...Array(20)].map((value) => (
            <div key={value}>
              <div className="relative h-[131.48px] w-[173.13px] md:h-[309.4px] md:w-[407.4px]">
                <Image
                  src="/assets/images/slider/slide-4.jpg"
                  alt="project slider image"
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[4079px] overflow-auto whitespace-nowrap">
        <div className="mt-3.5 flex gap-x-1 md:gap-x-3.5">
          {[...Array(20)].map((value) => (
            <div key={value}>
              <div className="relative h-[131.48px] w-[173.13px] md:h-[309.4px] md:w-[407.4px]">
                <Image
                  src="/assets/images/slider/slide-2.jpg"
                  alt="project slider image"
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
