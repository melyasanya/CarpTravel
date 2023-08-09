"use client";
import Image from "next/image";

import photo from "../../../public/Offer-Photo-mobile.jpg";

import { useEffect, useState } from "react";

const Services = () => {
  const [offers, setOffers] = useState([]);
  const [activeId, setActiveId] = useState("1");
  const [activeOffer, setActiveOffer] = useState();

  useEffect(() => {
    fetch("/api/offer")
      .then((x) => x.json())
      .then(setOffers);
  }, []);

  const handleOfferClick = (e) => {
    setActiveId(Number(e.target.id));
  };

  useEffect(() => {
    const active = offers.find((el) => el.id === activeId);
    setActiveOffer(active);
  }, [activeId]);

  console.log(activeId);
  console.log(activeOffer);

  return (
    <div className="bg-background bg-[url('../../public/Offer-Background1-mobile.jpg')] w-full relative ">
      <div className="pt-[54px] pb-[56px] px-[20px] ">
        <h3 className="text-white text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase mb-[24px]">
          We <span className="font-medium">offer</span>
        </h3>
        <p className="text-white text-right text-[43px] font-thin mb-[16px]">
          {activeOffer ? activeOffer.id.toString().padStart(2, "0") : "01"}/
          <span className="text-white200">05</span>
        </p>
        <Image
          src={photo}
          width={280}
          height={213}
          alt="What we offer"
          className="mb-[12px]"
        />
        <p className="text-white text-right text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-[24px]">
          {activeOffer ? activeOffer.slogan : "Feel the adrenaline rush"}
        </p>
        <div className="flex flex-col justify-between h-[320px]">
          <ul className="text-white500 text-[20px] font-medium leading-[17px] uppercase flex flex-col gap-[16px]">
            <li>
              <a
                id="1"
                className={
                  !activeOffer
                    ? "text-white"
                    : activeOffer.id === 1
                    ? "text-white"
                    : ""
                }
                onClick={handleOfferClick}
              >
                ATVs traveling
              </a>
            </li>
            <li>
              <a
                id="2"
                onClick={handleOfferClick}
                className={
                  activeOffer && activeOffer.id === 2 ? "text-white" : ""
                }
              >
                Rock climbing
              </a>
            </li>
            <li>
              <a
                id="3"
                onClick={handleOfferClick}
                className={
                  activeOffer && activeOffer.id === 3 ? "text-white" : ""
                }
              >
                Hot air
                <br />
                ballooning
              </a>
            </li>
            <li>
              <a
                id="4"
                onClick={handleOfferClick}
                className={
                  activeOffer && activeOffer.id === 4 ? "text-white" : ""
                }
              >
                Skydiving
              </a>
            </li>
            <li>
              <a
                id="5"
                onClick={handleOfferClick}
                className={
                  activeOffer && activeOffer.id === 5 ? "text-white" : ""
                }
              >
                Rafting
              </a>
            </li>
          </ul>
          <p className="text-white text-[14px] font-extralight leading-[20px]">
            {activeOffer
              ? activeOffer.description
              : "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
