import { LeftBorderMobile } from "../svgs/borders";
import { RightBorderMobile } from "../svgs/borders";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col text-right w-[118px] h-[52px] ml-auto">
        <p className=" text-white text-[37px] uppercase font-thin tracking-[1.665px] h-[45px] text-center translate-y-[-5px]">
          <span className=" text-white text-[37px]  font-medium  text-center ">
            7
          </span>
          days
        </p>
        <p className=" text-white text-[12px] font-light tracking-[9.48px] uppercase text-right w-[113px] h-[15px]  translate-y-[-8px] ml-[2px] ">
          journey
        </p>
      </div>
      <div className="mt-[24px]">
        <h2 className="text-white text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase">
          <span className="font-medium">Uncover</span>
          <br /> Carpathian's <br />
          Secret
        </h2>
      </div>
      <p className="text-white text-[10px] font-extralight leading-[16px] mt-[24px]">
        Hoverla / Yaremche / Zakarpattia / <br /> Vorokhta / Synevyr Lake /
        Bukovel
      </p>
      <p className="text-white text-justify text-[14px] font-extralight leading-[20px] mt-[24px]">
        We offer you unforgettable trips to the most beautiful parts of the
        Carpathians. Enjoy stunning views, exciting expeditions, and the best
        service!
      </p>

      <div className="relative">
        <LeftBorderMobile className="absolute w-[42px] h-[53px]" />
        <button className="w-full h-[53px] py-[18px] px-[64px] mt-[24px] bg-white bg-opacity-10  flex justify-center items-center">
          <span className="text-white text-center text-[18px] font-bold leading-[48px] uppercase">
            Join now
          </span>
        </button>
        <RightBorderMobile className="absolute w-[42px] h-[53px] top-0 right-0" />
      </div>
    </div>
  );
};

export default Hero;
