import Image from "next/image";
import React from "react";

const EnergySection: React.FC = () => {
  return (
    <section className="bg-primary-500 pt-[133px] pb-[141px]">
      <div className="container mx-auto px-8 2xl:px-40">
        <div className="grid grid-cols-2">
          <div className="max-w-[478px] text-5xl font-bold leading-[58px] text-neutral-0">
            Everything you need to make a difference
          </div>
          <div className="max-w-[634px] text-4.5xl text-neutral-10">
            We believe that energy storage is a key component in the transition
            to a cleaner and more sustainable future. We build facilities that
            are designed with the latest technologies to ensure maximum
            efficiency, reliability, and safety. We work closely with our
            clients to understand their unique needs and tailor our solutions to
            meet their specific requirements.
          </div>
        </div>
        <div className="relative mt-[65px] h-[518px] w-full">
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
