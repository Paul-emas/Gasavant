import React from "react";

export interface SectionHeadingProps {
  title: string;
  pageCaption?: string;
  align?: "center" | "left" | "right";
  maxWidth?: string;
  layout?: "flex" | "normal";
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title = "",
  pageCaption,
  align = "center",
  maxWidth,
  layout = "normal",
}) => {
  return (
    <div
      className={`text-center ${
        layout === "flex" ? "w-full md:flex md:gap-x-[262px]" : ""
      } md:text-${align} ${
        align === "center" ? "mx-auto" : "mx-auto md:mx-0"
      } ${maxWidth ? maxWidth : "max-w-[627px]"}`}
    >
      <div
        className={`${
          layout === "flex" ? "md:max-w-[502px]" : ""
        } text-3.3xl font-bold leading-[37px] text-neutral-900 md:text-5xl md:leading-[58px]`}
      >
        {title}
      </div>
      {pageCaption ? (
        <div
          className={`${
            layout === "flex" ? "md:max-w-[610px]" : ""
          } mt-6 font-switz text-base text-neutral-500 md:text-4.5xl`}
        >
          {pageCaption}
        </div>
      ) : null}
    </div>
  );
};

export default SectionHeading;
