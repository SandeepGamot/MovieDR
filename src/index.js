import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "../src/context/SearchContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  rootElement
);
