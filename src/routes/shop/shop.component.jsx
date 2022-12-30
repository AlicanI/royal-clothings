import { Route, Routes } from "react-router-dom";
import { CategoriesPreview, Category } from "../../export/exporter";
import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
