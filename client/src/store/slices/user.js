import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  errors: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setErrors: (state, { payload }) => {
      state.errors = payload;
    },
  },
});

export const { setUser, setErrors } = user.actions;
export const userInfo = (state) => state.user.user;
export const userErrors = (state) => state.user.errors;

export default user.reducer;
