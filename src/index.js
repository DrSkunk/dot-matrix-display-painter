import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// Redux Store
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

import { saveState, loadState } from "./localstorage";

import IndexReducer from "./RootReducer";
/*eslint-disable */
const composeSetup =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/*eslint-enable */

const persistedState = loadState();

const store = createStore(
  IndexReducer,
  persistedState,
  composeSetup() // allows redux devtools to watch sagas
);

store.subscribe(() => {
  saveState(store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
