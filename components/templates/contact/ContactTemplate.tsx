import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Footer, Navbar } from "components/organisms";
import { Button } from "components/atoms";

const ContactTemplate: React.FC = () => {
  const [projectType, setProjectType] = useState<"start" | "other">("start");
  const [isFunded, setIsFunded] = useState(false);
  const { register, getValues } = useForm();
  const [companyName, setCompanyName] = useState("");
  const [desc, setDesc] = useState("");

  const [isLoadingForm, setIsLoadingForm] = useState(false);

  const handleProjectType = (type: "start" | "other") => {
    setIsLoadingForm(true);
    setTimeout(() => {
      setIsLoadingForm(false);
      setProjectType(type);
    }, 200);
  };

  return (
    <div>
      <Navbar theme="light" logoTheme="light" optionTheme="light" />
      <div className="contact-banner mb-[500px] h-[720px] w-full md:h-[750px]">
        <div className="relative top-[88px] mx-auto max-w-[676px] px-5 text-center md:top-[141px] md:px-0">
          <h1 className="text-3.3xl font-bold text-neutral-0 md:text-5.5xl md:leading-[68px]">
            Connect with us, let’s work together
          </h1>
          <div className="mx-auto mt-6 max-w-[502px] font-switz text-neutral-60">
            Consult us about a project or for other reasons, our team will love
            to hear from you!
          </div>
          <div className="mt-14">
            <div className="float-shadow mx-auto h-[800px] w-full bg-neutral-0 px-4 py-8 md:w-[636px] md:p-16">
              <div className="grid w-full grid-cols-2">
                <button
                  onClick={() => handleProjectType("start")}
                  className={`${
                    projectType === "start"
                      ? "bg-primary-400 text-neutral-10"
                      : "bg-primary-50 text-primary-500"
                  } h-12 text-center font-switz text-3.2xl font-semibold md:h-14 md:text-base`}
                >
                  Start a project
                </button>
                <button
                  onClick={() => handleProjectType("other")}
                  className={`${
                    projectType === "other"
                      ? "bg-primary-400 text-neutral-10"
                      : "bg-primary-50 text-primary-500"
                  } h-12 text-center font-switz text-3.2xl font-semibold md:h-14 md:text-base`}
                >
                  Other reasons
                </button>
              </div>
              {!isLoadingForm ? (
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="mt-12 w-full"
                  autoComplete="off"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value={process.env.NEXT_PUBLIC_WEB3FORM_KEY}
                  />
                  <input type="hidden" name="subject" value={desc} />
                  <input type="checkbox" name="botcheck" className="hidden" />
                  <input
                    type="hidden"
                    value={companyName}
                    {...register("from_name")}
                  />
                  {projectType === "start" ? (
                    <>
                      <input
                        type="text"
                        placeholder="Company / Individual name"
                        className="input-form"
                        required
                        {...register("Company / Individual name", {
                          onChange: (e) => setCompanyName(e.target.value),
                        })}
                      />
                      <input
                        {...register("Email address")}
                        type="text"
                        placeholder="Email address"
                        className="input-form mt-2.5"
                        required
                      />
                      <input
                        {...register("Project location")}
                        type="text"
                        placeholder="Project location"
                        className="input-form mt-2.5"
                        required
                      />
                      <div className="grid gap-x-3 md:grid-cols-2">
                        <div className="relative">
                          <input
                            {...register("Land size")}
                            type="text"
                            placeholder="Land size"
                            className="input-form mt-2.5"
                            required
                          />
                          <div className="absolute right-5 top-3 flex h-[80%] w-10 items-center bg-white font-switz font-semibold text-neutral-200">
                            SQM
                          </div>
                        </div>
                        <div className="relative">
                          <input
                            {...register("Storage capacity")}
                            type="text"
                            placeholder="Storage capacity"
                            className="input-form mt-2.5"
                            required
                          />
                          <div className="absolute right-5 top-3 flex h-[80%] w-10 items-center bg-white font-switz font-semibold text-neutral-200">
                            MT
                          </div>
                        </div>
                      </div>
                      <input
                        {...register("Description", {
                          onChange: (e) => setDesc(e.target.value),
                        })}
                        type="text"
                        placeholder="Description"
                        className="input-form mt-2.5"
                        required
                      />

                      <div className="my-[40px] flex items-center justify-between">
                        <div className="text-left font-switz text-base font-semibold text-neutral-900">
                          Does this project have financing?
                        </div>
                        <div>
                          <label className="switch">
                            <input
                              {...register("Does this project have financing?")}
                              value={isFunded ? "Yes" : "No"}
                              onChange={() => setIsFunded(!isFunded)}
                              type="checkbox"
                            />
                            <span className="slider"></span>
                          </label>
                        </div>
                      </div>
                      <Button type="submit" label="Submit" className="w-full" />
                      <Button
                        variant="secondary"
                        onClick={() => handleProjectType("other")}
                        label="Reaching out for other reasons?"
                        className="mt-3 w-full"
                      />
                    </>
                  ) : (
                    <>
                      <input
                        {...register("Company / Individual name", {
                          onChange: (e) => setCompanyName(e.target.value),
                        })}
                        type="text"
                        placeholder="Company name"
                        className="input-form"
                        required
                      />
                      <input
                        {...register("Email Address")}
                        type="text"
                        placeholder="Email Address"
                        className="input-form mt-2.5"
                        required
                      />
                      <input
                        {...register("Reason")}
                        type="text"
                        placeholder="Reason"
                        className="input-form mt-2.5"
                        required
                      />
                      <textarea
                        {...register("Message", {
                          onChange: (e) => setDesc(e.target.value),
                        })}
                        placeholder="Message"
                        className="input-form mt-2.5 h-[132px!important]"
                        required
                      />
                      <input
                        type="checkbox"
                        name="botcheck"
                        className="hidden"
                      />
                      <div className="mt-[69px] flex items-center justify-between"></div>
                      <Button type="submit" label="Submit" className="w-full" />
                      <Button
                        variant="secondary"
                        onClick={() => handleProjectType("start")}
                        label="Start a project"
                        className="mt-3 w-full"
                      />
                    </>
                  )}
                </form>
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <svg
                    className="h-10 w-10 animate-spin stroke-gray-500"
                    viewBox="0 0 256 256"
                  >
                    <line
                      x1="128"
                      y1="32"
                      x2="128"
                      y2="64"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="195.9"
                      y1="60.1"
                      x2="173.3"
                      y2="82.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="224"
                      y1="128"
                      x2="192"
                      y2="128"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="195.9"
                      y1="195.9"
                      x2="173.3"
                      y2="173.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="128"
                      y1="224"
                      x2="128"
                      y2="192"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="60.1"
                      y1="195.9"
                      x2="82.7"
                      y2="173.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="32"
                      y1="128"
                      x2="64"
                      y2="128"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="60.1"
                      y1="60.1"
                      x2="82.7"
                      y2="82.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactTemplate;
