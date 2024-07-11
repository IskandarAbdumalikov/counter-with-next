import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: +localStorage.getItem("counter") || 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("counter", String(state.value));
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("counter", String(state.value));
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      localStorage.setItem("counter", String(state.value));
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
