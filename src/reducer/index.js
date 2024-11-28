import { combineReducers } from "@reduxjs/toolkit";

import workReducer from "../slices/workcontrol";

const rootReducer = combineReducers({
  workprogress: workReducer,
});

export default rootReducer;
