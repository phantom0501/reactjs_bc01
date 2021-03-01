import React, { Component } from "react";

export default class SanPhamRedux extends Component {
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

            <button onClick={() => {}} className="btn btn-danger ml-2">
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
