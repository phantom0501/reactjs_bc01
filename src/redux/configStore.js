import { combineReducers, createStore } from "redux";

const stateDefault = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Iphone",
      gia: 1000,
      hinhAnh: "./img/applePhone.jpg",
      soLuong: 1,
    },
  ],
};

const rootReducer = combineReducers({
  gioHangReducer: (state = stateDefault, action) => {
    return { ...state };
  },
  // state theo từng nghiệp vụ
});

export const store = createStore(rootReducer);
