import React, { Component } from "react";
import "../MainPage.scss";

export default class Story extends Component {
  render() {
    return (
      <div>
        <div className="about container">
          <div className="row">
            <div className="col-md-6 my-5">
              <img
                className="aboutImage"
                src="/images/about-1-600x400.jpg"
                alt="aboutImage"
              />
            </div>
            <div className="col-md-6 my-5 text-right">
              <h1 className="text-danger text-center">About Our Shop</h1>
              <p className="py-3 text-center">
                sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore
                et consectetur adipiscing sed do eiusmod tempor incididunt ut
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod
                tempor incididunt ut labore et consectetur adipiscing sed do
                eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet, eiusmod tempor incididunt ut labore et
                consectetur adipiscing sed do eiusmod
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
