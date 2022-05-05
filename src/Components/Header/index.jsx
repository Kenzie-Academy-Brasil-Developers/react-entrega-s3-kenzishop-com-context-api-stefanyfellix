import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { CartContext } from "../../Providers/CartProvider";
import {
  ButtonContainer,
  Buttons,
  Cart,
  CartButton,
  HeaderStyled,
} from "./styles";

const Header = () => {
  const history = useHistory();
  const { productsCart } = useContext(CartContext);

  return (
    <>
      <HeaderStyled>
        <h1>KenzieShop</h1>
        <ButtonContainer>
          <CartButton>
            {productsCart.length > 0 ? (
              <span>{productsCart.length}</span>
            ) : null}
            <Buttons onClick={() => history.push("/carrinho")}>
              <AiOutlineShoppingCart className="SVG" />
              Carrinho
            </Buttons>
          </CartButton>
          <Buttons>
            <IoMdExit />
            Entrar
          </Buttons>
        </ButtonContainer>
      </HeaderStyled>
    </>
  );
};

export default Header;
