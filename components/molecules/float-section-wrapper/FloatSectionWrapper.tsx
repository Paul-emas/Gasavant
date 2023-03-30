import React from "react";

export interface FloatSectionWrapperProps {
  children: React.ReactNode;
}

const FloatSectionWrapper: React.FC<FloatSectionWrapperProps> = ({
  children,
}) => {
  return (
    <div className="relative -mt-28 bg-transparent md:-mt-48">
      <div className="container mx-auto px-5 md:px-8 2xl:px-40">
        <div className="float-shadow bg-white py-14 px-6 md:py-[100px] md:px-[80px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FloatSectionWrapper;
