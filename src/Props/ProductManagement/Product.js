import React, { Component } from "react";

export default class Product extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          height={348}
          src={product.hinhAnh}
          alt={product.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{product.tenSP}</h4>
          <p className="card-text">{product.giaBan + " vnd"}</p>
          <button
            className="btn btn-success mr-3"
            onClick={() => this.props.handleBtnDetail(product)}
          >
            Xem chi tiết
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.props.handleAddProductCart(product)}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
