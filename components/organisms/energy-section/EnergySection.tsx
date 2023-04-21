import Image from "next/image";
import React from "react";

const EnergySection: React.FC = () => {
  return (
    <section className="bg-primary-500 py-[53px] md:pb-[141px] md:pt-[133px]">
      <div className="container mx-auto px-5 md:px-8 2xl:px-40">
        <div className="grid text-center md:grid-cols-2 md:text-left">
          <div className="max-w-[502px] text-3.3xl font-bold leading-[37px] text-neutral-0 md:text-5xl md:leading-[58px]">
            Everything you need to make a difference
          </div>
          <div className="mt-8 max-w-[634px] font-switz text-base leading-7 text-neutral-30 md:mt-0 md:text-4.5xl">
            We believe that energy storage is a key component in the transition
            to a cleaner and more sustainable future. We build facilities that
            are designed with the latest technologies to ensure maximum
            efficiency, reliability, and safety. We work closely with our
            clients to understand their unique needs and tailor our solutions to
            meet their specific requirements.
          </div>
        </div>
        <div className="relative mt-[67px] h-[219px] w-full md:mt-[65px] md:h-[518px]">
          <Image
            src="/assets/images/energy-banner.jpg"
            alt="energy banner"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default EnergySection;
