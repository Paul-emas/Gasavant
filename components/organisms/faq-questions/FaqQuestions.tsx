import React from "react";
import { FloatSectionWrapper } from "components/molecules";

const questions = [
  {
    ques: "What is your normal turn around time?",
    paragraphs: [
      "Super blocks is created for individual web designers and web design agencies.",
      "It is also great if you're just starting out in web design, Super blocks and Framer make it easy to bring your creative visions to life. No coding skills required - simply mix and match blocks to create a custom website that perfectly captures your brand's essence.",
      "You can now launch a stunning website in no time - cutting your design time by up to 80%",
    ],
  },
  {
    ques: "What is your normal turn around time?",
    paragraphs: [
      "Super blocks is created for individual web designers and web design agencies.",
      "You can now launch a stunning website in no time - cutting your design time by up to 80%",
    ],
  },
  {
    ques: "What is your normal turn around time?",
    paragraphs: [
      "Super blocks is created for individual web designers and web design agencies.",
      "It is also great if you're just starting out in web design, Super blocks and Framer make it easy to bring your creative visions to life. No coding skills required - simply mix and match blocks to create a custom website that perfectly captures your brand's essence.",
      "You can now launch a stunning website in no time - cutting your design time by up to 80%",
    ],
  },
  {
    ques: "What is your normal turn around time?",
    paragraphs: [
      "Super blocks is created for individual web designers and web design agencies.",
      "You can now launch a stunning website in no time - cutting your design time by up to 80%",
    ],
  },
  {
    ques: "What is your normal turn around time?",
    paragraphs: [
      "Super blocks is created for individual web designers and web design agencies.",
      "You can now launch a stunning website in no time - cutting your design time by up to 80%",
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
              <div className="text-neutral-900 font-switz font-semibold max-w-[329px] text-2xl">
                {ques}
              </div>
              <div className="max-w-[553px] pb-[86px]">
                {paragraphs.map((para) => (
                  <div className="text-4.5xl text-neutral-500 font-switz mb-4">
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
