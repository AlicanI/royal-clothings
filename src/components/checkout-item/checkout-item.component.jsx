import { useContext } from "react";
import { CartContext } from "../../export/exporter";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, deleteItemToCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const increaseHandler = () => addItemToCart(cartItem);
  const decreaseHandler = () => deleteItemToCart(cartItem);
  const removeHandler = () => clearItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={decreaseHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={removeHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
