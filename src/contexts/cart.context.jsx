import { createContext, useEffect, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //if found, increment quantity
  if (existingItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  // return new Array with  modified cartItems /new cart Item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const deleteCartItem = (cartItems, productToDelete) => {
  const existingItem = cartItems.find((cartItem) => {
    return cartItem.id === productToDelete.id;
  });

  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
  }

  if (existingItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToDelete.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  }
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  deleteItemToCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CART_ACTION_TYPES = {
  SET_CART_IS_OPEN: "SET_CART_IS_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_COUNT: "SET_CART_COUNT",
  SET_CART_TOTAL: "SET_CART_TOTAL",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_IS_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    case CART_ACTION_TYPES.SET_CART_COUNT:
      return {
        ...state,
        cartCount: payload,
      };
    case CART_ACTION_TYPES.SET_CART_TOTAL:
      return {
        ...state,
        cartTotal: payload,
      };

    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      throw new Error(`Something went wrong ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};
export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartCount, cartTotal, cartItems }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);
  const setIsCartOpen = (isOpen) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_IS_OPEN,
      payload: isOpen,
    });
  };

  const setCartItems = (items) => {
    dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: items });
  };

  const setCartCount = (count) => {
    dispatch({ type: CART_ACTION_TYPES.SET_CART_COUNT, payload: count });
  };

  const setCartTotal = (total) => {
    dispatch({ type: CART_ACTION_TYPES.SET_CART_TOTAL, payload: total });
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const deleteItemToCart = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    deleteItemToCart,
    clearItemFromCart,
    cartCount,
    setCartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
