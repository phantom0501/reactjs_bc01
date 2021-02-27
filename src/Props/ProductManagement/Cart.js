import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    let { productCarts } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            {productCarts.length === 0 ? null : (
              <tr>
                <th>Mã Sản Phẩm</th>
                <th>Tên Sản Phẩm</th>
                <th>Hình Ảnh</th>
                <th>Giá Bán</th>
                <th>Số Lượng</th>
                <th>Thành tiền</th>
                <th></th>
              </tr>
            )}
          </thead>
          <tbody>
            {productCarts.length === 0 ? (
              <tr>
                <p className="text-danger">
                  Không có sản phẩm nào trong giỏ hàng.
                </p>
              </tr>
            ) : (
              productCarts.map((cartItem, index) => {
                return (
                  <tr key={index}>
                    <td>{cartItem.maSP}</td>
                    <td>{cartItem.tenSP}</td>
                    <td>
                      <img
                        src={cartItem.hinhAnh}
                        alt={cartItem.tenSP}
                        width={50}
                        height={50}
                      />
                    </td>
                    <td>{cartItem.giaBan + " vnd"}</td>
                    <td>
                      {cartItem.soLuong === 1 ? (
                        <button
                          className="btn btn-info py-0 px-2"
                          onClick={() =>
                            this.props.handleReductionQuantity(cartItem)
                          }
                          disabled
                        >
                          <span> - </span>
                        </button>
                      ) : (
                        <button
                          className="btn btn-info py-0 px-2"
                          onClick={() =>
                            this.props.handleReductionQuantity(cartItem)
                          }
                        >
                          <span> - </span>
                        </button>
                      )}
                      <span className="px-2">{cartItem.soLuong}</span>

                      <button
                        className="btn btn-info py-0 px-2"
                        onClick={() =>
                          this.props.handleIncreaseQuantity(cartItem)
                        }
                      >
                        <span> + </span>
                      </button>
                    </td>
                    <td>{cartItem.giaBan * cartItem.soLuong + " vnd"}</td>
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() => this.props.handleDeleteProduct(cartItem)}
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
