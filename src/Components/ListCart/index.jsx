import { useContext } from "react";
import { CartContext } from "../../Providers/CartProvider";
import { IoMdTrash } from "react-icons/io";
import { AddItens, EmptyCart, HeaderCart, LiCart, UlCart } from "./style";
import TotalPrice from "../TotalPrice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ListCart = () => {
  const { productsCart, removeProductFromCart } = useContext(CartContext);
  const history = useHistory();

  return (
    <>
      <HeaderCart>
        <p>Produto</p>
        <p>Valor</p>
      </HeaderCart>
      {productsCart.length === 0 ? (
        <EmptyCart>
          <h4>Carrinho vazio</h4>
          <AddItens onClick={() => history.push("/")}>Adicione itens</AddItens>
        </EmptyCart>
      ) : (
        <UlCart>
          {productsCart.map((product) => {
            return (
              <LiCart>
                <figure>
                  <img src={product.img} />
                </figure>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button onClick={() => removeProductFromCart(product)}>
                  <IoMdTrash />
                </button>
              </LiCart>
            );
          })}
        </UlCart>
      )}
      <TotalPrice />
    </>
  );
};

export default ListCart;
