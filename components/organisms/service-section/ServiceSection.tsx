import { SectionHeading } from "components/atoms";
import React from "react";
import Image from "next/image";

interface CardDetailInterface {
  iconUrl: string;
  title: string;
  caption: string;
}

export interface ServiceSectionProps {
  title?: string;
  pageCaption?: string;
  data: CardDetailInterface[];
  inPage?: boolean;
  maxWidth?: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title = "",
  pageCaption,
  data,
  inPage,
  maxWidth,
}) => {
  return (
    <section
      className={`${
        !inPage ? "bg-neutral-0 py-[67px] md:pb-[215px] md:pt-[129px]" : ""
      }`}
    >
      <div
        className={`${
          !inPage ? "container mx-auto px-5 md:px-8 2xl:px-40" : ""
        }`}
      >
        {title ? (
          <div className="mb-14 md:mb-[100px]">
            <SectionHeading {...{ title, pageCaption, maxWidth }} />
          </div>
        ) : null}
        <div className="grid gap-y-3 md:grid-cols-3 md:gap-6">
          {data.map(({ iconUrl, title, caption }, ind) => (
            <div
              key={`card-sec-${ind}`}
              className="h-[280px] border border-neutral-40 bg-neutral-0 pt-10 md:h-[350px] md:pt-12"
            >
              <Image
                src={iconUrl}
                width={64}
                height={64}
                placeholder="blur"
                blurDataURL={iconUrl}
                alt={title}
                className="mx-auto rounded-full"
              />
              <div className="text-center font-switz">
                <div className="mt-4 text-4.5xl font-semibold text-neutral-900 md:mt-6">
                  {title}
                </div>
                <div className="mx-auto mt-2 px-6 text-center text-3.2xl text-neutral-500 md:px-8 md:text-base">
                  {caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
