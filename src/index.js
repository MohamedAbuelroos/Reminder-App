import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
// import Reminders from "./Redux/ReducerOne";
import { allReducers } from "./Redux/ReducerOne";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export const store = legacy_createStore(allReducers,enhancer());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);
