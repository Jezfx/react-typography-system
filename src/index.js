import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

WebFont.load({
  google: {
    families: ["Poppins: 400,500,700", "PT Serif: 400,700]"]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
