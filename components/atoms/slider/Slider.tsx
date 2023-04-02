import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import { ArrowRightIcon, ArrowUpRightIcon } from "icons";
import Link from "next/link";

const slideImages = [
  "/assets/images/slider/project-slide-1.jpg",
  "/assets/images/slider/project-slide-1.jpg",
  "/assets/images/slider/project-slide-1.jpg",
  "/assets/images/slider/project-slide-1.jpg",
  "/assets/images/slider/project-slide-1.jpg",
  "/assets/images/slider/project-slide-1.jpg",
];

export type SliderProps = {
  title: string;
  maxWidth?: string;
  showOverlay?: boolean;
};

const Slider: React.FC<SliderProps> = ({
  title,
  showOverlay = false,
  maxWidth,
}) => {
  return (
    <>
      <header className="mt-12 md:mt-[160px]">
        <div className="container mx-auto px-5 md:px-8 2xl:px-40">
          <div className="items-center justify-between md:flex">
            <div
              className={`${
                maxWidth ? maxWidth : "max-w-[271px] md:max-w-[588px]"
              } mx-auto text-center text-2xl font-bold leading-[30px] text-neutral-900 md:mx-0 md:text-left md:text-5xl md:leading-[58px]`}
            >
              {title}
            </div>
            <div className="mt-9 flex items-center justify-center gap-x-5 md:justify-start">
              <div>
                <button className="review-swiper-button-prev flex h-[56px] w-[56px] rotate-180 items-center justify-center rounded-full border border-neutral-50 md:h-[80px] md:w-[80px]">
                  <div className="md:scale-110">
                    <ArrowRightIcon theme="dark" />
                  </div>
                </button>
              </div>
              <div>
                <button className="review-swiper-button-next flex h-[56px] w-[56px] items-center justify-center rounded-full border border-neutral-50 md:h-[80px] md:w-[80px]">
                  <div className="md:scale-110">
                    <ArrowRightIcon theme="dark" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto mt-12 w-full overflow-hidden 3xl:container md:mt-[110px] md:w-[2000px] 3xl:px-40">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          loop
          navigation={{
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
          }}
          modules={[Navigation]}
          slidesPerView={
            typeof window !== "undefined" && window.screen.width <= 768 ? 1 : 3
          }
          spaceBetween={32}
          className="relative md:-left-[16%] 2xl:-left-[7%] 3xl:left-0"
        >
          {slideImages.map((path) => (
            <SwiperSlide
              key={path}
              className="group relative h-[204px] w-[282.63px] md:h-[450px] md:w-[857px] 3xl:h-96"
            >
              <div className="relative h-[204px] w-full bg-neutral-40 md:h-[450px] 3xl:h-96">
                {showOverlay ? (
                  <div className="slider-overlay absolute inset-0 z-10 h-full w-full translate-y-10 opacity-0 duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="absolute bottom-6 left-0 w-full">
                      <div className="flex w-full 3xl:justify-center">
                        <div className="flex w-full items-center justify-between gap-x-6 px-3 md:px-11 3xl:px-5">
                          <div className="font-switz text-xs leading-5 text-neutral-0 md:max-w-[401px] md:text-sm md:leading-7">
                            {`You'll`} make a better win in digital if you know
                            how to work around their creative contents and how
                            to amplify them.
                          </div>

                          <div>
                            <div className="flex h-14 w-14 items-center justify-center bg-primary-50 md:h-[60px] md:w-[60px]">
                              <div className="md:scale-110">
                                <Link href="projects/lgp">
                                  <ArrowUpRightIcon theme="secondary" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                <Image
                  src={path}
                  blurDataURL={path}
                  placeholder="blur"
                  loading="lazy"
                  fill
                  alt="slider"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
