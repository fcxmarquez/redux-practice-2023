import { createSlice } from "@reduxjs/toolkit";
import { UiInitialState } from "@/reducers/ui";

const initialState: UiInitialState = {
  loading: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = uiSlice.actions;

export default uiSlice.reducer;
