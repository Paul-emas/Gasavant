import React from "react";
import Image from "next/image";

const imagesSecOne = [
  "/assets/images/slider/img-0.jpg",
  "/assets/images/slider/img-1.jpg",
  "/assets/images/slider/img-2.jpg",
  "/assets/images/slider/img-3.jpg",
];

const imagesSecTwo = [
  "/assets/images/slider/img-4.jpg",
  "/assets/images/slider/img-5.jpg",
  "/assets/images/slider/img-6.jpg",
  "/assets/images/slider/img-7.jpg",
];

const ProjectsSlider = () => {
  return (
    <section className="overflow-hidden md:pt-[74px] md:pb-10">
      <div className="w-[4079px] overflow-hidden whitespace-nowrap">
        <div className="flex gap-x-1 md:gap-x-3.5">
          {[...imagesSecOne, ...imagesSecTwo].map((value) => (
            <div key={value}>
              <div className="relative h-[131.48px] w-[173.13px] md:h-[309.4px] md:w-[407.4px]">
                <Image
                  src={value}
                  placeholder="blur"
                  blurDataURL={value}
                  alt="project slider image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[4079px] overflow-hidden whitespace-nowrap">
        <div className="mt-3.5 flex gap-x-1 md:gap-x-3.5">
          {[...imagesSecTwo, ...imagesSecOne].map((value) => (
            <div key={value}>
              <div className="relative h-[131.48px] w-[173.13px] md:h-[309.4px] md:w-[407.4px]">
                <Image
                  src={value}
                  placeholder="blur"
                  blurDataURL={value}
                  alt="project slider image"
                  fill
                  className="object-cover"
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
