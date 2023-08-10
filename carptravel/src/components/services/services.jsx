"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import DiamondIcon from "../diamondIcon/diamondIcon";

const Services = () => {
  const [offers, setOffers] = useState([]);
  const [activeId, setActiveId] = useState("1");
  const [activeOffer, setActiveOffer] = useState();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTabletAndDesktop = useMediaQuery({ query: "(min-width: 768px)" });

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

  return (
    <div
      className=" bg-[url('../../public/Offer-Background1-mobile.jpg')] md:bg-[url('../../public/Offer-Background-tablet.jpg')]"
      id="services"
    >
      <div className="pt-[54px] pb-[56px] px-[20px] md:px-[32px] md:py-[64px]">
        <div className="md:flex md:gap-[170px] md:mb-[36px]">
          <h3 className="text-white text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase mb-[24px] md:text-[67px] md:tracking-[-2.68px] md:leading-[1.15] md:mb-0">
            We <span className="font-medium">offer</span>
          </h3>
          <p className="text-white text-right text-[43px] font-thin mb-[16px] md:mb-0 md:text-[67px] md:leading-[78px]">
            {activeOffer ? activeOffer.id.toString().padStart(2, "0") : "01"}/
            <span className="text-white200">05</span>
          </p>
        </div>
        <div className="md:flex md:gap-[20px]">
          <Image
            src={
              activeOffer
                ? activeOffer.photo
                : "https://s3-alpha-sig.figma.com/img/d302/807c/53951605a38cef26e461075fac11bd7c?Expires=1692576000&Signature=is5iS0N2fXHuBf6nXIe2CWocaA2rfDH1AidyeMeeM7PqhHV0-XMGKUH-l2VyED3or~HsBSYNNHu3-ASbb5XIfJux57gA6nBCmDJQKjO2NG2Np5KyBgQc~6dSD5mvROCbCo7CXiCrPGy1cLZBHVcdbzWzn-E-eSVJmMxoiiuRo4wDKBjDtp3gmMx-aqRzoz-toBJhQuNiP1zchr067r7Iz~oHlL5GE49h3kZEmsHxoc4w2GkzbRdMjBqkG9nNBCN-Jd1Xvh6Ms0g-0L616mHpJqKExc9~EYziP5UNuw6lRc0wnhHzgQorMJBg8KABQjk6j9MW3zrYZBE9Zo6H-gkqHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            width={280}
            height={213}
            placeholder="blur"
            blurDataURL={
              activeOffer
                ? activeOffer.blurPhoto
                : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACTAMEDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAEDAgQF/8QAGRABAQEBAQEAAAAAAAAAAAAAAAERAhIT/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD5oioyoigogCiAqVKtc0HNcV1XFBx0z6adM+gZ9MumnTPoHFQqA7jvlnGnKjSOo4juCuoqRQAAezTXGrqMu9Ncaug701xq6K61NTU0Ftc2mubQLXFq2uLQTqs+q66rPqiuOqy6rvqsuqI5tNc2mqNJWkrGVpzQayu5WUruUV3KuuZV0HWjnQHq01n6PSMtNXWfo9CtNXWfo0GmprjT0Dq1LXN6c3oFtc2pa4tFOqz6q2s+qCdVj1XXXTMABRY75rNZcBvK7lYc9O50DWV1rKVdBpoz0Bv6PTH2voRt6X0w9L6Bt6PTL0ekGvo9MvR6FaekvTP0l6B3enF6c3pxegdddM+unPXTm3VC3UAAAAAFWdOQGs6X0yNBr6GWgrr2v0ZgjX6H0ZANva+2C6Db2e2Omg19pe2eoDu9ubdQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFwygguU80EF8mAguIAAAAAAAAAAAAAAAADXyeWuGMoz8nlpi4oz8nlphiqz8nlphgMvLm8tsSwGF5TG1jiwGYtiAAAAAAAAAAAALg9uGKMomGOgEwxQExMdCjjEsduaK4sc2NK4oMuo4a9M6ggCgAAAAACgrQgoD2KDCAAKAoIAJUoCua5oIM+nFAHICgAAAAoLBYAooAP//Z"
            }
            alt="What we offer"
            className="mb-[12px] w-[280px] h-[213px] md:mb-0 md:min-w-[463px] md:h-[370px]"
          />
          <div>
            {isMobile && (
              <p className="text-white text-right text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-[24px]">
                {activeOffer ? activeOffer.slogan : "Feel the adrenaline rush"}
              </p>
            )}
            <div className="flex flex-col justify-between h-[320px]">
              <ul className="text-white500 text-[20px] font-extralight leading-[17px] uppercase flex flex-col gap-[16px] md:text-[22px] md:leading-[18px] md:mb-[24px]">
                <li className="flex items-center justify-start gap-[8px]">
                  {!activeOffer ? (
                    <DiamondIcon />
                  ) : activeOffer.id === 1 ? (
                    <DiamondIcon />
                  ) : (
                    ""
                  )}
                  <a
                    id="1"
                    className={
                      !activeOffer
                        ? "text-white font-medium"
                        : activeOffer.id === 1
                        ? "text-white font-medium"
                        : ""
                    }
                    onClick={handleOfferClick}
                  >
                    ATVs traveling
                  </a>
                </li>
                <li className="flex items-center justify-start gap-[8px]">
                  {activeOffer && activeOffer.id === 2 ? <DiamondIcon /> : ""}
                  <a
                    id="2"
                    onClick={handleOfferClick}
                    className={
                      activeOffer && activeOffer.id === 2
                        ? "text-white font-medium"
                        : ""
                    }
                  >
                    Rock climbing
                  </a>
                </li>
                <li className="flex items-center justify-start gap-[8px]">
                  {activeOffer && activeOffer.id === 3 ? <DiamondIcon /> : ""}
                  <a
                    id="3"
                    onClick={handleOfferClick}
                    className={
                      activeOffer && activeOffer.id === 3
                        ? "text-white font-medium"
                        : ""
                    }
                  >
                    Hot air
                    <br />
                    ballooning
                  </a>
                </li>
                <li className="flex items-center justify-start gap-[8px]">
                  {activeOffer && activeOffer.id === 4 ? <DiamondIcon /> : ""}
                  <a
                    id="4"
                    onClick={handleOfferClick}
                    className={
                      activeOffer && activeOffer.id === 4
                        ? "text-white font-medium"
                        : ""
                    }
                  >
                    Skydiving
                  </a>
                </li>
                <li className="flex items-center justify-start gap-[8px]">
                  {activeOffer && activeOffer.id === 5 ? <DiamondIcon /> : ""}
                  <a
                    id="5"
                    onClick={handleOfferClick}
                    className={
                      activeOffer && activeOffer.id === 5
                        ? "text-white font-medium"
                        : ""
                    }
                  >
                    Rafting
                  </a>
                </li>
              </ul>
              {isTabletAndDesktop && (
                <p className="text-white text-right text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-[24px] md:mb-[34px] md:text-left">
                  {activeOffer
                    ? activeOffer.slogan
                    : "Feel the adrenaline rush"}
                </p>
              )}
              <p className="text-white text-[14px] font-extralight leading-[20px] md:text-[13px]">
                {activeOffer
                  ? activeOffer.description
                  : "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
