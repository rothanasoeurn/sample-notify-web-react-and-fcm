import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./route";
import * as serviceWorker from "./serviceWorker";
import "mobx-react-lite/batchingForReactDom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
