import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);

  const addProductToCart = (item) => {
    setProductsCart([...productsCart, item]);
  };

  const removeProductFromCart = (item) => {
    const updatedList = productsCart.filter(
      (product) => product.id !== item.id
    );
    setProductsCart(updatedList);
  };

  return (
    <CartContext.Provider
      value={{ productsCart, addProductToCart, removeProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
