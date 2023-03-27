import { SectionHeading } from "components/atoms";
import Image from "next/image";
import React from "react";

const ProjectsSlider = () => {
  return (
    <section className="overflow-hidden pt-[74px] pb-10">
      <div className="flex w-[4079px] gap-x-3.5">
        {[...Array(10)].map((value) => (
          <div key={value}>
            <div className="relative h-[309.4px] w-[407.4px]">
              <Image
                src="/assets/images/slider/slide-4.jpg"
                alt="project slider image"
                fill
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3.5 flex w-[4079px] gap-x-3.5">
        {[...Array(10)].map((value) => (
          <div key={value}>
            <div className="relative h-[309.4px] w-[407.4px]">
              <Image
                src="/assets/images/slider/slide-2.jpg"
                alt="project slider image"
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSlider;
