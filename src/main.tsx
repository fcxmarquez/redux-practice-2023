import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider, useDispatch } from "react-redux";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { ThunkDispatch, Action } from "@reduxjs/toolkit";
import { logger } from "@/middlewares";
import thunk from "redux-thunk";
import { rootReducer, RootState } from "@/reducers/rootReducer";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composeEnhancers);

export type AppDispatch = ThunkDispatch<RootState, void, Action>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
