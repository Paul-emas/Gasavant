import React from "react";
import Image from "next/image";
import { stats } from "../stats-section/StatsSection";

const AboutCounter: React.FC = () => {
  return (
    <section className="relative h-[648px] bg-neutral-0">
      <div className="w-full h-[648px] relative">
        <Image
          src="/assets/images/oil-mil.jpg"
          fill
          alt="Oil storage factory"
          className="object-cover"
        />
      </div>
      <div className="absolute w-full -bottom-32 z-10">
        <div className="container mx-auto px-20 2xl:px-40">
          <div className="3xl:px-16">
            <div className="h-[275px] border border-neutral-40 flex justify-center items-center bg-neutral-0 float-shadow">
              {stats.map(({ title, caption }) => (
                <div
                  key={title}
                  className="h-[155px] border-r-[1.5px] border-neutral-40 w-1/4 text-center last:border-r-0 flex items-center justify-center"
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

export default AboutCounter;
