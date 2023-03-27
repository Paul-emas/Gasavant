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
      className={`${!inPage ? "bg-neutral-0 pt-[129px] pb-[215px]" : ""}`}
    >
      <div className={`${!inPage ? "container mx-auto px-8 2xl:px-40" : ""}`}>
        {title ? (
          <div className="mb-[100px]">
            <SectionHeading {...{ title, pageCaption, maxWidth }} />
          </div>
        ) : null}
        <div className="grid grid-cols-3 gap-6">
          {data.map(({ iconUrl, title, caption }, ind) => (
            <div
              key={`card-sec-${ind}`}
              className="h-[350px] border border-neutral-40 bg-neutral-0 pt-12"
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
                <div className="mt-6 text-4.5xl font-semibold text-neutral-900">
                  {title}
                </div>
                <div className="mx-auto mt-2 max-w-[320px] px-8 text-neutral-500">
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
