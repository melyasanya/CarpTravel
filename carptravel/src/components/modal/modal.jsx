import Navbar from "../navbar/navbar";

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
        <Navbar handleModal={handleModal}/>
      </div>
    </div>
  );
};

export default Modal;
