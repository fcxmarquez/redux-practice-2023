import { Middleware, Dispatch, AnyAction } from "redux";
import { CombinedInitialState } from "@/reducers/rootReducer";

export const logger: Middleware<
  Record<string, never>,
  CombinedInitialState,
  Dispatch<AnyAction>
> = () => (next) => (action) => {
  console.log(action);
  next(action);
};

export const featuring: Middleware<
  Record<string, never>,
  CombinedInitialState,
  Dispatch<AnyAction>
> = () => (next) => (actionInfo) => {
  const featured = [{ name: "eddie" }, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updatedActionInfo);
};
