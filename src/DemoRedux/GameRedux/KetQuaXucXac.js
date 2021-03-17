import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaXucXac extends Component {
  render() {
    let { banChon, soBanThang, tongSoBanChoi } = this.props;
    return (
      <div className="container text-center">
        <div className="display-4">
          Bạn chọn:
          <span className="text-success"> {banChon}</span>
        </div>
        <div className="display-4 py-2">
          Số bàn thắng: <span className="text-success">{soBanThang}</span>
        </div>
        <div className="display-4">
          Số bàn chơi: <span className="text-primary">{tongSoBanChoi}</span>
        </div>
        <button
          onClick={() => this.props.playGame()}
          // onClick={() => {
          //   const action = {
          //     type: "PLAY_GAME",
          //   };
          //   this.props.dispatch(action);
          // }}
          className="btn btn-success"
        >
          Play game
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    banChon: state.gameXucXacReducers.banChon,
    soBanThang: state.gameXucXacReducers.soBanThang,
    tongSoBanChoi: state.gameXucXacReducers.tongSoBanChoi,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomXucXac = setInterval(() => {
        dispatch({
          type: "PLAY_GAME",
        });

        count++;
        if (count > 10) {
          clearInterval(randomXucXac);
          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);

      // dispatch({
      //   type: "PLAY_GAME",
      // });

      // dispatch({
      //   type: "END_GAME",
      // });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaXucXac);
