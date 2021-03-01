import React, { Component } from "react";

export default class Product extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="bg-light">
        <img
          className="card-img-top"
          src={product.hinhAnh}
          alt={product.tenSP}
          style={{ maxWidth: "100%", height: 400 }}
        />

        <div className="card-body text-center">
          <h4 className="card-title text-center">{product.tenSP}</h4>
          <p className="card-text">{product.gia + "$"}</p>
          <a href="#" className="btn btn-primary mr-3">
            Detail
          </a>
          <a href="#" className="btn btn-danger">
            Cart
          </a>
        </div>
      </div>
    );
  }
}
