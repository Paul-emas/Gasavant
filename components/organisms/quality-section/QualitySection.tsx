import { Button } from "components/atoms";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const QualitySection: React.FC = () => {
  return (
    <section className="py-[73px] md:pb-[170px] md:pt-[150px]">
      <div className="container mx-auto bg-white px-5 md:px-20 2xl:px-40">
        <div className="flex justify-center">
          <div className="flex flex-col items-center md:flex-row md:space-x-[88px]">
            <div className="relative h-[359.84px] w-[353.44px] -rotate-90 md:h-[649.25px] md:w-[622px]">
              <Image
                src="/assets/images/quality-banner.jpg"
                fill
                alt="Quality banner image"
                className="object-cover"
              />
            </div>
            <div className="mt-[47px] text-center md:mt-0 md:max-w-[451px] md:text-left">
              <div className="font-switz text-3.2xl font-medium uppercase tracking-[0.25em] text-primary-500 md:text-base">
                Connect with us
              </div>
              <div className="mx-auto mt-4 max-w-[267px] text-2xl font-bold text-neutral-900 md:mx-0 md:max-w-full md:text-5xl md:leading-[58px]">
                Let’s help you kick start that project
              </div>
              <div className="mt-6 font-switz text-base text-neutral-900 md:mt-7">
                Our team of professionals are ready to pick up conversations
                with you on a project. Let’s work together and make things
                happen.
              </div>
              <Link href="/contact">
                <Button
                  label="Contact us"
                  size="large"
                  className="mt-14 w-full md:w-[227px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
