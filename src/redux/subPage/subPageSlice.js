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
      console.log("to open");
    },
    close: (state) => {
      console.log("to close");
    },
  },
});

export const { open, close } = subPageSlice.actions;

export default subPageSlice.reducer;
