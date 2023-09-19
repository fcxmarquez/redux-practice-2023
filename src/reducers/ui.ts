import { Actions } from "@/actions/action.type";
import { SET_LOADING } from "@/actions/types";
import { fromJS } from "immutable";

export type UiInitialState = {
  loading: boolean;
};

export const initialState = fromJS({
  // Immutable is not recommended actually
  loading: false,
});

export const uiReducer = (state = initialState, action: Actions): typeof initialState => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case SET_LOADING:
      return state.setIn(["loading"], action.payload);

    default:
      return state;
  }
};
