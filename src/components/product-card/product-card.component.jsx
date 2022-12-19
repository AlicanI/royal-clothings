import { useContext } from "react";
import { Button, CartContext } from "../../export/exporter";

import "./product-card.styles.scss";

const ProductCard = ({ id, name, imageUrl, price }) => {
  const { addItemToCart } = useContext(CartContext);
  const product = {
    id: id,
    name: name,
    imageUrl: imageUrl,
    price: price,
  };

  const fonksiyon = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={fonksiyon}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
