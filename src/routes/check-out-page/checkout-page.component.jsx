import { useContext } from "react";
import { CartContext, CheckoutItem } from "../../export/exporter";

import "./checkout-page.styles.scss";

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CheckoutPage;
