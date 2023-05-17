import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { partnersData } from "../why-us/WhyUs";

const HomepageLogo: React.FC = () => {
  return (
    <section className="h-[167px] bg-primary-50 py-8 md:h-[279px] md:py-16">
      <div className="container mx-auto px-8 2xl:px-40">
        <div className="text-center font-switz text-3.2xl font-semibold text-neutral-900 md:text-4.5xl">
          Trusted by Industry leading companies
        </div>
        <div className="mt-10">
          <div className="hidden items-center justify-between md:flex">
            <Swiper spaceBetween={5} slidesPerView={5} autoplay>
              {partnersData.map(({ imageUrl, width, height, alt }) => (
                <SwiperSlide key={imageUrl}>
                  <div className="mb-[60px]">
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex items-center justify-between gap-x-8 md:hidden">
            <Swiper spaceBetween={5} slidesPerView={3} autoplay>
              {partnersData.map(({ imageUrl, width, height, alt }) => (
                <SwiperSlide key={imageUrl}>
                  <div className="mb-[60px] mr-4">
                    <Image
                      src={imageUrl}
                      width={width}
                      height={height}
                      alt={alt}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageLogo;
