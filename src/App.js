import { Routes, Route } from "react-router-dom";
import {
  Authentication,
  CheckoutPage,
  Home,
  Navigation,
  Shop,
} from "./export/exporter";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
