import { Link } from "react-router-dom";
import { ProductCard } from "../../export/exporter";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return (
              <ProductCard key={product.id} title={title} product={product} />
            );
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
