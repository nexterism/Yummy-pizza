import React, { Component } from "react";
import "../MainPage.scss";

export default class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="pizza text-center container py-5">
          <h1 className="text-danger">Our Pizza</h1>
          <div className="row">
            <div className="col-md-4">
              <img src="/images/seller-2-200x200.png" />
              <h4>Pizza Margherita</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nibh urna
              </p>
            </div>
            <div className="col-md-4">
              <img src="/images/seller-2-200x200.png" />
              <h4>Pizza Margherita</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nibh urna
              </p>
            </div>
            <div className="col-md-4">
              <img src="/images/seller-2-200x200.png" />
              <h4>Pizza Margherita</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nibh urna
              </p>
            </div>
            <div className="col-md-4">
              <img src="/images/seller-2-200x200.png" />
              <h4>Pizza Margherita</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nibh urna
              </p>
            </div>
            <div className="col-md-4">
              <img src="/images/seller-2-200x200.png" />
              <h4>Pizza Margherita</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nibh urna
              </p>
            </div>
            <div className="col-md-4">
              <img src="/images/seller-2-200x200.png" />
              <h4>Pizza Margherita</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nibh urna
              </p>
            </div>
          </div>
          <div>
            <h4>
              For Order Click on <a href="/menu">Menu</a>
            </h4>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
