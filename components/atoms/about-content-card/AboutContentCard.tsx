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
        align === "right" ? "flex-row-reverse" : ""
      } flex items-center justify-center gap-x-[118px] mb-[220px] last:mb-0`}
    >
      <div className="max-w-[456px]">
        <div className="text-neurtal-900 text-[33px] font-bold leading-10">
          {title}
        </div>
        <div className="mt-6 text-neutral-500 font-switz text-4.5xl">
          {caption}
        </div>
      </div>
      <div>
        <Image
          src={imageUrl}
          width={612}
          height={437}
          placeholder="blur"
          blurDataURL={imageUrl}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default AboutContentCard;
