import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
};

const catSlice = createSlice({
  name: "catReducer",
  initialState,
  reducers: {
    fetchData: (state) => {
      state.loading = true;
    },
    setData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    errorInApi: (state) => {
      state.loading = false;
    },
  },
});

export const { fetchData, setData, errorInApi } = catSlice.actions;

export default catSlice.reducer;
