import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon-styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const clickHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  // const arrayOfQuantities = cartItems.map((cartItem) => {
  //   return cartItem.quantity;
  // });
  // const sumOfQuantities = arrayOfQuantities.reduce((a, b) => {
  //   return a + b;
  // }, 0);

  return (
    <div className="cart-icon-container" onClick={clickHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
