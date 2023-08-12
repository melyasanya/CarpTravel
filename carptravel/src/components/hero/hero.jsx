import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import {
  LeftBorderDesktop,
  LeftBorderMobile,
  LeftBorderTablet,
  RightBorderDesktop,
  RightBorderTablet,
} from "../svgs/borders";
import { RightBorderMobile } from "../svgs/borders";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1439px)" });

  return (
    <div>
      <div className="md:flex md:flex-row-reverse md:items-start">
        <div className="flex flex-col text-right w-[118px] h-[52px] ml-auto md:w-[230px] md:h-[88px] xl:w-[305px] xl:h-[123px]">
          <p className=" text-white text-[37px] uppercase font-thin tracking-[1.665px] h-[45px] text-center translate-y-[-5px] md:text-[67px] md:tracking-[8.71px] md:h-[81px] md:w-[190px] md:flex md:translate-y-[-12px] xl:text-[98px] xl:w-[305px] xl:h-[119px] xl:tracking-[0px] xl:translate-y-[-18px]">
            <span className=" text-white text-[37px]  font-medium  text-center md:text-[67px] md:w-[40px] md:text-left md:flex xl:text-[98px] xl:w-[57px] xl:mr-[8px]">
              7
            </span>
            days
          </p>
          <p className=" text-white text-[12px] font-light tracking-[9.48px] uppercase text-right w-[113px] h-[15px]  translate-y-[-8px] ml-[2px] md:text-[14px] md:tracking-[25.9px] md:w-[220px] md:h-[16px] md:translate-y-[-15px] xl:text-[16px] xl:tracking-[36.48px] xl:w-[295px] xl:h-[19px] xl:translate-y-[-21px]">
            journey
          </p>
        </div>
        <div className="mt-[24px] md:mt-0">
          <h2 className="text-white text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase md:text-[67px] md:leading-[1.15] md:tracking-[-2.68px] xl:text-[98px] xl:tracking-[-3.92px]">
            <span className="font-medium">Uncover</span>
            <br /> Carpathian&apos;s <br />
            Secret
          </h2>
        </div>
      </div>
      <div className="md:flex md:justify-between md:items-end md:h-[100px] xl:h-[172px]">
        <p className="text-white text-[10px] font-extralight leading-[16px] mt-[24px] md:mt-[68px] md:text-[14px] md:tracking-[1.26px] md:h-[32px] xl:mt-[148px] xl:text-[16px] xl:leading-[24px] xl:tracking-[1.44px]">
          Hoverla / Yaremche / Zakarpattia / {isMobileOrTablet && <br />}{" "}
          Vorokhta / Synevyr Lake / Bukovel
        </p>
        <div className="md:w-[230px] md:mt-[-56px] xl:w-[294px] xl:mt-[-181px]">
          <p className="text-white text-justify text-[14px] font-extralight leading-[20px] mt-[24px] md:mt-0 md:text-[16px] xl:text-[18px] xl:leading-[24px]">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>

          <div className="relative">
            {isMobile && (
              <LeftBorderMobile className="absolute w-[42px] h-[53px]" />
            )}
            {isTablet && !isDesktop && (
              <LeftBorderTablet className="absolute  md:w-[35px] md:h-[50px]" />
            )}
            {isDesktop && (
              <LeftBorderDesktop className="absolute  md:w-[44px] md:h-[71px]" />
            )}
            <button className="w-full h-[53px] py-[18px] px-[64px] mt-[24px] bg-white bg-opacity-10  flex justify-center items-center md:mt-[28px] md:h-[50px] md:py-[14px] xl:h-[71px] hover:bg-white200 ">
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-white text-center text-[18px] font-bold leading-[48px] uppercase md:leading-[1.15] xl:text-[32px]"
              >
                Join now
              </Link>
            </button>
            {isMobile && (
              <RightBorderMobile className="absolute w-[42px] h-[53px] top-0 right-0" />
            )}
            {isTablet && !isDesktop && (
              <RightBorderTablet className="absolute  md:w-[35px] md:h-[50px] md:top-0 md:right-0" />
            )}
            {isDesktop && (
              <RightBorderDesktop className="absolute  md:w-[44px] md:h-[71px] md:top-0 md:right-0" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
