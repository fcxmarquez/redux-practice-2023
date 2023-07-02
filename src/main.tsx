import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initialStateType, pokemonsReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import {
  AnyAction,
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { logger } from "@/middlewares";
import thunk, { ThunkDispatch } from "redux-thunk";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(pokemonsReducer, composeEnhancers);

export type AppDispatch = ThunkDispatch<initialStateType, unknown, AnyAction>;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
