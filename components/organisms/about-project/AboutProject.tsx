import React from "react";
import { SectionHeading } from "components/atoms";

const AboutProject: React.FC = () => {
  return (
    <section className="pt-[165px]">
      <div className="container mx-auto px-8 2xl:px-40">
        <div className="grid grid-cols-6 gap-x-[60px]">
          <div className="col-span-2">
            <SectionHeading title="About the project" align="left" />
            <div className="mt-14 font-switz">
              <div className="mb-6 border-b border-neutral-40 pb-6">
                <div className="font-light text-neutral-100">Project type</div>
                <div className="mt-2 text-4.5xl font-semibold text-neutral-900">
                  Engineering Design & Construction
                </div>
              </div>
              <div className="mb-6 border-b border-neutral-40 pb-6">
                <div className="font-light text-neutral-100">Timeline</div>
                <div className="mt-2 text-4.5xl font-semibold text-neutral-900">
                  Dec 2022 - June 2023
                </div>
              </div>
              <div className="mb-6 border-b border-neutral-40 pb-6">
                <div className="font-light text-neutral-100">Status</div>
                <div className="mt-2 text-4.5xl font-semibold text-neutral-900">
                  Ongoing
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="w-[693px]">
              <div className="text-4.5xl leading-6 text-neutral-800">
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
            <div className="mt-16 text-4.5xl leading-6 text-neutral-800">
              Failure to invest the bare minimum in adapting to climate change
              this decade, could cost emerging markets 12 times as much in
              damages and lost growth. In our recent research we discuss how
              finance for climate adaptation can be channeled.
              <br />
              <br />
              Autolayout has not only improved my design workflow by allowing me
              quickly create responsive and consistent designs, but also
              improved my speed and productivity.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
