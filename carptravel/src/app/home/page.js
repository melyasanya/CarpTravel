import Career from "@/components/career/career";
import Gallery from "@/components/gallery/gallery";
import Contacts from "../../components/contacts/contacts";
import Main from "../../components/main/main";
import Services from "../../components/services/services";

const HomePage = () => {
  return (
    <div className="container ">
      <Main />
      <Services />
      <Career />
      <Gallery />
      <Contacts />
    </div>
  );
};

export default HomePage;
