import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { UserProvier } from "./contexts/user.context";
import "./index.scss";
import App from "./App";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvier>
        <App />
      </UserProvier>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
