import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/GioHangReducer";

const rootReducer = combineReducers({
  gioHangReducer: gioHangReducer,
});

export const store = createStore(rootReducer);
