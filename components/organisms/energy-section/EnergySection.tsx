import Image from "next/image";
import React from "react";

const EnergySection: React.FC = () => {
  return (
    <section className="bg-primary-500 pt-[133px] pb-[141px]">
      <div className="container px-8 2xl:px-40 mx-auto">
        <div className="grid grid-cols-2">
          <div className="text-neutral-0 text-5xl max-w-[392px] leading-[58px] font-bold">
            Energy is key to development
          </div>
          <div className="max-w-[634px] text-neutral-10 text-4.5xl">
            We believe that energy storage is a key component in the transition
            to a cleaner and more sustainable future. We build facilities that
            are designed with the latest technologies to ensure maximum
            efficiency, reliability, and safety.
            <br />
            <br />
            We work closely with our clients to understand their unique needs
            and tailor our solutions to meet their specific requirements.
          </div>
        </div>
        <div className="mt-[65px] w-full h-[481px] relative">
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
