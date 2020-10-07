import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { reducer } from "./store/reducers";

import App from "./App";

// implementation of redux-thunk
const ownThunk = (store) => (next) => (action) => {
  if (typeof action === "object") {
    next(action);
  } else if (typeof action === "function") {
    // this means we're trying to do some asychronous operation
    // DON"T CALL NEXT!!!!
    action(store.dispatch);
  }
};

// add applyMiddleware to add middleware to our app
const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
