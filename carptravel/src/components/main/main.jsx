"use client";

import { useState } from "react";
import Modal from "../modal/modal";

const { default: Header } = require("../header/header");
const { default: Hero } = require("../hero/hero");

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  };

  return (
    <div className="bg-[url('../../public/Background-mobile.jpg')] h-full bg-no-repeat bg-cover px-5  pb-[56px] md:bg-[url('../../public/Background-Hero-tablet.jpg')] md:pb-[64px] md:px-[32px]">
      {isModalOpen && <Modal handleModal={handleModal} />}
      <Header handleModal={handleModal} />
      <Hero />
    </div>
  );
};

export default Main;
