import Header from "../../Components/Header";
import ListCart from "../../Components/ListCart";

import { AiFillHome } from "react-icons/ai";

import { ButtonHome, Main } from "./styles";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import { CartContext } from "../../Providers/CartProvider";

const CartPage = () => {
  const history = useHistory();
  return (
    <>
      <div>
        <Header />
      </div>
      <Main>
        <ListCart />
        <ButtonHome>
          <button onClick={() => history.push("/")}>
            <AiFillHome />
            Home
          </button>
        </ButtonHome>
      </Main>
    </>
  );
};

export default CartPage;
