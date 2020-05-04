import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer text-center pb-1 py-5">
          <h4>Yummy Pizza</h4>
          <i class="fa fa-facebook text-secondary p-3" aria-hidden="true"></i>
          <i class="fa fa-twitter text-secondary p-3" aria-hidden="true"></i>
          <i class="fa fa-rss text-secondary p-3" aria-hidden="true"></i>
          <i class="fa fa-envelope text-secondary p-3" aria-hidden="true"></i>
          <i class="fa fa-instagram text-secondary p-3" aria-hidden="true"></i>
          <p className="text-white">
            &copy;Design by <span className="text-danger">Nexterism</span>
          </p>
        </div>
      </React.Fragment>
    );
  }
}
