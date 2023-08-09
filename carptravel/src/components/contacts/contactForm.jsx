const ContactForm = () => {
  return (
    <form>
      <label
        for="fname"
        className="mb-[4px] text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-white"
      >
        Full name
      </label>
      <input
        type="text"
        id="fname"
        name="fullname"
        placeholder="John Smith"
        className="block mb-[24px] bg-backgroundInput w-[280px] pl-[8px] placeholder:text-white200 placeholder:text-[13px] placeholder:font-extralight placeholder:leading-[24px] "
      />

      <label
        for="email"
        className="mb-[4px] text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-white"
      >
        E-mail
      </label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="johnsmith@email.com"
        className="block mb-[24px] bg-backgroundInput w-[280px] pl-[8px] placeholder:text-white200 placeholder:text-[13px] placeholder:font-extralight placeholder:leading-[24px] "
      />

      <label
        for="subject"
        className="mb-[4px] text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-white"
      >
        Message
      </label>
      <textarea
        id="subject"
        name="subject"
        className="w-[280px] h-[192px] block bg-backgroundInput mb-[16px]"
      ></textarea>

      <input
        type="submit"
        value="Send"
        className="block ml-auto text-center text-[30px] font-medium text-white uppercase"
      />
    </form>
  );
};

export default ContactForm;
