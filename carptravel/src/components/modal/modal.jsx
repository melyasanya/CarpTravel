const Modal = ({ handleModal }) => {
  return (
    <div className="absolute top-0 left-0 w-full  flex justify-center items-center bg-modalBackground backdrop-blur-[25px] z-10 ">
      <div className="relative w-[320px] h-full">
        <button
          className="absolute top-[43px] right-[20px] h-[17px] flex justify-center items-center"
          onClick={handleModal}
        >
          <span className="text-white text-[14px] font-normal tracking-[1.4px]">
            Close
          </span>
        </button>
        <ul className="flex flex-col justify-center items-center gap-[48px] my-[170px] text-white text-[18px] font-normal tracking-[1.8px]">
          <li className="h-[22px]">About</li>
          <li className="h-[22px]">Services</li>
          <li className="h-[22px]">Career</li>
          <li className="h-[22px]">Gallery</li>
          <li className="h-[22px]">Contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
