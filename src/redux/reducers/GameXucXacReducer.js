const stateDefault = {
  banChon: "Tài",
  soBanThang: 0,
  tongSoBanChoi: 0,
  mangXucXac: [
    { diem: 1, hinhAnh: "./img/1.png" },
    { diem: 2, hinhAnh: "./img/2.png" },
    { diem: 3, hinhAnh: "./img/3.png" },
  ],
};

export const gameXucXacReducers = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_CA_CUOC": {
      state.banChon = action.banChon;

      return { ...state };
    }

    case "PLAY_GAME": {
      let mangXXNN = [];
      for (let i = 0; i < 3; i++) {
        // Tạo ra số ngẫu nhiên
        let soDiemNgauNhien = Math.floor(Math.random() * 6) + 1;
        // Tạo ra 3 object ngẫu nhiên
        let xxNN = {
          diem: soDiemNgauNhien,
          hinhAnh: `./img/${soDiemNgauNhien}.png`,
        };

        mangXXNN.push(xxNN);
      }

      state.mangXucXac = mangXXNN;

      return { ...state };
    }

    case "END_GAME": {
      state.tongSoBanChoi++;
      let mangXXNN = [];
      for (let i = 0; i < 3; i++) {
        // Tạo ra số ngẫu nhiên
        let soDiemNgauNhien = Math.floor(Math.random() * 6) + 1;
        // Tạo ra 3 object ngẫu nhiên
        let xxNN = {
          diem: soDiemNgauNhien,
          hinhAnh: `./img/${soDiemNgauNhien}.png`,
        };

        mangXXNN.push(xxNN);
      }

      state.mangXucXac = mangXXNN;

      let tongDiem = mangXXNN.reduce((td, xucXac, index) => {
        return (td += xucXac.diem);
      }, 0);

      if (
        (tongDiem >= 11 && state.banChon === "Tài") ||
        (tongDiem < 11 && state.banChon === "Xỉu")
      ) {
        state.soBanThang += 1;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
