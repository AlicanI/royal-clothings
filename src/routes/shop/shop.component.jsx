import { useContext } from "react";
import { ProductsContext, ProductCard } from "../../export/exporter";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map(({ id, name, imageUrl, price }) => {
        return (
          <ProductCard key={id} name={name} imageUrl={imageUrl} price={price} />
        );
      })}
    </div>
  );
};

export default Shop;
