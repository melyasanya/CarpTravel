const { default: Header } = require("../header/header");
const { default: Hero } = require("../hero/hero");

const Main = () => {
  return (
    <div className="bg-[url('../../public/Background-Hero.jpg')] h-screen bg-no-repeat bg-cover px-5">
      <Header />
      <Hero />
    </div>
  );
};

export default Main;
