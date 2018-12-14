import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import { createGlobalStyle } from "styled-components";

import "./reset.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 10px;
    max-width: 700px;
  }
`;

WebFont.load({
  google: {
    families: ["Poppins: 400,500,700", "PT Serif: 400,700]", "Roboto Mono"]
  }
});

const Root = (
  <>
    <GlobalStyle />
    <App />
  </>
);

ReactDOM.render(Root, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
