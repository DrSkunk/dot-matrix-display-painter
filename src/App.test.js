import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, compose } from 'redux'
import { Provider } from "react-redux";
import IndexReducer from "./RootReducer";
/*eslint-disable */
const composeSetup =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/*eslint-enable */

const store = createStore(
  IndexReducer,
  composeSetup() // allows redux devtools to watch sagas
);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
