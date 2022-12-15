import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  UserProvider,
  ProductsProvider,
  CartProvider,
} from "./export/exporter";

import "./index.scss";
import App from "./App";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
