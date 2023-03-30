import React from "react";

export interface SectionHeadingProps {
  title: string;
  pageCaption?: string;
  align?: "center" | "left" | "right";
  maxWidth?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title = "",
  pageCaption,
  align = "center",
  maxWidth,
}) => {
  return (
    <div
      className={`text-center md:text-${align} ${
        align === "center" ? "mx-auto" : "mx-auto md:mx-0"
      } ${maxWidth ? maxWidth : "max-w-[627px]"}`}
    >
      <div
        className={`text-3.3xl font-bold leading-[37px] text-neutral-900 md:text-5xl md:leading-[58px]`}
      >
        {title}
      </div>
      {pageCaption ? (
        <div className="mt-6 font-switz text-base text-neutral-500 md:text-4.5xl">
          {pageCaption}
        </div>
      ) : null}
    </div>
  );
};

export default SectionHeading;
