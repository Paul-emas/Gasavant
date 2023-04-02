import React from "react";
import { SectionHeading } from "components/atoms";

const AboutProject: React.FC = () => {
  return (
    <section className="pt-[74px] md:pt-[165px]">
      <div className="container mx-auto px-5 md:px-8 2xl:px-40">
        <div className="flex flex-col-reverse gap-x-[60px] md:grid md:grid-cols-6">
          <div className="col-span-2">
            <div className="hidden md:block">
              <SectionHeading title="About the project" align="left" />
            </div>
            <div className="mt-14 text-center font-switz md:text-left">
              <div className="mb-6 border-b border-neutral-40 pb-6">
                <div className="text-3.2xl font-light text-neutral-100 md:text-base">
                  Project type
                </div>
                <div className="mt-2 text-base font-semibold text-neutral-900 md:text-4.5xl">
                  Engineering Design & Construction
                </div>
              </div>
              <div className="mb-6 border-b border-neutral-40 pb-6">
                <div className="text-3.2xl font-light text-neutral-100 md:text-base">
                  Timeline
                </div>
                <div className="mt-2 text-base font-semibold text-neutral-900 md:text-4.5xl">
                  Dec 2022 - June 2023
                </div>
              </div>
              <div className="mb-6 pb-6">
                <div className="text-3.2xl font-light text-neutral-100 md:text-base">
                  Status
                </div>
                <div className="mt-2 text-base font-semibold text-neutral-900 md:text-4.5xl">
                  Ongoing
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="block md:hidden">
              <SectionHeading title="About the project" align="left" />
            </div>
            <div className="mt-6 md:mt-0">
              <div className="font-switz md:max-w-[693px]">
                <div className="text-3.2xl leading-5 text-neutral-800 md:text-4.5xl md:leading-7">
                  Failure to invest the bare minimum in adapting to climate
                  change this decade, could cost emerging markets 12 times as
                  much in damages and lost growth. In our recent research we
                  discuss how finance for climate adaptation can be channeled.
                  <br />
                  <br />
                  Autolayout has not only improved my design workflow by
                  allowing me quickly create responsive and consistent designs,
                  but also improved my speed and productivity.
                </div>
              </div>
              <div className="mt-6 font-switz text-3.2xl leading-5 text-neutral-800 md:mt-16 md:text-4.5xl md:leading-7">
                Failure to invest the bare minimum in adapting to climate change
                this decade, could cost emerging markets 12 times as much in
                damages and lost growth. In our recent research we discuss how
                finance for climate adaptation can be channeled.
                <br />
                <br />
                Autolayout has not only improved my design workflow by allowing
                me quickly create responsive and consistent designs, but also
                improved my speed and productivity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
