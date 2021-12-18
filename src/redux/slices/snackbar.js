import { createSlice } from "@reduxjs/toolkit";

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: { show: false, msg: "Hello snackbar", color: "blue" },
  reducers: {
    showSnackbar: (state, { payload }) => {
      state.color = payload.color;
      state.msg = payload.msg;
      state.show = true;
    },
    closeSnackbar: (state) => {
      state.show = false;
    },
  },
});

export const { showSnackbar, closeSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
