import React, { Component } from "react";

export class ElapsedTime extends Component {
  render() {
    return (
      <div className="elapsed-time-airports inline col-md-4">
        <div className="elapsed-time bold">{this.props.elapsedTime}</div>
        <div className="airports second-line">
          <div className="departure-airport inline">
            {this.props.airports.departure}
          </div>
          <div className="inline separator">–</div>
          <div className="arriva-airport inline">
            {this.props.airports.arrival}
          </div>
        </div>
      </div>
    );
  }
}
