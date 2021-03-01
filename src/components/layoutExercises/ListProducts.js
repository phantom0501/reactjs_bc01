import React, { Component } from "react";
import Product from "./Product";

export default class ListProducts extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "Black Berry",
      hinhAnh: "./img/sp_blackberry.png",
      gia: 1000,
    },
    { maSP: 2, tenSP: "Iphone X", hinhAnh: "./img/sp_iphoneX.png", gia: 2000 },
    { maSP: 3, tenSP: "Note 7", hinhAnh: "./img/sp_note7.png", gia: 3000 },
    { maSP: 3, tenSP: "Vivo 850", hinhAnh: "./img/sp_vivo850.png", gia: 3000 },
  ];

  renderProducts = () => {
    return this.mangSanPham.map((product, index) => {
      return (
        <div key={index} className="col-3">
          <Product product={product} />
        </div>
      );
    });
  };
  render() {
    return (
      <section id="list__products" className="bg-dark">
        <div className="container-fluid pt-5">
          <h1 class="text-white text-center mb-5">BEST SMARTPHONE</h1>
          <div className="row">{this.renderProducts()}</div>
        </div>
      </section>
    );
  }
}
