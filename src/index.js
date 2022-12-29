import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  UserProvider,
  CategoriesProvider,
  CartProvider,
} from "./export/exporter";

import "./index.scss";
import App from "./App";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
