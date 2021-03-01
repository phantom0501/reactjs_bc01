import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;

    return (
      <div>
        <div className="card text-left">
          <img
            className="card-img-top"
            style={{ height: 300 }}
            src={sanPham.hinhAnh}
            alt={sanPham.hinhAnh}
          />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.giaBan}</p>

            <button
              onClick={() => this.props.themGioHang(sanPham)}
              className="btn btn-danger ml-2"
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// Hàm dùng để lấy state từ redux về tạo thành props của component
const mapStateToProps = (state) => {
  return {};
};

// Hàm dùng để tạo ra props là hàm xử lý sự kiện đưa dữ liệu lên redux

const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      // Tạo ra spGioHang từ spClick
      const spGioHang = {
        ...sanPhamClick,
        soLuong: 1,
      };

      // Đưa dữ liệu lên redux store
      const action = {
        type: "THEM_GIO_HANG", // Thuộc tính bắt buộc khi gửi dữ liệu lên redux
        spGioHang: spGioHang,
      };

      // Dùng hàm dispatch đưa dữ liệu lên reducer (redux store)
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SanPhamRedux);
