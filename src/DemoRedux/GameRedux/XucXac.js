import React, { Component } from "react";

export default class XucXac extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-4">
            <button
              style={{ border: "none", outline: "none", padding: "80px" }}
              className="bg-danger"
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
              <div>
                <img src="./img/1.png" alt="" width={70} />
              </div>
              <div>
                <img src="./img/2.png" alt="" width={70} className="mx-4" />
              </div>
              <div>
                <img src="./img/3.png" alt="" width={70} />
              </div>
            </div>
          </div>
          <div className="col-4">
            <button
              style={{ border: "none", outline: "none", padding: "80px" }}
              className="bg-dark"
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
