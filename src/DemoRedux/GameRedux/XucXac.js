import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-4">
            <button
              style={{ border: "none", outline: "none", padding: "40px" }}
              className="bg-danger"
              onClick={() => this.props.chonCaCuoc("Tài")}
            >
              <p style={{ width: "100%", height: "100%", fontSize: "80px" }}>
                Tài
              </p>
            </button>
          </div>

          <div className="col-4">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              {this.props.mangXucXac.map((xucXac, index) => {
                return (
                  <div key={index}>
                    <img
                      style={{ borderRadius: "10px" }}
                      src={xucXac.hinhAnh}
                      alt={xucXac.hinhAnh}
                      className="mx-2"
                      width={70}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-4">
            <button
              style={{ border: "none", outline: "none", padding: "40px" }}
              className="bg-dark"
              onClick={() => this.props.chonCaCuoc("Xỉu")}
            >
              <p
                style={{
                  width: "100%",
                  height: "100%",
                  color: "#FFF",
                  fontSize: "80px",
                }}
              >
                Xỉu
              </p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.gameXucXacReducers.mangXucXac,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chonCaCuoc: (banChon) => {
      dispatch({
        type: "CHON_CA_CUOC",
        banChon,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
