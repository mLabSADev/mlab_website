import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  state: false,
};

export const subPageSlice = createSlice({
  name: "subPage",
  initialState,
  reducers: {
    open: (state) => {
    },
    close: (state) => {
    },
  },
});

export const { open, close } = subPageSlice.actions;

export default subPageSlice.reducer;
