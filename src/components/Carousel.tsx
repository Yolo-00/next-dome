"use client";

import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Carousel = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="mt-5">
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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        onSlideChange={(e) => console.log(e, "slide change")}
        onSwiper={(swiper) => {
          console.log(swiper);
          swiperRef.current = swiper;
        }}
        className="h-[400px] w-[800px]"
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
                  className="w-[290px] h-[350px]"
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
  );
};

export default Carousel;
