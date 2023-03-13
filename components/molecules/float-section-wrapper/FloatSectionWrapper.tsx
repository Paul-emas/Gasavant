import React from "react";

export interface FloatSectionWrapperProps {
  children: React.ReactNode;
}

const FloatSectionWrapper: React.FC<FloatSectionWrapperProps> = ({
  children,
}) => {
  return (
    <div className="bg-transparent relative -mt-48">
      <div className="container px-8 2xl:px-40 mx-auto">
        <div className="float-shadow bg-white p-[100px]">{children}</div>
      </div>
    </div>
  );
};

export default FloatSectionWrapper;
