import { SectionHeading } from "components/atoms";
import React, { useState } from "react";

const HomepageFaq = () => {
  const [activeQues, setActiveQues] = useState<any>(null);
  const [open, setOpen] = useState(false);

  function handleActiveQues(val: number) {
    if (activeQues !== val) {
      setActiveQues(val);
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
              pageCaption: "Transparency, efficient management",
              align: "left",
              maxWidth: "max-w-[440px]",
            }}
          />
          <div>
            {[...Array(5)].map((val, ind) => (
              <div key={val} className="mb-10">
                <button
                  onClick={() => handleActiveQues(val)}
                  className="flex items-center m-0 p-0 outline-none justify-between w-full group text-neutral-900 hover:text-primary-500 active:text-primary-700"
                >
                  <span className="flex text-[25px] font-switz font-semibold">
                    This is a sample question
                  </span>
                  <span className="w-12 h-12 rounded-full border border-neutral-50 flex items-center justify-center text-3xl group-hover:border-primary-500">
                    {activeQues === val && open ? "-" : "+"}
                  </span>
                </button>
                <div
                  className={`${
                    activeQues === val && open
                      ? "overflow-auto h-auto mt-6 duration-200"
                      : "overflow-hidden h-0 duration-200"
                  } max-w-[578px] text-4.5xl font-switz text-neutral-600 transition-all`}
                >
                  You&apos;ll make a better win in digital if you know how to
                  work around their creative contents and how to amplify them to
                  the markets that need it most.
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
