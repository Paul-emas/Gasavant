import { SectionHeading } from "components/atoms";
import Image from "next/image";
import React from "react";

const ProjectsSlider = () => {
  return (
    <section className="pt-[124px] pb-10 overflow-hidden">
      <SectionHeading
        {...{
          title: "Take a look at our recent projects",
          pageCaption:
            "Transparency, efficient management of resources, Advancement of society",
        }}
      />
      <div className="flex gap-x-3.5 mt-[107px] w-[4079px]">
        {[...Array(10)].map((value) => (
          <div>
            <div key={value} className="w-[407.4px] h-[309.4px] relative">
              <Image
                src="/assets/images/slider/slide-4.jpg"
                alt="project slider image"
                fill
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-x-3.5 mt-3.5 w-[4079px]">
        {[...Array(10)].map((value) => (
          <div>
            <div key={value} className="w-[407.4px] h-[309.4px] relative">
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
