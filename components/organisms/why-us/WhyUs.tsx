import React from "react";
import Image from "next/image";
import { Button } from "components/atoms";

export const partnersData = [
  {
    imageUrl: "/assets/images/logos/flowgas.png",
    width: 138,
    height: 50,
    alt: "Flowgas logo",
  },
  {
    imageUrl: "/assets/images/logos/techoil.png",
    width: 161,
    height: 41,
    alt: "Techoil logo",
  },
  {
    imageUrl: "/assets/images/logos/northwest.png",
    width: 191,
    height: 51,
    alt: "Northwest logo",
  },
  {
    imageUrl: "/assets/images/logos/oryx.png",
    width: 121,
    height: 47,
    alt: "Northwest logo",
  },
  {
    imageUrl: "/assets/images/logos/stockgap.png",
    width: 143,
    height: 55,
    alt: "Stockgap logo",
  },
  {
    imageUrl: "/assets/images/logos/aab.png",
    width: 140,
    height: 46,
    alt: "AAb logo",
  },
  {
    imageUrl: "/assets/images/logos/aarano.png",
    width: 138,
    height: 51,
    alt: "AA Rano logo",
  },
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-14 md:pb-[213px] md:pt-[193px]">
      <div className="container mx-auto bg-white px-5 md:px-20 2xl:px-40">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-wrap items-center justify-center md:hidden">
            {partnersData.map(({ imageUrl, width, height, alt }) => (
              <div key={imageUrl} className="mb-[60px] w-1/2 md:w-1/3">
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
                <div key={imageUrl} className="mb-[60px] w-1/2 md:w-1/3">
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
