import { Link } from "react-scroll";

const Navbar = ({ handleModal }) => {
  return (
    <ul className="flex flex-col justify-center items-center gap-[48px] my-[170px] text-white text-[18px] font-normal tracking-[1.8px] md:flex-row md:gap-[24px] md:my-0 md:text-[14px] md:tracking-[1.4px] xl:gap-[56px] xl:tracking-[1.4px]">
      <li className="h-[22px] md:h-[17px]">
        <Link
          to="services"
          onClick={handleModal}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Services
        </Link>
      </li>
      <li className="h-[22px] md:h-[17px]">
        {" "}
        <Link
          to="career"
          onClick={handleModal}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Career
        </Link>
      </li>
      <li className="h-[22px] md:h-[17px]">
        <Link
          to="gallery"
          onClick={handleModal}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Gallery
        </Link>
      </li>
      <li className="h-[22px] md:h-[17px]">
        <Link
          to="contacts"
          onClick={handleModal}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contacts
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
