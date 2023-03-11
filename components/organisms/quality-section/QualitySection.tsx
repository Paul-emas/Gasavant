import { Button } from "components/atoms";
import Image from "next/image";
import React from "react";

const QualitySection: React.FC = () => {
  return (
    <section className="pt-[150px] pb-[170px]">
      <div className="flex 3xl:justify-center">
        <div className="flex items-center space-x-[85px]">
          <div>
            <div className="w-[728px] h-[495px] bg-primary-50">
              <Image
                src="/assets/images/quality-banner.png"
                width={604}
                height={505}
                alt="Quality banner image"
                className="relative top-[58px] left-16"
              />
            </div>
          </div>
          <div className="max-w-[451px]">
            <div className="text-primary-500 tracking-[0.25em] font-switz uppercase font-medium">
              Why choose us
            </div>
            <div className="mt-4 leading-[58px] text-5xl font-bold text-neutral-900">
              We believe in premium quality
            </div>
            <div className="mt-7 text-neutral-900 font-switz text-base">
              You'll make a better win in digital if you know how to work around
              their creative contents and how to amplify them to the markets
              that need it most. Watch the video and click learn more.
            </div>

            <Button label="Contact us" size="large" className="mt-14" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
