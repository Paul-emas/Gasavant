import React from "react";

export interface FloatSectionWrapperProps {
  children: React.ReactNode;
}

const FloatSectionWrapper: React.FC<FloatSectionWrapperProps> = ({
  children,
}) => {
  return (
    <div className="relative -mt-48 bg-transparent">
      <div className="container mx-auto px-8 2xl:px-40">
        <div className="float-shadow bg-white py-[100px] px-[80px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FloatSectionWrapper;
