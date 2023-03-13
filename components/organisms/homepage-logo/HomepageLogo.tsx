import Image from "next/image";
import React from "react";

const HomepageLogo: React.FC = () => {
  return (
    <section className="h-[279px] bg-primary-50 py-16">
      <div className="container px-8 2xl:px-40 mx-auto">
        <div className="text-4.5xl text-neutral-900 text-center font-switz font-semibold">
          Trusted by 10+ Industry leading companies
        </div>
        <div className="flex justify-between mt-10">
          {[0, 1, 2, 3, 4].map((val) => (
            <div key={val}>
              <Image
                src="/assets/images/mac-logo.png"
                width={131.47}
                height={44.44}
                alt="partner mac logos"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageLogo;
