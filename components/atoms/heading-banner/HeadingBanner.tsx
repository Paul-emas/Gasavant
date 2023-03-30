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
    <div className="h-[487px] bg-primary-500 pt-[115px] md:h-[603px]">
      <div className="container mx-auto px-5 md:px-20 2xl:px-40">
        <div
          className={`${
            maxWidth ? `${maxWidth}` : "md:max-w-[494px]"
          }  mx-auto text-center`}
        >
          <div className="text-3.3xl font-bold leading-[37px] text-neutral-0 md:text-5.5xl md:leading-[68px]">
            {title}
          </div>
          <div className="mt-6 font-switz text-base text-neutral-10 md:text-4.5xl">
            {caption}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingBanner;
