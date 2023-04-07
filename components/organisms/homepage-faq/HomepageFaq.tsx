import React, { useState } from "react";
import { SectionHeading } from "components/atoms";
import { questions } from "../faq-questions/FaqQuestions";

const HomepageFaq = () => {
  const [activeQues, setActiveQues] = useState<any>(questions[0]);
  const [open, setOpen] = useState(false);

  function handleActiveQues(ques: any) {
    if (activeQues?.id !== ques.id) {
      setActiveQues(ques);
      setOpen(true);
    } else {
      setActiveQues(null);
      setOpen(true);
    }
  }
  return (
    <section className="py-10 md:pt-[137px] md:pb-[226px]">
      <div className="container mx-auto px-5 md:px-20 2xl:px-40">
        <div className="grid md:grid-cols-2">
          <SectionHeading
            {...{
              title: "Frequently asked questions",
              pageCaption: "We’ve got answers to your questions ",
              align: "left",
              maxWidth: "max-w-[440px]",
            }}
          />
          <div className="mt-[63px] md:mt-0">
            {questions.map((item) => (
              <div key={item.id} className="mb-10">
                <button
                  onClick={() => handleActiveQues(item)}
                  className="group m-0 flex w-full items-center justify-between p-0 text-neutral-900 outline-none hover:text-primary-500 active:text-primary-700"
                >
                  <div className="flex max-w-[280px] text-left font-switz text-base font-semibold md:max-w-[500px] md:text-[25px] md:leading-8">
                    {item.ques}
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-neutral-50 text-3xl group-hover:border-primary-500 md:border">
                    {activeQues?.id === item.id && open ? "-" : "+"}
                  </span>
                </button>
                <div
                  className={`${
                    activeQues?.id === item.id && open
                      ? "mt-6 h-auto overflow-auto duration-200"
                      : "h-0 overflow-hidden duration-200"
                  } max-w-[578px] font-switz text-3.2xl text-neutral-600 transition-all md:text-4.5xl`}
                >
                  {item.paragraphs}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageFaq;
