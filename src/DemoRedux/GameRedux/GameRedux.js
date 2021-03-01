import React, { Component } from "react";
import KetQuaXucXac from "./KetQuaXucXac";
import XucXac from "./XucXac";
import { styles } from "./GameXucXac.css";

export default class GameRedux extends Component {
  render() {
    return (
      <div className="bgGameXucXac">
        <h1>Bài Tập Game Xúc Xắc</h1>
        <XucXac />
        <KetQuaXucXac />
      </div>
    );
  }
}
