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
    <div className="bg-[url('../../public/Background-mobile.jpg')] h-full bg-no-repeat bg-cover px-5  pb-[56px]">
      {isModalOpen && <Modal handleModal={handleModal} />}
      <Header handleModal={handleModal} />
      <Hero />
    </div>
  );
};

export default Main;
