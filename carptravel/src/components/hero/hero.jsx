import { useMediaQuery } from "react-responsive";
import {
  LeftBorderMobile,
  LeftBorderTablet,
  RightBorderTablet,
} from "../svgs/borders";
import { RightBorderMobile } from "../svgs/borders";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div>
      <div className="md:flex md:flex-row-reverse md:items-start">
        <div className="flex flex-col text-right w-[118px] h-[52px] ml-auto md:w-[230px] md:h-[88px]">
          <p className=" text-white text-[37px] uppercase font-thin tracking-[1.665px] h-[45px] text-center translate-y-[-5px] md:text-[67px] md:tracking-[8.71px] md:h-[81px] md:w-[190px] md:flex md:translate-y-[-12px]">
            <span className=" text-white text-[37px]  font-medium  text-center md:text-[67px] md:w-[40px] md:text-left md:flex  ">
              7
            </span>
            days
          </p>
          <p className=" text-white text-[12px] font-light tracking-[9.48px] uppercase text-right w-[113px] h-[15px]  translate-y-[-8px] ml-[2px] md:text-[14px] md:tracking-[25.9px] md:w-[220px] md:h-[16px] md:translate-y-[-15px]">
            journey
          </p>
        </div>
        <div className="mt-[24px] md:mt-0">
          <h2 className="text-white text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase md:text-[67px] md:leading-[1.15] md:tracking-[-2.68px]">
            <span className="font-medium">Uncover</span>
            <br /> Carpathian's <br />
            Secret
          </h2>
        </div>
      </div>
      <div className="md:flex md:justify-between md:items-end md:h-[100px]">
        <p className="text-white text-[10px] font-extralight leading-[16px] mt-[24px] md:mt-[68px] md:text-[14px] md:tracking-[1.26px] md:h-[32px]">
          Hoverla / Yaremche / Zakarpattia / <br /> Vorokhta / Synevyr Lake /
          Bukovel
        </p>
        <div className="md:w-[230px] md:mt-[-56px]">
          <p className="text-white text-justify text-[14px] font-extralight leading-[20px] mt-[24px] md:mt-0 md:text-[16px] ">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>

          <div className="relative">
            {isMobile && (
              <LeftBorderMobile className="absolute w-[42px] h-[53px]" />
            )}
            {isTablet && (
              <LeftBorderTablet className="absolute  md:w-[35px] md:h-[50px]" />
            )}
            <button className="w-full h-[53px] py-[18px] px-[64px] mt-[24px] bg-white bg-opacity-10  flex justify-center items-center md:mt-[28px] md:h-[50px] md:py-[14px]">
              <span className="text-white text-center text-[18px] font-bold leading-[48px] uppercase md:leading-[1.15]">
                Join now
              </span>
            </button>
            {isMobile && (
              <RightBorderMobile className="absolute w-[42px] h-[53px] top-0 right-0" />
            )}
            {isTablet && (
              <RightBorderTablet className="absolute  md:w-[35px] md:h-[50px] md:top-0 md:right-0" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
