import Contacts from "../../components/contacts/contacts";
import Main from "../../components/main/main";
import Services from "../../components/services/services";

const HomePage = () => {
  return (
    <div className="container ">
      <Main />
      <Services />
      <Contacts />
    </div>
  );
};

export default HomePage;
