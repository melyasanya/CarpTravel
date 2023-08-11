"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import firstPhoto from "../../../public/Gallery1-mobile.jpg";
import secondPhoto from "../../../public/Gallery2-mobile.jpg";
import thirdPhoto from "../../../public/Gallery3-mobile.jpg";
import SwiperGallery from "../swiper/swiper";

const Gallery = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div
      id="gallery"
      className="bg-[url('../../public/Background-Gallery-mobile.jpg')] bg-center h-full bg-no-repeat bg-cover py-[56px] px-[20px] md:px-[32px] md:py-[64px] md:bg-[url('../../public/Background-Gallery-tablet.jpg')] xl:bg-[url('../../public/Background-Gallery-desktop.jpg')] xl:px-[80px] xl:py-[104px]
    "
    >
      <h2 className="text-white text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase mb-[24px] md:text-center md:text-[67px] md:leading-[1.15] md:tracking-[-2.68px] md:mb-[66px] xl:text-left xl:text-[98px] xl:tracking-[-3.92px] xl:mb-[24px]">
        Our <span className="font-medium">Gallery</span>
      </h2>
      {isMobile ? (
        <ul className="flex flex-col gap-[24px]">
          <li>
            <Image src={firstPhoto} width={280} height={187} alt="mountains" />
          </li>
          <li>
            <Image
              src={secondPhoto}
              width={280}
              height={187}
              alt="lake and forrest"
            />
          </li>
          <li>
            <Image
              src={thirdPhoto}
              width={280}
              height={187}
              alt="forrest and house"
            />
          </li>
        </ul>
      ) : (
        <SwiperGallery />
      )}
    </div>
  );
};

export default Gallery;
