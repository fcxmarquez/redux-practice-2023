import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { pokemonsReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { logger } from "@/middlewares";

const composeEnhancers = compose(devToolsEnhancer(), applyMiddleware(logger));

const store = createStore(pokemonsReducer, composeEnhancers);

export type AppDispatch = typeof store.dispatch;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
