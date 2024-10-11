import { combineReducers } from "@reduxjs/toolkit";

import exampleReducer from "./exampleReducer";
// Import more reducers

const rootReducer = combineReducers({
  auth: exampleReducer,
  // Add other slices/reducers here
});

export default rootReducer;
