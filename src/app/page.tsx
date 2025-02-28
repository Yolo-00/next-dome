"use client";

import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { useRef } from "react";

export default function Home() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-1/2 mx-auto">
      <div className="bg-gray-400">
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={40}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          onSlideChange={(e) => console.log(e, "slide change")}
          onSwiper={(swiper) => {
            console.log(swiper);
            swiperRef.current = swiper;
          }}
          className="h-[300px] w-[600px]"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <SwiperSlide key={index}>
              {({ isPrev, isNext }) => (
                <div
                  onClick={() => {
                    if (isPrev) {
                      swiperRef.current?.slidePrev();
                    }
                    if (isNext) {
                      swiperRef.current?.slideNext();
                    }
                  }}
                >
                  <img
                    src={`https://swiperjs.com/demos/images/nature-${
                      index + 1
                    }.jpg`}
                    alt={`Nature ${index + 1}`} // 建议添加alt属性
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
