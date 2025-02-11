import { useContext, useEffect, useState, createContext } from "react";

const CartContext = createContext({});

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
const [cartProducts, setCartProducts] = useState([]);

const putProductInCart = (product) => {
  const cartIndex = cartProducts.findIndex( (prd) => prd.id === product.id);
  
  let newProductsInCart = cartProducts;

  if (cartIndex >= 0) {
    newProductsInCart[cartIndex].quantity = 
    newProductsInCart[cartIndex].quantity + 1;

    setCartProducts(newProductsInCart);

  } else {
    product.quantity = 1;
    newProductsInCart = [...cartProducts, product];
    setCartProducts(newProductsInCart);
  }

  updateLocalStorage(newProductsInCart);
};



const clearCart = () => {
  setCartProducts([]);
  updateLocalStorage([]);
 
};

const removeProductFromCart = (productId) => {
  const newCart = cartProducts.filter((prd) => prd.id !== productId);

  setCartProducts(newCart);
  updateLocalStorage(newCart);
};

const increaseProductQuantity = (productId) => {
  const newCart = cartProducts.map((prd) => {
    return prd.id === productId
      ? { ...prd, quantity: prd.quantity + 1 }
      : prd;
  });

  setCartProducts(newCart);
  updateLocalStorage(newCart);
};

const decreaseProductQuantity = (productId) => {
  const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

  if (cartProducts[cartIndex].quantity > 1) {
    const newCart = cartProducts.map((prd) => {
      return prd.id === productId
        ? { ...prd, quantity: prd.quantity - 1 }
        : prd;
    });

    setCartProducts(newCart);
    updateLocalStorage(newCart);

  } else {
    removeProductFromCart(productId);
  };
  
};
const updateLocalStorage = (products) => {
  localStorage.setItem('DevBurger:cartInfo', JSON.stringify(products));
}
useEffect(() => {
  const clientCardData = localStorage.getItem('DevBurger:cartInfo');

  if (clientCardData) {
    setCartProducts(JSON.parse(clientCardData));
  }
}, []);

  return (
    <CartContext.Provider value={{ 
        cartProducts, 
        putProductInCart,
        clearCart,
        removeProductFromCart,
        increaseProductQuantity, 
        decreaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>

  );
};

/**
 * A custom React hook that provides access to the cart context.
 * @returns {Object} An object containing the cart-related state and functions.
 */
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('must be a valid context');
  }

  return context;
}
  