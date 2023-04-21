import React from "react";
import Image from "next/image";
import { Button } from "components/atoms";

export const partnersData = [
  {
    imageUrl: "/assets/images/logos/aab.png",
    width: 140,
    height: 46,
    alt: "AAb logo",
  },
  {
    imageUrl: "/assets/images/logos/peso.png",
    width: 90,
    height: 39,
    alt: "Peso logo",
  },
  {
    imageUrl: "/assets/images/logos/cimc.png",
    width: 114,
    height: 35,
    alt: "CIMC ENRIC logo",
  },
  {
    imageUrl: "/assets/images/logos/eroton.png",
    width: 113,
    height: 44,
    alt: "Eroton logo",
  },
  {
    imageUrl: "/assets/images/logos/gi.png",
    width: 114,
    height: 54,
    alt: "GI&E logo",
  },
  {
    imageUrl: "/assets/images/logos/powergas.png",
    width: 160,
    height: 51,
    alt: "Powergas logo",
  },
  {
    imageUrl: "/assets/images/logos/hydrocarbon.png",
    width: 178,
    height: 46,
    alt: "Kwake Hydrocarbon logo",
  },
  {
    imageUrl: "/assets/images/logos/oilserve.png",
    width: 80,
    height: 50,
    alt: "Oilserve logo",
  },
  {
    imageUrl: "/assets/images/logos/nga.png",
    width: 61,
    height: 61,
    alt: "NGA logo",
  },
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-14 md:pb-[213px] md:pt-[193px]">
      <div className="container mx-auto bg-white px-5 md:px-20 2xl:px-40">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-wrap items-center justify-center gap-x-14 md:hidden">
            {partnersData.map(({ imageUrl, width, height, alt }) => (
              <div key={imageUrl} className="mb-[60px]">
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
          <div className="text-center md:max-w-[451px] md:text-left">
            <div className="font-switz text-3.2xl font-medium uppercase tracking-[0.25em] text-primary-500 md:text-base">
              Why choose us
            </div>
            <div className="mt-4 text-3.3xl font-bold leading-[37px] text-neutral-900 md:text-5xl md:leading-[58px]">
              Years of industry-leading experience
            </div>
            <div className="mt-7 font-switz text-base text-neutral-900">
              Our team of professionals are ready to pick up conversations with
              you on a project. Let’s work together and make things happen.
            </div>
            <Button
              label="Connect with us"
              isWithIcon
              iconPosition="right"
              variant="secondary"
              iconColor="secondary"
              size="large-with-icon"
              className="mt-14 w-full md:w-auto"
            />
          </div>
          <div className="mt-10 hidden md:block">
            <div className="flex flex-wrap items-center justify-between md:w-[595.13px]">
              {partnersData.map(({ imageUrl, width, height, alt }) => (
                <div
                  key={imageUrl}
                  className="mb-[60px] flex w-1/3 justify-center"
                >
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
      </div>
    </section>
  );
};

export default WhyUs;
