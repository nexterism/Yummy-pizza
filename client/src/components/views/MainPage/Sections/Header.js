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
              <h5>Offering Yummy Pizza</h5>
              {/* <p>
                <br /> Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                ametLorem ipsum <br />
                dolor sit amet Lorem ipsum dolor sit amet
              </p> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
