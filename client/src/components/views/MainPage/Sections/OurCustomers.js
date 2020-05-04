import React, { Component } from "react";
import "../MainPage.scss";

export default class OurClients extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="ourCustomers text-center text-white py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <i class="py-3 fa fa-smile-o" aria-hidden="true"></i>
                <h1>600</h1>
                <h5>Happy Customers</h5>
              </div>
              <div className="col-md-3">
                <i class="py-3 fa fa-shield" aria-hidden="true"></i>
                <h1>100+</h1>
                <h5>Feedback</h5>
              </div>
              <div className="col-md-3">
                <i class="py-3 fa fa-cutlery" aria-hidden="true"></i>
                <h1>8</h1>
                <h5>Products</h5>
              </div>
              <div className="col-md-3">
                <i class="py-3 fa fa-thumbs-o-up" aria-hidden="true"></i>
                <h1>225</h1>
                <h5>Ratings</h5>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
