const stateDefault = {
  gioHang: [],
};

export const gioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      // Xử lý thay đổi state.gioHang trên redux
      // B1: sao chép giỏ hàng ra array mới
      const gioHangUpdate = [...state.gioHang];

      // B2: Kiểm tra action.spGioHang gửi lên từ component có trong state.gioHang chưa?
      let index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSP === action.spGioHang.maSP
      );

      if (index !== -1) {
        gioHangUpdate[index].soLuong++;
      } else {
        gioHangUpdate.push(action.spGioHang);
      }

      // B3: Cập nhật lại state.gioHang => bước này giống như this.setState tại component

      state.gioHang = gioHangUpdate;
      return { ...state };
    }

    case "THAY_DOI_SO_LUONG": {
      const gioHangUpdate = [...state.gioHang];
      let index = gioHangUpdate.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        gioHangUpdate[index].soLuong += action.soLuong;
      }

      // Cập nhật lại state
      state.gioHang = gioHangUpdate;

      return { ...state };
    }

    case "XOA_SAN_PHAM": {
      const gioHangUpdate = [...state.gioHang];
      let index = gioHangUpdate.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        gioHangUpdate.splice(index, 1);
      }

      state.gioHang = gioHangUpdate;
      return { ...state };
    }

    default:
  }

  return { ...state };
};
