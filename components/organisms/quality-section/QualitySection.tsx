import { Button } from "components/atoms";
import Image from "next/image";
import React from "react";

const QualitySection: React.FC = () => {
  return (
    <section className="pt-[150px] pb-[170px]">
      <div className="container mx-auto px-20 2xl:px-40 bg-white">
        <div className="flex justify-center">
          <div className="flex items-center space-x-[88px]">
            <div className="relative w-[614px] h-[643px]">
              <Image
                src="/assets/images/quality-banner.jpg"
                fill
                alt="Quality banner image"
                className="object-cover"
              />
            </div>
            <div className="max-w-[451px]">
              <div className="text-primary-500 tracking-[0.25em] font-switz uppercase font-medium">
                Connect with us
              </div>
              <div className="mt-4 leading-[58px] text-5xl font-bold text-neutral-900">
                Let’s help you kick start that project
              </div>
              <div className="mt-7 text-neutral-900 font-switz text-base">
                Our team of professionals are ready to pick up conversations
                with you on a project. Let’s work together and make things
                happen.
              </div>

              <Button label="Contact us" size="large" className="mt-14" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
