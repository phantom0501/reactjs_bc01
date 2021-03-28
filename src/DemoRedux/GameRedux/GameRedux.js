import React, { Component } from "react";
import KetQuaXucXac from "./KetQuaXucXac";
import { connect } from "react-redux";
import XucXac from "./XucXac";
import "./GameXucXac.css";

class GameRedux extends Component {
  renderKetQua = () => {
    let tongDiem = this.props.mangXucXac.reduce((td, xucXac, index) => {
      return td + xucXac.diem;
    }, 0);
    if (tongDiem >= 11) {
      return (
        <h2 className="text-danger">
          Tổng điểm: <span className="text-primary">{tongDiem}</span> {"=>"} Tài
        </h2>
      );
    } else {
      return (
        <h2 className="text-danger">
          Tổng điểm: <span className="text-primary">{tongDiem}</span> {"=>"} Xỉu
        </h2>
      );
    }
  };
  render() {
    return (
      <div className="bgGameXucXac">
        <h1 className="py-4">Bài Tập Game Xúc Xắc</h1>
        <XucXac />
        {this.renderKetQua()}

        <KetQuaXucXac />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.gameXucXacReducers.mangXucXac,
  };
};

export default connect(mapStateToProps)(GameRedux);
