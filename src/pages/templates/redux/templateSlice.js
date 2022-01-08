import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  items: [],
};

const templateSlice = createSlice({
  name: "templates",
  initialState: INITIAL_STATE,
  reducers: {
    addTemplate: (state, action) => {
      console.log(action)
      state.items.push(...action.payload);
    },
  },
});

const { addTemplate } = templateSlice.actions;
const templateReducer = templateSlice.reducer;

export { addTemplate, templateReducer };

export default templateSlice;
