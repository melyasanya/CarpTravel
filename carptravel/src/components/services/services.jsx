import Image from "next/image";

import photo from "../../../public/Offer-Photo-mobile.jpg";
import background from "../../../public/Offer-Background1-mobile.jpg";

const Services = () => {
  return (
    <div className="bg-background w-full relative ">
      <Image
        src={background}
        className="w-full h-full object-cover absolute mix-blend-overlay"
      />
      <div className="pt-[54px] pb-[56px] px-[20px]">
        <h3 className="text-white text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase mb-[24px]">
          We <span className="font-medium">offer</span>
        </h3>
        <p className="text-white text-right text-[43px] font-thin mb-[16px]">
          01/<span className="text-white200">05</span>
        </p>
        <Image
          src={photo}
          width={280}
          height={213}
          alt="What we offer"
          className="mb-[12px]"
        />
        <p className="text-white text-right text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-[24px]">
          Feel the adrenaline rush
        </p>
        <div className="flex flex-col justify-between h-[320px]">
          <ul className="text-white500 text-[20px] font-medium leading-[17px] uppercase flex flex-col gap-[16px]">
            <li>
              <p className="text-white">ATVs traveling</p>
            </li>
            <li>
              <p>Rock climbing</p>
            </li>
            <li>
              <p>
                Hot air
                <br />
                ballooning
              </p>
            </li>
            <li>
              <p>Skydiving</p>
            </li>
            <li>
              <p>Rafting</p>
            </li>
          </ul>
          <p className="text-white text-[14px] font-extralight leading-[20px]">
            Join exciting rafting expeditions on the waterways of the
            Carpathians. Go through challenging waterways and overcome gusty
            waves, feel the adrenaline, and enjoy the incredible views of the
            surrounding mountains.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
