import React, { Component } from "react";
//Kết nối react component với redux store
import { connect } from "react-redux";

class GioHangRedux extends Component {
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            {this.props.gioHang.length === 0 ? null : (
              <tr>
                <th>Mã SP</th>
                <th>Tên SP</th>
                <th>Số lượng</th>
                <th>Giá</th>
                <th>Thành tiền</th>
                <th></th>
              </tr>
            )}
          </thead>

          <tbody>
            {this.props.gioHang.length === 0 ? (
              <tr>
                <td style={{ borderTop: "none" }}>
                  <h4 className="text-danger">
                    Không có sản phẩm nào. Tiếp tục mua sắm.
                  </h4>
                </td>
              </tr>
            ) : (
              this.props.gioHang.map((spGioHang, index) => {
                return (
                  <tr key={index}>
                    <td>{spGioHang.maSP}</td>
                    <td>{spGioHang.tenSP}</td>
                    <td>
                      {spGioHang.soLuong === 1 ? (
                        <button
                          onClick={() =>
                            this.props.thayDoiSoLuong(spGioHang.maSP, -1)
                          }
                          className="btn btn-primary py-0 px-2 mr-2"
                          disabled
                        >
                          -
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            this.props.thayDoiSoLuong(spGioHang.maSP, -1)
                          }
                          className="btn btn-primary py-0 px-2 mr-2"
                        >
                          -
                        </button>
                      )}

                      {spGioHang.soLuong}
                      <button
                        onClick={() =>
                          this.props.thayDoiSoLuong(spGioHang.maSP, 1)
                        }
                        className="btn btn-primary py-0 px-2 ml-2"
                      >
                        +
                      </button>
                    </td>
                    <td>{spGioHang.giaBan}</td>
                    <td>{spGioHang.giaBan * spGioHang.soLuong}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.props.xoaSanPham(spGioHang.maSP)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

//Hàm chuyển state trên redux trở thành props của component
//state đại diện cho rootReducer
const mapStateToProps = (state) => {
  //Tạo props từ state redux
  return {
    gioHang: state.gioHangReducer.gioHang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    thayDoiSoLuong: (maSP, soLuong) => {
      const action = {
        type: "THAY_DOI_SO_LUONG",
        maSP: maSP,
        soLuong: soLuong,
      };

      // Đưa action lên reducer
      dispatch(action);
    },

    xoaSanPham: (maSP) => {
      // Tạo ra action
      const action = {
        type: "XOA_SAN_PHAM",
        maSP: maSP,
      };

      dispatch(action);
    },
  };
};

//Kết nối giữa component và redux
const GioHangConnectRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(GioHangRedux);
export default GioHangConnectRedux;
