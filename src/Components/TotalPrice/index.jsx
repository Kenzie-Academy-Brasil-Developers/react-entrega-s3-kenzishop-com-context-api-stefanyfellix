import { useContext } from "react";
import { CartContext } from "../../Providers/CartProvider";
import { Container } from "./styles";

const TotalPrice = () => {
  const { productsCart } = useContext(CartContext);
  return (
    <Container>
      <p>Total:</p>
      <p>
        {productsCart
          .reduce((valorAnterior, valorAtual) => {
            const total = valorAtual.price + valorAnterior;
            return total;
          }, 0)
          .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </p>
    </Container>
  );
};

export default TotalPrice;
