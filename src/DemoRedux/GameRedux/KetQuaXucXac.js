import React, { Component } from "react";

export default class KetQuaXucXac extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="display-4">
          Bạn chọn: <span className="text-success">Tài</span>
        </div>
        <div className="display-4">
          Số bàn thắng: <span className="text-success">5</span>
        </div>
        <div className="display-4">
          Số bàn chơi: <span className="text-success">10</span>
        </div>
      </div>
    );
  }
}
