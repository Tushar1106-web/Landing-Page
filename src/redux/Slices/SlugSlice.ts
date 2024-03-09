import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
    username: string;
};

const initialState: CounterState = {
  username: ''
};


export const SlugSlice = createSlice({
  name: 'slug',
  initialState,
  reducers: {
    slugData: (state, action) => {
      state.username = action.payload;
    }
  }
});

export default SlugSlice.reducer;

export const { slugData } = SlugSlice.actions;
