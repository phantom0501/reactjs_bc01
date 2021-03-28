import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/GioHangReducer";
import { gameXucXacReducers } from "./reducers/GameXucXacReducer";

const rootReducer = combineReducers({
  gioHangReducer: gioHangReducer,
  gameXucXacReducers: gameXucXacReducers,
});

export const store = createStore(rootReducer);
