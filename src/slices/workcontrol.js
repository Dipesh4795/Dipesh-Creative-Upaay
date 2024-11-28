import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AllTasks: localStorage.getItem("AllTasks")
    ? JSON.parse(localStorage.getItem("AllTasks"))
    : [],
};

const workSlice = createSlice({
  name: "workprogress",
  initialState: initialState,
  reducers: {
    setAllTasks(state, value) {
      state.AllTasks = value.payload;
      localStorage.removeItem("AllTasks");
      localStorage.setItem("AllTasks", JSON.stringify(value.payload));
    },
  },
});

export const { setAllTasks } = workSlice.actions;

export default workSlice.reducer;
