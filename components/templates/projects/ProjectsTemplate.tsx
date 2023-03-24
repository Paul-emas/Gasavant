import React from "react";
import {
  AboutProject,
  Footer,
  Navbar,
  ProjectList,
} from "components/organisms";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import Image from "next/image";
import { ArrowRightIcon } from "icons";

const slideImages = [
  "/assets/images/slider/project-slide-1.jpg",
  "/assets/images/slider/project-slide-1.jpg",
  "/assets/images/slider/project-slide-1.jpg",
  "/assets/images/slider/project-slide-1.jpg",
  "/assets/images/slider/project-slide-1.jpg",
  "/assets/images/slider/project-slide-1.jpg",
];

const ProjectsTemplate: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Navbar theme="light" logoTheme="light" optionTheme="light" />
      <header className="mt-[160px]">
        <div className="container mx-auto px-8 2xl:px-40">
          <div className="flex items-center justify-between">
            <div className="max-w-[588px] text-5xl font-bold leading-[58px] text-neutral-900">
              Northwest Petroleum & Gas Limited
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
          initialSlide={3}
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
            <SwiperSlide key={path} className="relative h-[610px] w-[857px]">
              <div className="h-[610px] w-[857px]">
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
      <AboutProject />
      <div className="pt-96 pb-56">
        <ProjectList />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsTemplate;
