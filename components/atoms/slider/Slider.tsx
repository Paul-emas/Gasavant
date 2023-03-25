import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import { ArrowRightIcon, ArrowUpRightIcon } from "icons";

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
      <header className="mt-[160px]">
        <div className="container mx-auto px-8 2xl:px-40">
          <div className="flex items-center justify-between">
            <div
              className={`${
                maxWidth ? maxWidth : "max-w-[588px]"
              } text-5xl font-bold leading-[58px] text-neutral-900`}
            >
              {title}
            </div>
            <div className="flex items-center gap-x-5">
              <div>
                <button className="review-swiper-button-prev flex h-[80px] w-[80px] rotate-180 items-center justify-center rounded-full border border-neutral-50">
                  <div className="scale-110">
                    <ArrowRightIcon theme="dark" />
                  </div>
                </button>
              </div>
              <div>
                <button className="review-swiper-button-next flex h-[80px] w-[80px] items-center justify-center rounded-full border border-neutral-50">
                  <div className="scale-110">
                    <ArrowRightIcon theme="dark" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto mt-[110px] w-[2000px] overflow-hidden 3xl:container 3xl:px-40">
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
          slidesPerView={3}
          spaceBetween={32}
          className="relative -left-[16%] 2xl:-left-[7%] 3xl:left-0"
        >
          {slideImages.map((path) => (
            <SwiperSlide
              key={path}
              className="group relative h-[450px] w-[857px] 3xl:h-96"
            >
              <div className="relative h-[450px] w-full bg-neutral-40 3xl:h-96">
                {showOverlay ? (
                  <div className="slider-overlay absolute inset-0 z-10 h-full w-full translate-y-10 opacity-0 duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="absolute bottom-6 left-0 w-full">
                      <div className="flex w-full 3xl:justify-center">
                        <div className="flex w-full items-center justify-between gap-x-6 px-11 3xl:px-5">
                          <div className="max-w-[401px] font-switz text-sm leading-7 text-neutral-0">
                            {`You'll`} make a better win in digital if you know
                            how to work around their creative contents and how
                            to amplify them.
                          </div>

                          <div>
                            <div className="flex h-[60px] w-[60px] items-center justify-center bg-primary-50">
                              <div className="scale-110">
                                <ArrowUpRightIcon theme="secondary" />
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
