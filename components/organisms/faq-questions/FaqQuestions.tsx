import React from "react";
import { FloatSectionWrapper } from "components/molecules";

const questions = [
  {
    ques: "What is LPG?",
    paragraphs: [
      "LPG, otherwise known as Liquified Petroleum Gas is the liquefied form of petroleum gases released during the extraction of crude oil and natural gas. It  is composed of a highly flammable mixture of hydrocarbon gases, specifically propane, butylene, propylene,  isobutane and n- butane. LPG is commonly used in residential heating, cooking, fuel in cars and industrial power.",
    ],
  },
  {
    ques: "What is the difference between butane and propane?",
    paragraphs: [
      "The key difference between the two is their boiling point. Propane is capable of handling lower temperatures, making it suitable for outdoor storage; while Butane is better stored indoors.",
    ],
  },
  {
    ques: "Does Gasavant operate and maintain the LPG plants they’ve built?",
    paragraphs: [
      "Gasavant provides maintenance of our constructed LPG plants as an optional service according to client needs.",
    ],
  },
  {
    ques: "What is the Nigerian standard for LPG mix of propane and butane?",
    paragraphs: [
      "Though the NMDPRA has not exclusively published strict regulations on the LPG  mix, the industry standard approves of a 70 parts propane  to 30 parts butane mix. ",
    ],
  },
  {
    ques: "What is the minimum land size requirement?",
    paragraphs: [
      "The minimum land size requirement is 1000 square meters (sqm)",
    ],
  },
  {
    ques: "Would  Gasavant provide LPG supply after construction?",
    paragraphs: [
      "We are able to provide LPG supply after construction if the owner of the plant deems it necessary.",
    ],
  },
];

const FaqQuestions: React.FC = () => {
  return (
    <section className="pb-56">
      <FloatSectionWrapper>
        {questions.map(({ ques, paragraphs }) => (
          <div
            key={ques}
            className="mb-[86px] border-b border-neutral-40 last:border-b-0"
          >
            <div className="flex justify-between">
              <div className="max-w-[329px] font-switz text-2xl font-semibold text-neutral-900">
                {ques}
              </div>
              <div className="max-w-[553px] pb-[86px]">
                {paragraphs.map((para) => (
                  <div
                    key={para}
                    className="mb-4 font-switz text-4.5xl text-neutral-500"
                  >
                    {para}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </FloatSectionWrapper>
    </section>
  );
};

export default FaqQuestions;
