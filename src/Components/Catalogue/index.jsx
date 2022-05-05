import { useContext } from "react";
import { ListProducts } from "../../ArrayProducts/index";
import { CartContext } from "../../Providers/CartProvider";
import { LiProducts, UlProducts } from "./style";

const Catalogue = () => {
  const { addProductToCart } = useContext(CartContext);
  return (
    <UlProducts>
      {ListProducts.map((product) => {
        return (
          <LiProducts>
            <figure>
              <img src={product.img} />
            </figure>
            <h3>{product.name}</h3>
            <span>{product.type}</span>
            <p>R${product.price}</p>
            <button onClick={() => addProductToCart(product)}>
              Adicionar ao carrinho
            </button>
          </LiProducts>
        );
      })}
    </UlProducts>
  );
};

export default Catalogue;
