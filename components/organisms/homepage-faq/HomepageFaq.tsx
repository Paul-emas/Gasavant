import React, { useState } from "react";
import { SectionHeading } from "components/atoms";

const questions = [
  {
    id: 11,
    ques: "What is LPG?",
    ans: "",
  },
  {
    id: 12,
    ques: "What is the difference between butane and propane?",
    ans: "You'll make a better win in digital if you know how to work around their creative contents and how to amplify them to the markets that need it most.",
  },
  {
    id: 13,
    ques: "Does Gasavant operate and maintain the LPG plants they’ve built?",
    ans: "",
  },
  {
    id: 14,
    ques: "What is the Nigerian standard for LPG mix of propane and butane?",
    ans: "",
  },
  {
    id: 15,
    ques: "What is the minimum land size requirement?",
    ans: "",
  },
];

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
    <section className="pt-[137px] pb-[226px]">
      <div className="container mx-auto px-20 2xl:px-40">
        <div className="grid grid-cols-2">
          <SectionHeading
            {...{
              title: "Frequently asked questions",
              pageCaption: "We’ve got answers to your questions",
              align: "left",
              maxWidth: "max-w-[440px]",
            }}
          />
          <div>
            {questions.map((item) => (
              <div key={item.id} className="mb-10">
                <button
                  onClick={() => handleActiveQues(item)}
                  className="group m-0 flex w-full items-center justify-between p-0 text-neutral-900 outline-none hover:text-primary-500 active:text-primary-700"
                >
                  <span className="flex max-w-[500px] text-left font-switz text-[25px] font-semibold">
                    {item.ques}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-50 text-3xl group-hover:border-primary-500">
                    {activeQues?.id === item.id && open ? "-" : "+"}
                  </span>
                </button>
                <div
                  className={`${
                    activeQues?.id === item.id && open
                      ? "mt-6 h-auto overflow-auto duration-200"
                      : "h-0 overflow-hidden duration-200"
                  } max-w-[578px] font-switz text-4.5xl text-neutral-600 transition-all`}
                >
                  {item.ans}
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
