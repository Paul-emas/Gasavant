import React from "react";
import Image from "next/image";

export type AboutContentCardProps = {
  title: string;
  caption: string;
  imageUrl: string;
  alt: string;
  align: "left" | "right";
};

const AboutContentCard: React.FC<AboutContentCardProps> = ({
  title,
  caption,
  imageUrl,
  alt,
  align,
}) => {
  return (
    <div
      className={`${
        align === "right"
          ? "flex-col-reverse sm:flex-row-reverse"
          : "flex-col-reverse sm:flex-row"
      } mb-12 flex flex-wrap items-center justify-center last:mb-0 md:mb-[220px] md:gap-x-10 2xl:gap-x-16 3xl:gap-x-[118px]`}
    >
      <div className="max-w-[456px] text-center md:text-left">
        <div className="text-neurtal-900 mt-12 text-2xl font-bold leading-[30px] md:mt-0 md:text-[33px] md:leading-10">
          {title}
        </div>
        <div className="mt-6 font-switz text-base text-neutral-500 md:text-4.5xl">
          {caption}
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src={imageUrl}
          width={612}
          height={437}
          placeholder="blur"
          blurDataURL={imageUrl}
          alt={alt}
        />
      </div>
      <div className="block md:hidden">
        <Image
          src={imageUrl}
          width={335}
          height={238}
          placeholder="blur"
          blurDataURL={imageUrl}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default AboutContentCard;
