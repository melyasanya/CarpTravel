import ContactForm from "./contactForm";

const Contacts = () => {
  return (
    <div
      className="bg-[url('../../public/Background-Contact-mobile.jpg')] pt-[56px] pb-[54px] px-[20px] md:py-[64px] md:px-[32px] md:bg-[url('../../public/Background-Contact-tablet.jpg')]"
      id="contacts"
    >
      <h3 className="text-white text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase pb-[36px] md:text-[67px] md:leading-[66px] md:tracking-[-2.68px]">
        Contact <span className="font-medium">us</span>
      </h3>
      <ul className="pb-[12px] md:flex md:flex-col md:flex-wrap md:h-[96px] md:pb-0 md:mb-[64px]">
        <li className="flex justify-end gap-[20px] items-start pb-[24px] md:justify-start md:pb-0 md:mb-[24px] md:w-[258px] md:ml-[64px]">
          <div className="text-white text-[14px] font-normal leading-[24px] md:text-[16px]">
            <a href="tel:+380981234567" className="block">
              +38 (098) 12 34 567
            </a>
            <a href="tel:+380731234567" className="block">
              +38 (073) 12 34 567
            </a>
          </div>
          <p className="text-white text-[12px] font-extralight leading-[20px] pt-[2px]">
            Phone number
          </p>
        </li>
        <li className="flex justify-start ml-[16px] gap-[20px] pb-[26px] items-center md:ml-[34px] md:pb-0 md:w-[242px] ">
          <a
            href="mailto:support@carptravel.com"
            className="text-white text-[14px] font-normal leading-[24px] md:text-[16px]"
          >
            support@carptravel.com
          </a>
          <p className="text-white text-[12px] font-extralight leading-[20px] pt-[2px] ">
            E-mail
          </p>
        </li>
        <li className="flex justify-end mr-[20px] gap-[20px] items-start md:justify-start md:mr-0 md:w-[288px] md:ml-auto">
          <p className="text-white text-[12px] font-extralight leading-[20px] pt-[2px] ">
            Follow us
          </p>
          <ul>
            <li>
              <a
                href="https://uk-ua.facebook.com/"
                className="text-white text-[14px] font-normal leading-[24px] md:text-[16px]"
              >
                facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="text-white text-[14px] font-normal leading-[24px] md:text-[16px]"
              >
                instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                className="text-white text-[14px] font-normal leading-[24px] md:text-[16px]"
              >
                youtube
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/uk-UA/"
                className="text-white text-[14px] font-normal leading-[24px] md:text-[16px]"
              >
                tiktok
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <ContactForm />
    </div>
  );
};

export default Contacts;
