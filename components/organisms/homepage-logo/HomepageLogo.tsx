import Image from "next/image";
import React from "react";
import { partnersData } from "../why-us/WhyUs";

const HomepageLogo: React.FC = () => {
  return (
    <section className="h-[279px] bg-primary-50 py-16">
      <div className="container mx-auto px-8 2xl:px-40">
        <div className="text-center font-switz text-4.5xl font-semibold text-neutral-900">
          Trusted by 10+ Industry leading companies
        </div>
        <div className="mt-10 flex justify-between">
          {partnersData.slice(0, 5).map(({ imageUrl, width, height, alt }) => (
            <div key={imageUrl} className="mb-[60px] w-1/3">
              <Image
                src={imageUrl}
                width={width}
                height={height}
                alt={alt}
                placeholder="blur"
                blurDataURL={imageUrl}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageLogo;
