import React, { Component } from "react";

export class DepartureArrivalTime extends Component {
  render() {
    return (
      <div className="time-airline inline col-md-4">
        <div className="time bold">
          <div className="departure-time inline">
            {this.props.time.departure}
          </div>
          <div className="inline separator">–</div>
          <div className="arrival-time inline">{this.props.time.arrival}</div>
        </div>
        <div className="airline second-line">
          <div className="airline-code inline">{this.props.airlineCode}</div>
          <div className="airline-number inline">{this.props.flightNumber}</div>
        </div>
      </div>
    );
  }
}
