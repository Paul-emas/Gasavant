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
    <div className={`text-${align}`}>
      <div
        className={`${align === "center" ? "mx-auto" : ""} ${
          maxWidth ? maxWidth : "max-w-[627px]"
        } text-neutral-900 leading-[58px] text-5xl font-bold`}
      >
        {title}
      </div>
      {pageCaption ? (
        <div className="text-neutral-500 text-4.5xl font-switz mt-6">
          {pageCaption}
        </div>
      ) : null}
    </div>
  );
};

export default SectionHeading;
