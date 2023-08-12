import ContactForm from "./contactForm";

const Contacts = () => {
  return (
    <div
      className="bg-[url('../../public/Background-Contact-mobile.jpg')] bg-no-repeat bg-cover bg-center pt-[56px] pb-[54px] px-[20px] md:py-[64px] md:px-[32px] md:bg-[url('../../public/Background-Contact-tablet.jpg')] xl:bg-[url('../../public/Background-Contact-desktop.jpg')] xl:p-[104px]"
      id="contacts"
    >
      <h3 className="text-white text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase pb-[36px] md:text-[67px] md:leading-[66px] md:tracking-[-2.68px] xl:text-[98px] xl:leading-[1.15] xl:tracking-[-3.92px]">
        Contact <span className="font-medium">us</span>
      </h3>
      <div className="xl:flex xl:justify-between xl:gap-[231px]">
        <ul className="pb-[12px] md:flex md:flex-col md:flex-wrap md:h-[96px] md:pb-0 md:mb-[64px] xl:flex-nowrap xl:h-auto xl:mb-0 xl:items-start">
          <li className="flex justify-end gap-[20px] items-start pb-[24px] md:justify-start md:pb-0 md:mb-[24px] md:w-[258px] md:ml-[64px] xl:mb-[64px] xl:ml-[117px] xl:text-right xl:w-auto">
            <div className="text-white text-[14px] font-normal leading-[24px] md:text-[16px] xl:text-[18px]">
              <a href="tel:+380981234567" className="block">
                +38 (098) 12 34 567
              </a>
              <a href="tel:+380731234567" className="block">
                +38 (073) 12 34 567
              </a>
            </div>
            <p className="text-white text-[12px] font-extralight leading-[20px] pt-[2px] xl:leading-[24px]">
              Phone number
            </p>
          </li>
          <li className="flex justify-start ml-[16px] gap-[20px] pb-[26px] items-center md:ml-[34px] md:pb-0 md:w-[242px] xl:w-auto xl:ml-[83px] xl:mb-[124px]">
            <a
              href="mailto:support@carptravel.com"
              className="text-white text-[14px] font-normal leading-[24px] md:text-[16px] xl:text-[18px]"
            >
              support@carptravel.com
            </a>
            <p className="text-white text-[12px] font-extralight leading-[20px] pt-[2px] xl:leading-[24px] ">
              E-mail
            </p>
          </li>
          <li className="flex justify-end mr-[20px] gap-[20px] items-start md:justify-start md:mr-0 md:w-[288px] md:ml-auto xl:flex-row-reverse xl:w-auto xl:ml-[208px]">
            <p className="text-white text-[12px] font-extralight leading-[20px] pt-[2px] xl:leading-[24px]">
              Follow us
            </p>
            <ul>
              <li>
                <a
                  href="https://uk-ua.facebook.com/"
                  className="text-white text-[14px] font-normal leading-[24px] md:text-[16px] xl:text-[18px] hover:underline"
                >
                  facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  className="text-white text-[14px] font-normal leading-[24px] md:text-[16px] xl:text-[18px] hover:underline"
                >
                  instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  className="text-white text-[14px] font-normal leading-[24px] md:text-[16px] xl:text-[18px] hover:underline"
                >
                  youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/uk-UA/"
                  className="text-white text-[14px] font-normal leading-[24px] md:text-[16px] xl:text-[18px] hover:underline"
                >
                  tiktok
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contacts;
