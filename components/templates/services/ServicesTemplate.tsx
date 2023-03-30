import React from "react";
import { HeadingBanner, SectionHeading } from "components/atoms";
import { Footer, Navbar, ServiceSection } from "components/organisms";
import { FloatSectionWrapper } from "components/molecules";
import { pageData2 } from "../homepage/Homepage";
import Image from "next/image";
import { partnersData } from "components/organisms/why-us/WhyUs";

const ServicesTemplate: React.FC = () => {
  return (
    <>
      <Navbar theme="light" logoTheme="light" optionTheme="light" />
      <HeadingBanner
        {...{
          title: "Our services — with over 35 years of experience",
          caption:
            "With strong focus on safety and quality assurance, ensuring all projects meet industry standards and regulations.",
          maxWidth: "max-w-[676px]",
        }}
      />
      <section className="pb-10 md:pb-56">
        <FloatSectionWrapper>
          <div>
            <div className="justify-between text-center md:flex md:text-left">
              <div className="text-2xl font-bold leading-[30px] text-neutral-900 md:max-w-[416px] md:text-5xl md:leading-[58px]">
                We provide efficient EPC and Gas supply.
              </div>
              <div className="mt-6 font-switz text-3.2xl text-neutral-800 md:mt-0 md:max-w-[529px] md:text-4.5xl">
                Our team of experienced professionals is dedicated to providing
                the highest level of service and safety for our clients. We
                adhere to the strictest regulatory standards, follow best
                practices and employ the latest technologies to ensure the safe
                and efficient storage of your gas products.
              </div>
            </div>
            <div className="mt-14 md:mt-[82px]">
              <ServiceSection {...pageData2} inPage />
            </div>
            <div className="my-16 md:my-[140px]">
              <SectionHeading
                {...{
                  title:
                    "We are a tested, trusted and reliable company to build gas storage tanks",
                  pageCaption:
                    "With deep market understanding, our team of experienced professionals are dedicated to providing the highest level of service and safety for our clients.",
                  maxWidth: "max-w-[820.07px]",
                }}
              />
              <div className="mx-auto md:max-w-[1000px]">
                <div className="mt-[64px] gap-x-3 md:mt-[82px] md:grid md:grid-cols-6">
                  <div className="relative h-44 md:col-span-4 md:h-[305.76px]">
                    <Image
                      src="/assets/images/services/service-bg1.jpg"
                      fill
                      alt="Engineer images"
                      className="object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-neutral-20 py-2 px-4 text-center font-switz text-3.2xl font-medium text-neutral-500 md:py-4 md:px-8 md:text-4.5xl">
                      Market understanding
                    </div>
                  </div>
                  <div className="relative mt-3 h-44 w-full md:col-span-2 md:mt-0 md:h-[305.76px] md:w-auto">
                    <Image
                      src="/assets/images/services/service-bg2.jpg"
                      fill
                      alt="Engineer images banner 2"
                      className="object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-neutral-20 py-2 px-4 text-center font-switz text-3.2xl font-medium text-neutral-500 md:py-4 md:px-8 md:text-4.5xl">
                      Technical feasibility
                    </div>
                  </div>
                </div>
                <div className="mt-3 grid space-y-3 md:grid-cols-3 md:gap-x-3 md:space-y-0">
                  <div className="relative h-44 w-full md:h-[305.76px] md:w-full">
                    <Image
                      src="/assets/images/services/service-bg3.jpg"
                      fill
                      alt="Engineer images 3"
                      className="object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-neutral-20 py-2 px-4 text-center font-switz text-3.2xl font-medium text-neutral-500 md:py-4 md:px-8 md:text-4.5xl">
                      Track Record
                    </div>
                  </div>
                  <div className="relative h-44 w-full md:h-[305.76px] md:w-full">
                    <Image
                      src="/assets/images/services/service-bg4.jpg"
                      fill
                      alt="Engineer images banner 4"
                      className="object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-neutral-20 py-2 px-4 text-center font-switz text-3.2xl font-medium text-neutral-500 md:py-4 md:px-8 md:text-4.5xl">
                      Budgeting
                    </div>
                  </div>
                  <div className="relative h-44 w-full md:h-[305.76px] md:w-full">
                    <Image
                      src="/assets/images/services/service-bg5.jpg"
                      fill
                      alt="Engineer images banner 5"
                      className="object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-neutral-20 py-2 px-4 text-center font-switz text-3.2xl font-medium text-neutral-500 md:py-4 md:px-8 md:text-4.5xl">
                      Safety compliance
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <SectionHeading
                {...{
                  title: "Trusted by 10+ industry leading companies",
                  pageCaption:
                    "Our clients include major oil & gas companies, as well as smaller regional gas providers, we have a proven track record of delivering projects on time and within budget.",
                }}
              />
              <div className="mx-auto mt-[77px] flex max-w-[820.8px] flex-wrap items-center justify-center">
                {partnersData.map(({ imageUrl, width, height, alt }) => (
                  <div
                    key={imageUrl}
                    className="mb-[60px] flex w-1/3 justify-center gap-x-6 md:w-1/4 md:gap-x-0"
                  >
                    <Image
                      src={imageUrl}
                      width={width}
                      height={height}
                      alt={alt}
                      placeholder="blur"
                      blurDataURL={imageUrl}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FloatSectionWrapper>
      </section>
      <Footer />
    </>
  );
};

export default ServicesTemplate;
