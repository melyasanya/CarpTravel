import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import firstPhoto from "../../../public/Gallery1-mobile.jpg";
import secondPhoto from "../../../public/Gallery2-mobile.jpg";
import thirdPhoto from "../../../public/Gallery3-mobile.jpg";

import "swiper/css";
import { useRef } from "react";

const SwiperGallery = () => {
  const swiperRef = useRef();

  return (
    <>
      <div>
        <Swiper
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <Image
              src={firstPhoto}
              width={415}
              height={294}
              alt="mountains"
              className="min-h-[294px] mx-auto xl:w-[606px] xl:h-[429px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={secondPhoto}
              width={415}
              height={294}
              alt="lake and forrest"
              className="min-h-[294px] mx-auto xl:w-[606px] xl:h-[429px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={thirdPhoto}
              width={415}
              height={294}
              alt="forrest and house"
              className="min-h-[294px] mx-auto xl:w-[606px] xl:h-[429px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-between px-[38px] text-white relative">
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="text-[33px] font-thin leading-[1.15] translate-y-[-72px] absolute z-10  left-[38px] xl:left-[228px]"
        >
          Back
        </button>
        <button
          onClick={() => swiperRef.current.slideNext()}
          className="text-[33px] font-thin leading-[1.15]  translate-y-[-72px] z-100 absolute top-0 right-[28px] z-10 xl:right-[228px]"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default SwiperGallery;
