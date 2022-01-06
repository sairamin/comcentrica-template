import { configureStore } from "@reduxjs/toolkit";

import { templateReducer } from "../pages/templates/redux/templateSlice";

const store = configureStore({
  reducer: {
    templates: templateReducer,
  },
});

export default store;
