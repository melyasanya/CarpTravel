import Image from "next/image";

import { useMediaQuery } from "react-responsive";
import logo from "../../../public/logo.png";
import Navbar from "../navbar/navbar";

const Header = ({ handleModal }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTabletAndDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      {isMobile ? (
        <div className="flex justify-between  py-9">
          <div>
            <Image src={logo} width={60} height={20} alt="logo" />
            <p className="text-white font-Karantina text-sm leading-[1.15] font-normal tracking-[2.59px] ">
              CarpTravel
            </p>
          </div>
          <button onClick={handleModal}>
            <span className="text-white text-sm leading-normal font-normal tracking-[1.4px] uppercase">
              Menu
            </span>
          </button>
        </div>
      ) : (
        <div className="flex justify-between  py-9 md:py-0 md:pt-[24px] md:mb-[68px] xl:mb-[72px]">
          <div>
            <Image src={logo} width={60} height={20} alt="logo" />
            <p className="text-white font-Karantina text-sm leading-[1.15] font-normal tracking-[2.59px] ">
              CarpTravel
            </p>
          </div>
          <Navbar />
        </div>
      )}
    </>
  );
};

export default Header;
