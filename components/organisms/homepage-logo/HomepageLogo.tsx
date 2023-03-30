import Image from "next/image";
import React from "react";
import { partnersData } from "../why-us/WhyUs";

const HomepageLogo: React.FC = () => {
  return (
    <section className="h-[167px] bg-primary-50 py-8 md:h-[279px] md:py-16">
      <div className="container mx-auto px-8 2xl:px-40">
        <div className="text-center font-switz text-3.2xl font-semibold text-neutral-900 md:text-4.5xl">
          Trusted by 10+ Industry leading companies
        </div>
        <div className="mt-10">
          <div className="hidden items-center justify-between md:flex">
            {partnersData
              .slice(0, 5)
              .map(({ imageUrl, width, height, alt }) => (
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
          <div className="flex items-center justify-between gap-x-3 md:hidden">
            {partnersData
              .slice(0, 3)
              .map(({ imageUrl, width, height, alt }) => (
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
      </div>
    </section>
  );
};

export default HomepageLogo;
