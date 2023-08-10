import { Link } from "react-scroll";

const Navbar = ({ handleModal }) => {
  return (
    <ul className="flex flex-col justify-center items-center gap-[48px] my-[170px] text-white text-[18px] font-normal tracking-[1.8px]">
      <li className="h-[22px]">About</li>
      <li className="h-[22px]">
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
      <li className="h-[22px]">Career</li>
      <li className="h-[22px]">Gallery</li>
      <li className="h-[22px]">
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
