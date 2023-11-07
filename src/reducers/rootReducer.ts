import { combineReducers } from "redux";
import dataReducer from "@/slices/dataSlice";
import uiReducer from "@/slices/uiSlice";

export const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any

export type RootState = ReturnType<typeof rootReducer>;
