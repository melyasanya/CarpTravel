"use client";
import { useForm } from "react-hook-form";
import { IncorrectIcon } from "../svgs/incorrect";

const CareerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[url('../../public/Background-Career-mobile.jpg')] bg-center h-auto bg-no-repeat bg-cover px-[20px] py-[56px] md:bg-none md:p-0 md:translate-y-[91px] xl:translate-y-[0px]">
      <p className="text-white text-[14px] font-extralight leading-[20px] w-[179px]  ml-auto mb-[24px] md:w-[221px] md:text-left md:text-[13px] md:ml-0 xl:text-[18px] xl:leading-[24px] xl:w-[234px] xl:mb-[14px]">
        Don&rsquo;t miss your opportunity! <br /> Fill out the form right now
        and join our team!
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex md:gap-[20px] md:mb-[10px] xl:gap-[24px] xl:mb-0">
          <div className="">
            <div className="mb-[16px] relative xl:mb-[24px]">
              <label
                for="name"
                className={
                  errors.name
                    ? "mb-[4px] text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-incorrect xl:mb-[6px]"
                    : "mb-[4px] text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-white xl:mb-[6px]"
                }
              >
                Full name
              </label>
              <input
                type="text"
                id="name"
                name="fullname"
                placeholder="John Smith"
                className={
                  errors.name
                    ? "text-incorrect text-[13px] font-extralight, leading-[24px] block  bg-backgroundInput w-[280px] pl-[8px] placeholder:text-white200 placeholder:text-[13px] placeholder:font-[200] placeholder:leading-[24px] focus:border-none md:w-[221px] xl:w-[290px] xl:text-[20px] xl:h-[28px] placeholder:xl:text-[20px]"
                    : "text-white text-[13px] font-extralight, leading-[24px] block  bg-backgroundInput w-[280px] pl-[8px] placeholder:text-white200 placeholder:text-[13px] placeholder:font-[200] placeholder:leading-[24px] md:w-[221px] xl:w-[290px] xl:text-[20px] xl:h-[28px] placeholder:xl:text-[20px]"
                }
                {...register("name", {
                  required: true,
                  pattern: /^[A-Za-z]+$/,
                })}
              />
              {errors.name && (
                <div className="flex justify-end items-center gap-[4px] absolute left-[141px] md:left-[82px] xl:left-[151px]">
                  <IncorrectIcon className="w-[18px] h-[18px]" />
                  <p className="text-incorrect text-[12px] font-extralight leading-[24px] tracking-[2.4px]">
                    Incorrect name
                  </p>
                </div>
              )}
            </div>
            <div className="mb-[16px] relative xl:mb-[24px]">
              <label
                for="email"
                className={
                  errors.email
                    ? "mb-[4px] text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-incorrect xl:mb-[6px]"
                    : "mb-[4px] text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-white xl:mb-[6px]"
                }
              >
                E-mail
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="johnsmith@email.com"
                className={
                  errors.email
                    ? "text-incorrect text-[13px] font-[200], leading-[24px] block  bg-backgroundInput w-[280px] pl-[8px] placeholder:text-white200 placeholder:text-[13px] placeholder:font-[200] placeholder:leading-[24px] focus:border-none md:w-[221px] xl:w-[290px] xl:text-[20px] xl:h-[28px] placeholder:xl:text-[20px]"
                    : "text-white text-[13px] font-[200], leading-[24px] block  bg-backgroundInput w-[280px] pl-[8px] placeholder:text-white200 placeholder:text-[13px] placeholder:font-[200] placeholder:leading-[24px] md:w-[221px] xl:w-[290px] xl:text-[20px] xl:h-[28px] placeholder:xl:text-[20px]"
                }
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />
              {errors.email && (
                <div className="flex justify-end items-center gap-[4px] absolute left-[140px] md:left-[81px] xl:left-[150px]">
                  <IncorrectIcon className="w-[18px] h-[18px] " />
                  <p className="text-incorrect text-[12px] font-extralight leading-[24px] tracking-[2.4px]">
                    Incorrect email
                  </p>
                </div>
              )}
            </div>
            <div className="mb-[16px] xl:mb-[24px]">
              <label
                for="position"
                className="mb-[4px] text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-white xl:mb-[6px]"
              >
                Position
              </label>
              <input
                type="text"
                id="position"
                name="position"
                placeholder="Movie maker"
                className="text-white text-[13px] font-extralight, leading-[24px] block  bg-backgroundInput w-[280px] pl-[8px] placeholder:text-white200 placeholder:text-[13px] placeholder:font-[200] placeholder:leading-[24px] md:w-[221px] xl:w-[290px] xl:text-[20px] xl:h-[28px] placeholder:xl:text-[20px]"
                {...register("position", {
                  required: false,
                  pattern: /^[A-Za-z]+$/,
                })}
              />
            </div>
            <div className="mb-[16px] relative">
              <label
                for="phone"
                className={
                  errors.phone
                    ? "mb-[4px] text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-incorrect xl:mb-[6px]"
                    : "mb-[4px] text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-white xl:mb-[6px]"
                }
              >
                Phone
              </label>
              <input
                type="all"
                id="phone"
                name="phone"
                placeholder="+ 38 (097) 12 34 567"
                className={
                  errors.phone
                    ? "text-incorrect text-[13px] font-extralight, leading-[24px] block  bg-backgroundInput w-[280px] pl-[8px] placeholder:text-white200 placeholder:text-[13px] placeholder:font-[200] placeholder:leading-[24px] focus:border-none md:w-[221px] xl:w-[290px] xl:text-[20px] xl:h-[28px] placeholder:xl:text-[20px]"
                    : "text-white text-[13px] font-extralight, leading-[24px] block  bg-backgroundInput w-[280px] pl-[8px] placeholder:text-white200 placeholder:text-[13px] placeholder:font-[200] placeholder:leading-[24px] md:w-[221px] xl:w-[290px] xl:text-[20px] xl:h-[28px] placeholder:xl:text-[20px] "
                }
                {...register("phone", {
                  required: true,
                  pattern:
                    /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/,
                })}
              />
              {errors.phone && (
                <div className="flex justify-end items-center gap-[4px] absolute left-[134px] md:left-[75px] xl:left-[144px]">
                  <IncorrectIcon className="w-[18px] h-[18px] " />
                  <p className="text-incorrect text-[12px] font-extralight leading-[24px] tracking-[2.4px]">
                    Incorrect phone
                  </p>
                </div>
              )}
            </div>
          </div>
          <div>
            <label
              for="subject"
              className="mb-[4px] text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-white"
            >
              Message
            </label>
            <textarea
              id="subject"
              name="subject"
              className="w-[280px] h-[192px] block bg-backgroundInput mb-[16px] md:w-[221px] md:h-[228px] md:mb-0 xl:w-[292px] xl:h-[262px] xl:mb-[24px] xl:text-[20px]"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-start">
          <div
            className="flex flex-row-reverse gap-[8px] mb-[16px] md:justify-end
        "
          >
            <label
              for="checkbox"
              className="text-white w-[250px] text-[12px] font-extralight leading-[22px] md:w-[192px] xl:w-[258px] xl:leading-[24px]"
            >
              I confirm my consent to the processing of personal data.
            </label>
            <input
              type="checkbox"
              id="checkbox"
              className="w-[22px] h-[22px]"
            />
          </div>

          <input
            type="submit"
            value="Send"
            className="block ml-auto text-center text-[30px] font-medium text-white uppercase xl:text-[32px] "
          />
        </div>
      </form>
    </div>
  );
};

export default CareerForm;
