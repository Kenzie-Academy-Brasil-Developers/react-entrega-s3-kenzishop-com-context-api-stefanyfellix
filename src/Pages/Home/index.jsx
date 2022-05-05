import Catalogue from "../../Components/Catalogue";
import Header from "../../Components/Header/index";
import { Main } from "./styles";

const HomePage = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Main>
        <Catalogue />
      </Main>
    </>
  );
};

export default HomePage;
