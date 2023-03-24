import { HeadingBanner } from "components/atoms";
import React from "react";
import { FaqQuestions, Footer, Navbar } from "components/organisms";

const FaqsTemplate = () => {
  return (
    <div>
      <Navbar theme="light" logoTheme="light" optionTheme="light" />
      <HeadingBanner
        {...{
          title: "Frequently Asked Questions",
          caption: "Got questions? we’ve got answers",
        }}
      />
      <FaqQuestions />
      <Footer />
    </div>
  );
};

export default FaqsTemplate;
