import React from "react";

export interface HeadingBannerProps {
  title: string;
  caption: string;
  maxWidth?: string;
}

const HeadingBanner: React.FC<HeadingBannerProps> = ({
  title,
  caption,
  maxWidth,
}) => {
  return (
    <div className="h-[603px] bg-primary-500 pt-[115px]">
      <div className="container mx-auto px-20 2xl:px-40">
        <div
          className={`${
            maxWidth ? maxWidth : "max-w-[494px]"
          }  text-center mx-auto`}
        >
          <div className="text-neutral-0 text-5.5xl font-bold leading-[68px]">
            {title}
          </div>
          <div className="mt-6 text-neutral-10 text-4.5xl font-switz">
            {caption}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingBanner;
