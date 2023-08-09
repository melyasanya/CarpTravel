import ContactForm from "./contactForm";

const Contacts = () => {
  return (
    <div className="bg-[url('../../public/Background-Contact-mobile.jpg')] pt-[56px] pb-[54px] px-[20px]">
      <h3 className="text-white text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase pb-[36px]">
        Contact <span className="font-medium">us</span>
      </h3>
      <ul className="pb-[12px]">
        <li className="flex justify-end gap-[20px] items-start pb-[24px]">
          <div className="text-white text-[14px] font-normal leading-[24px]">
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
        <li className="flex justify-start ml-[16px] gap-[20px] pb-[26px] items-center">
          <a
            href="mailto:support@carptravel.com"
            className="text-white text-[14px] font-normal leading-[24px]"
          >
            support@carptravel.com
          </a>
          <p className="text-white text-[12px] font-extralight leading-[20px] pt-[2px] ">
            E-mail
          </p>
        </li>
        <li className="flex justify-end mr-[20px] gap-[20px] items-start">
          <p className="text-white text-[12px] font-extralight leading-[20px] pt-[2px]">
            Follow us
          </p>
          <ul>
            <li>
              <a
                href="https://uk-ua.facebook.com/"
                className="text-white text-[14px] font-normal leading-[24px]"
              >
                facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="text-white text-[14px] font-normal leading-[24px]"
              >
                instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                className="text-white text-[14px] font-normal leading-[24px]"
              >
                youtube
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/uk-UA/"
                className="text-white text-[14px] font-normal leading-[24px]"
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
