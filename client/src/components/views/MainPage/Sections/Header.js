import React, { Component } from "react";
import "../MainPage.scss";

export default class header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="inner">
            <div className="header-text text-center">
              <h1>Welcome to our Shop</h1>
              <h4>Offering Yummy Pizza</h4>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
