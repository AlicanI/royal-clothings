import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item-container">
      <img src={imageUrl} alt="" />
      <h1>{name}</h1>
      <span>{quantity}</span>
      <span>{price}</span>
    </div>
  );
};

export default CheckoutItem;
