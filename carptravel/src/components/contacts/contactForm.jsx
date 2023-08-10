"use client";

import { useForm } from "react-hook-form";
import { IncorrectIcon } from "../svgs/incorrect";

const ContactForm = () => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex md:gap-[20px] xl:flex-col">
        <div className="xl:flex xl:gap-[20px]">
          <div className={errors.name ? "md:mb-[4px]" : "md:mb-[28px]"}>
            <label
              for="name"
              className={
                errors.name
                  ? "mb-[4px] text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-incorrect"
                  : "mb-[4px] text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-white"
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
                  ? "text-incorrect text-[13px] font-extralight, leading-[24px] block  bg-backgroundInput w-[280px] pl-[8px] placeholder:text-white200 placeholder:text-[13px] placeholder:font-[200] placeholder:leading-[24px] focus:border-none md:w-[221px] xl:w-[293px]"
                  : "text-white text-[13px] font-extralight, leading-[24px] block  bg-backgroundInput w-[280px] pl-[8px] placeholder:text-white200 placeholder:text-[13px] placeholder:font-[200] placeholder:leading-[24px] md:w-[221px] xl:w-[293px]"
              }
              {...register("name", {
                required: true,
                pattern: /^[A-Za-z]+$/,
              })}
            />
            {errors.name && (
              <div className="flex justify-end items-center gap-[4px]">
                <IncorrectIcon className="w-[18px] h-[18px]" />
                <p className="text-incorrect text-[12px] font-extralight leading-[24px] tracking-[2.4px]">
                  Incorrect name
                </p>
              </div>
            )}
          </div>
          <div>
            <label
              for="email"
              className={
                errors.email
                  ? "mb-[4px] text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-incorrect"
                  : "mb-[4px] text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-white"
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
                  ? "text-incorrect text-[13px] font-[200], leading-[24px] block  bg-backgroundInput w-[280px] pl-[8px] placeholder:text-white200 placeholder:text-[13px] placeholder:font-[200] placeholder:leading-[24px] focus:border-none md:w-[221px] xl:w-[293px]"
                  : "text-white text-[13px] font-[200], leading-[24px] block  bg-backgroundInput w-[280px] pl-[8px] placeholder:text-white200 placeholder:text-[13px] placeholder:font-[200] placeholder:leading-[24px] md:w-[221px] xl:w-[293px]"
              }
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
            {errors.email && (
              <div className="flex justify-end items-center gap-[4px]">
                <IncorrectIcon className="w-[18px] h-[18px]" />
                <p className="text-incorrect text-[12px] font-extralight leading-[24px] tracking-[2.4px]">
                  Incorrect email
                </p>
              </div>
            )}
          </div>
        </div>
        <div
          className={
            errors.name || errors.email ? "xl:mt-[16px]" : "xl:mt-[40px]"
          }
        >
          <label
            for="subject"
            className="mb-[4px] text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-white"
          >
            Message
          </label>
          <textarea
            id="subject"
            name="subject"
            className="w-[280px] h-[192px] block bg-backgroundInput mb-[16px] md:w-[463px] xl:w-[607px] xl:h-[174px]"
          ></textarea>
        </div>
      </div>
      <input
        type="submit"
        value="Send"
        className="block ml-auto text-center text-[30px] font-medium text-white uppercase xl:text-[32px]"
      />
    </form>
  );
};

export default ContactForm;
