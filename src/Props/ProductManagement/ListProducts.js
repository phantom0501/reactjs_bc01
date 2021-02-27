import React, { Component } from "react";
import Cart from "./Cart";
import Product from "./Product";

export default class ListProducts extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    productDetail: "",
    productCarts: [],
  };

  renderProducts = () => {
    return this.mangSanPham.map((product, index) => {
      return (
        <div key={index} className="col-4">
          <Product
            product={product}
            handleBtnDetail={this.handleBtnDetail}
            handleAddProductCart={this.handleAddProductCart}
          />
        </div>
      );
    });
  };

  handleBtnDetail = (product) => {
    this.setState({
      productDetail: product,
    });
  };

  handleAddProductCart = (productCart) => {
    let productCartNew = {
      maSP: productCart.maSP,
      tenSP: productCart.tenSP,
      giaBan: productCart.giaBan,
      hinhAnh: productCart.hinhAnh,
      soLuong: 1,
    };

    let productUpdate = [...this.state.productCarts];
    let indexProductCart = productUpdate.findIndex(
      (product) => product.maSP === productCart.maSP
    );

    if (indexProductCart !== -1) {
      productUpdate[indexProductCart].soLuong++;
    } else {
      productUpdate.push(productCartNew);
    }

    this.setState({ productCarts: productUpdate });
  };

  handleDeleteProduct = (product) => {
    let productCartClone = [...this.state.productCarts];
    let findIndexDelete = productCartClone.findIndex(
      (productItem) => productItem.maSP === product.maSP
    );

    if (findIndexDelete !== -1) {
      productCartClone.splice(findIndexDelete, 1);
    }

    this.setState({ productCarts: productCartClone });
  };

  handleReductionQuantity = (quantity) => {
    let productCartClone = [...this.state.productCarts];
    let findIndexQuantity = productCartClone.findIndex(
      (quantitys) => quantitys.maSP === quantity.maSP
    );

    if (findIndexQuantity !== -1) {
      productCartClone[findIndexQuantity].soLuong--;
    }

    this.setState({ productCarts: productCartClone });
  };

  handleIncreaseQuantity = (quantity) => {
    let productCartClone = [...this.state.productCarts];
    let findIndexQuantity = productCartClone.findIndex(
      (quantitys) => quantitys.maSP === quantity.maSP
    );

    if (findIndexQuantity !== -1) {
      productCartClone[findIndexQuantity].soLuong++;
    }

    this.setState({ productCarts: productCartClone });
  };

  render() {
    let {
      tenSP,
      manHinh,
      heDieuHanh,
      cameraSau,
      cameraTruoc,
      ram,
      rom,
      hinhAnh,
    } = this.state.productDetail;
    return (
      <div id="list__products" className="mt-5">
        <h2 className="text-left">Giỏ hàng</h2>

        <Cart
          productCarts={this.state.productCarts}
          handleDeleteProduct={this.handleDeleteProduct}
          handleReductionQuantity={this.handleReductionQuantity}
          handleIncreaseQuantity={this.handleIncreaseQuantity}
        />

        <hr />

        <div className="py-4">
          <h2>Danh Sách Sản Phẩm</h2>
          <div className="row py-4">{this.renderProducts()}</div>
        </div>
        <div className="row py-5">
          <div className="col-4">
            <h2>{tenSP}</h2>
            <div className="productDetail__img" width={100} height={300}>
              <img
                src={hinhAnh}
                style={{ width: "100%", height: "100%" }}
                alt={tenSP}
              />
            </div>
          </div>
          <div className="col-8">
            <table className="table">
              {this.state.productDetail === "" ? null : (
                <thead>
                  <tr>
                    <th>Tên Sản Phẩm</th>
                    <th>{tenSP}</th>
                  </tr>
                  <tr>
                    <th>Màn Hình</th>
                    <th>{manHinh}</th>
                  </tr>
                  <tr>
                    <th>Hệ Điều Hành</th>
                    <th>{heDieuHanh}</th>
                  </tr>
                  <tr>
                    <th>Camera Sau</th>
                    <th>{cameraSau}</th>
                  </tr>
                  <tr>
                    <th>Camera Trước</th>
                    <th>{cameraTruoc}</th>
                  </tr>
                  <tr>
                    <th>RAM</th>
                    <th>{ram}</th>
                  </tr>
                  <tr>
                    <th>ROM</th>
                    <th>{rom}</th>
                  </tr>
                </thead>
              )}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
