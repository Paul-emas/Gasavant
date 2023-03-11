import { SectionHeading } from "components/atoms";
import Image from "next/image";
import React from "react";

interface CardDetailInterface {
  iconUrl: string;
  title: string;
  caption: string;
}

export interface ServiceSectionProps {
  title: string;
  pageCaption?: string;
  data: CardDetailInterface[];
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title = "",
  pageCaption,
  data,
}) => {
  return (
    <section className="bg-neutral-0 pt-[129px] pb-[215px]">
      <div className="container px-20 2xl:px-40 mx-auto">
        <SectionHeading {...{ title, pageCaption }} />
        <div className="grid grid-cols-3 mt-[100px] gap-6">
          {data.map(({ iconUrl, title, caption }, ind) => (
            <div
              key={`card-sec-${ind}`}
              className="bg-neutral-0 border border-neutral-40 pt-12 h-[323px]"
            >
              <Image
                src={iconUrl}
                width={64}
                height={64}
                placeholder="blur"
                blurDataURL={iconUrl}
                alt={title}
                className="rounded-full mx-auto"
              />
              <div className="text-center font-switz">
                <div className="mt-6 text-neutral-900 text-4.5xl font-semibold">
                  {title}
                </div>
                <div className="mt-2 max-w-[320px] text-neutral-500 mx-auto">
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
